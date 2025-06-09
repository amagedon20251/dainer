import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { arbitrum, mainnet, goerli, sepolia } from "viem/chains";

// Web3Modal configuration
const projectId = "a3e7bf8adcf3e27ae8623a68978b5632";

const metadata = {
  name: "Token Faucet DApp",
  description: "Educational Token Faucet Application",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum, goerli, sepolia];

export const wagmiConfig = defaultWagmiConfig({ 
  chains, 
  projectId, 
  metadata 
});

// Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });