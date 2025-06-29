const CreatePoolContent = () => {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-2">Create New Pool</h2>
                <p className="text-purple-300 mb-6">Set up a new liquidity pool for token pairs</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-purple-300 mb-2">Token A</label>
                            <div className="bg-black/20 rounded-xl p-4 border border-purple-500/20">
                                <input
                                    type="text"
                                    placeholder="Select token"
                                    className="w-full bg-transparent text-white placeholder-purple-400 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-purple-300 mb-2">Token B</label>
                            <div className="bg-black/20 rounded-xl p-4 border border-purple-500/20">
                                <input
                                    type="text"
                                    placeholder="Select token"
                                    className="w-full bg-transparent text-white placeholder-purple-400 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-purple-300 mb-2">Initial Price</label>
                            <div className="bg-black/20 rounded-xl p-4 border border-purple-500/20">
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full bg-transparent text-white placeholder-purple-400 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-purple-300 mb-2">Fee Tier</label>
                            <div className="bg-black/20 rounded-xl p-4 border border-purple-500/20">
                                <select className="w-full bg-transparent text-white focus:outline-none">
                                    <option value="">Select fee tier</option>
                                    <option value="0.05">0.05%</option>
                                    <option value="0.3">0.30%</option>
                                    <option value="1">1.00%</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Create Pool
                </button>
            </div>
        </div>)
};

export default CreatePoolContent;