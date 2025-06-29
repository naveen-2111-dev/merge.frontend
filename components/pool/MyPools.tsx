import { Wallet } from "lucide-react";

const MyPoolsContent = () => {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-2">My Pools</h2>
                <p className="text-purple-300 mb-6">Manage your existing liquidity pools</p>

                <div className="space-y-4">
                    {[1, 2, 3].map((pool) => (
                        <div key={pool} className="bg-black/20 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/30 transition-colors">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-purple-800" />
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-purple-800" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">ETH/USDC</h3>
                                        <p className="text-purple-400 text-sm">0.3% Fee Tier</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-white font-semibold">$12,345.67</p>
                                    <p className="text-green-400 text-sm">+2.34% APR</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state for no pools */}
                <div className="text-center py-12 opacity-50">
                    <Wallet className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-purple-300">No pools found</p>
                    <p className="text-purple-400 text-sm mt-2">Create your first pool to get started</p>
                </div>
            </div>
        </div>
    )
};

export default MyPoolsContent