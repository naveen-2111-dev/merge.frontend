"use client";

import { ReactNode } from "react";
import { PrivyProvider } from "@privy-io/react-auth";

interface PrivyProviderWrapperProps {
    children: ReactNode;
}

export const PrivyProviderWrapper = ({ children }: PrivyProviderWrapperProps) => {
    return (
        <PrivyProvider
            //privy orovider wrapes the application
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
            config={{
                appearance: {
                    accentColor: "#6A6FF5",
                    theme: "#4b196b",
                    showWalletLoginFirst: false,
                    walletList: [
                        "detected_ethereum_wallets",
                        "metamask",
                        "coinbase_wallet",
                        "rainbow",
                        "wallet_connect",
                    ],
                },
                defaultChain: {
                    id: 57054,
                    name: "Sonic Blaze Testnet",
                    nativeCurrency: {
                        name: "SONIC",
                        symbol: "S",
                        decimals: 18,
                    },
                    rpcUrls: {
                        default: {
                            http: ["https://rpc.blaze.soniclabs.com"],
                        },
                    },
                    blockExplorers: {
                        default: {
                            name: "SonicScan",
                            url: "https://explorer.testnet.sonic.xyz",
                        },
                    },
                },
                supportedChains: [
                    {
                        id: 57054,
                        name: "Sonic Blaze Testnet",
                        nativeCurrency: {
                            name: "SONIC",
                            symbol: "S",
                            decimals: 18,
                        },
                        rpcUrls: {
                            default: {
                                http: ["https://rpc.blaze.soniclabs.com"],
                            },
                        },
                        blockExplorers: {
                            default: {
                                name: "SonicScan",
                                url: "https://explorer.testnet.sonic.xyz",
                            },
                        },
                    },
                ],
                loginMethods: ["wallet", "github"],
                fundingMethodConfig: {
                    moonpay: {
                        useSandbox: true,
                    },
                },
                embeddedWallets: {
                    requireUserPasswordOnCreate: false,
                    showWalletUIs: true,
                    ethereum: {
                        createOnLogin: "users-without-wallets",
                    },
                    solana: {
                        createOnLogin: "off",
                    },
                },
                mfa: {
                    noPromptOnMfaRequired: false,
                },
                externalWallets: {},
            }}
        >
            {children}
        </PrivyProvider>
    );
};
