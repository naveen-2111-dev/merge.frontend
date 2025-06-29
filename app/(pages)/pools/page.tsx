"use client"

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '@/components/sidebar/sidebar';
import CreatePoolContent from '@/components/pool/createPool';
import MyPoolsContent from '@/components/pool/MyPools';
import BotWidget from '@/components/pool/bot';

const PoolsPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string>('create');

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
    );
};

export default PoolsPage;