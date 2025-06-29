"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, GitMerge, Wallet, Github, Zap, Shield, Users, ChevronRight, Star, TrendingUp } from "lucide-react";
import ConnectWalletButton from "@/components/connect/ConnectButton";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { authenticated, login } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div
        className="fixed pointer-events-none z-50 w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          filter: 'blur(1px)'
        }}
      />

      <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-white/10 backdrop-blur-md bg-white/5 relative z-10">
        <div className={`flex items-center gap-2 text-lg font-bold transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="relative">
            <GitMerge className="w-6 h-6 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text" />
            <GitMerge className="w-6 h-6 text-purple-400 absolute inset-0 animate-pulse" />
          </div>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Merge Protocol
          </span>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Button variant="ghost" className="hover:bg-white/10 transition-all duration-300 hover:scale-105">Home</Button>
          <Button variant="ghost" className="hover:bg-white/10 transition-all duration-300 hover:scale-105">My Pools</Button>
          <Button variant="ghost" className="hover:bg-white/10 transition-all duration-300 hover:scale-105">Agent</Button>
          <ConnectWalletButton />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 hover:text-purple-400 transition-colors" />
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col gap-4 pt-10 bg-slate-900/95 backdrop-blur-md border-white/10">
              <SheetHeader>
                <SheetTitle className="text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Merge Protocol</SheetTitle>
              </SheetHeader>
              <Button variant="ghost" color="white" className="hover:bg-white/10">Home</Button>
              <Button variant="ghost" className="hover:bg-white/10">My Pools</Button>
              <Button variant="ghost" className="hover:bg-white/10">Agent</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600">
                <Wallet className="w-4 h-4 mr-2" /> Connect
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 relative z-10">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 relative">
            <span className="relative inline-block">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Merge Protocol
              </span>
            </span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-slate-300 max-w-2xl mb-12 text-lg leading-relaxed">
            A revolutionary decentralized protocol to create bounty pools for repositories and
            release funds automatically based on commits and merge events. Built
            for DAOs, open-source maintainers, and contributors.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button onClick={() => {
            authenticated ? router.push("/pools") : login()
          }} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group px-8 py-6 text-lg">
            Create Bounty Pool
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>

        {/* Stats section */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 w-full max-w-4xl transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">$2.4M+</h3>
              <p className="text-slate-400">Total Bounties Paid</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">15,000+</h3>
              <p className="text-slate-400">Active Contributors</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-slate-400">Secure & Automated</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10 w-full max-w-sm bg-white/20" />

        {/* Enhanced contributor card */}
        <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Card className="w-full max-w-md text-left bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="ring-2 ring-purple-400/50">
                    <AvatarImage src="/user.png" />
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold">NM</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-white">naveen-2111-dev</p>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-sm text-slate-400 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-green-400" />
                    Recently merged: Fix wallet auth flow
                  </p>
                </div>
              </div>
              <Separator className="bg-white/20" />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-400" />
                  <p className="text-sm text-slate-400">Repository:</p>
                </div>
                <p className="text-sm text-purple-300 font-mono bg-white/5 px-2 py-1 rounded">
                  github.com/merge-protocol/core
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500">Bounty earned:</span>
                  <span className="text-sm font-bold text-green-400">+0.25 ETH</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="w-full text-sm text-slate-400 text-center py-6 border-t border-white/10 backdrop-blur-md bg-white/5 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p>© 2025 Merge Protocol. All rights reserved.</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-white/10">
              Privacy
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-white/10">
              Terms
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-white/10">
              GitHub
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}