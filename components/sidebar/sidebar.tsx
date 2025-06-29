import sidebarItems from "@/helper/poolSidebarcontents";
import { ChevronRight } from "lucide-react";
import React from "react";

const Sidebar = ({ isOpen, onClose, activeTab, setActiveTab }: { isOpen: boolean, onClose: () => void, activeTab: string, setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div className="h-screen">
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <div className={`
                fixed top-0 left-0 h-full bg-gradient-to-b from-purple-900/90 to-indigo-900/90 
                backdrop-blur-xl border-r border-purple-500/20 z-50 transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0 lg:static lg:z-auto
                w-80 lg:w-80 min-w-80
                flex flex-col
            `}>
                <div className="flex-1 flex flex-col p-6">
                    <div className="mb-8 flex-shrink-0">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent whitespace-nowrap">
                            MergeProtocol
                        </h1>
                        <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2" />
                    </div>

                    <nav className="space-y-3 flex-1">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        onClose();
                                    }}
                                    className={`
                                        w-full flex items-center space-x-3 px-4 py-4 rounded-xl text-left
                                        transition-all duration-200 group min-h-[56px]
                                        ${isActive
                                            ? 'bg-gradient-to-r from-purple-600/50 to-pink-600/50 text-white shadow-lg'
                                            : 'text-purple-200 hover:bg-purple-800/30 hover:text-white'
                                        }
                                    `}
                                >
                                    <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-purple-200' : 'text-purple-400'}`} />
                                    <span className="font-medium flex-1 whitespace-nowrap">{item.label}</span>
                                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Footer */}
                <div className="flex-shrink-0 p-6">
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/20">
                        <p className="text-sm text-purple-300 font-medium whitespace-nowrap">Pool Management</p>
                        <p className="text-xs text-purple-400 mt-1 leading-relaxed">Create and manage your liquidity pools</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;