"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";
import { IoLogOutOutline } from "react-icons/io5";
import { Wallet } from "lucide-react";

export default function ConnectWalletButton() {
    const { login, logout, authenticated, ready } = usePrivy();

    if (!ready) return null;

    return (
        <Button onClick={() => (authenticated ? logout() : login())} className="cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            {authenticated ? (
                <div className="flex items-center">
                    <IoLogOutOutline className="w-4 h-4 mr-2" /> Logout
                </div>
            ) : (
                <div className="flex items-center">
                    <Wallet className="w-4 h-4 mr-2" /> Connect Wallet
                </div>
            )}
        </Button>
    );
}
