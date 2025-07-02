'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Menu } from 'lucide-react'
import Sidebar from '@/components/sidebar/sidebar'
import CreatePoolContent from '@/components/pool/createPool'
import MyPoolsContent from '@/components/pool/MyPools'
import BotWidget from '@/components/pool/bot'
import axios from 'axios'

const PoolsClient = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<string>('create')
    const [isValid, setIsValid] = useState(true)

    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const installationId = searchParams.get('installation_id')

        const allKeys = Array.from(searchParams.keys())
        const hasOnlyInstallationId = allKeys.length === 1 && allKeys[0] === 'installation_id'

        if (!installationId || !hasOnlyInstallationId) {
            setIsValid(false)
            router.replace('/')
            return
        }

        axios.post('/api/githubId', { tooken: installationId }).catch((err) => {
            console.error('Error sending installation ID:', err)
        })
    }, [searchParams, router])

    if (!isValid) return <div className="text-red-500 text-center mt-10 text-xl">Forbidden</div>

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
            <div className="flex">
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                />
                <div className="flex-1 lg:ml-0">
                    <div className="lg:hidden bg-purple-900/50 backdrop-blur-xl border-b border-purple-500/20 p-4">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="text-white hover:text-purple-300 transition-colors"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                                MergeProtocol
                            </h1>
                            <div className="w-6" />
                        </div>
                    </div>
                    <BotWidget />
                    <div className="p-6 lg:p-8">
                        {activeTab === 'create' && <CreatePoolContent />}
                        {activeTab === 'my-pools' && <MyPoolsContent />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoolsClient
