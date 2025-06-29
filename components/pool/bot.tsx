import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react';

const BotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm MergeBot. How can I help you with your pools today?", isBot: true }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const sendMessage = () => {
        if (!inputMessage.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            isBot: false
        };

        setMessages([...messages, newMessage]);
        setInputMessage('');

        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: "Thanks for your message! I'm here to help with pool creation, management, and any questions you might have.",
                isBot: true
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    if (!isOpen) {
        return (
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-110 group"
                >
                    <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
                </button>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className={`bg-gradient-to-b from-purple-900/95 to-indigo-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'} w-80`}>
                <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-sm">MergeBot</h3>
                            <p className="text-purple-300 text-xs">Always here to help</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="text-purple-300 hover:text-white transition-colors"
                        >
                            <Minimize2 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-purple-300 hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        <div className="flex-1 p-4 space-y-3 h-64 overflow-y-auto">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div
                                        className={`max-w-xs px-3 py-2 rounded-lg text-sm ${message.isBot
                                            ? 'bg-purple-800/50 text-purple-100 rounded-bl-none'
                                            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t border-purple-500/20">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-black/20 text-white placeholder-purple-400 px-3 py-2 rounded-lg border border-purple-500/20 focus:outline-none focus:border-purple-400/50 text-sm"
                                />
                                <button
                                    onClick={sendMessage}
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BotWidget;