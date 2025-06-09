import React, { useState } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useNetwork } from "wagmi";
import { ethers } from "ethers";
import ABI from "./ABI.json";

const Slider = () => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { open } = useWeb3Modal();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  // Token configurations for different networks
  const tokenConfigs = {
    1: [ // Mainnet
      {
        address: "0xA0b86a33E6441b8435b662f0E2d0B8A0E4B5B8B0",
        name: "USDT",
        decimals: 6
      }
    ],
    5: [ // Goerli
      {
        address: "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49",
        name: "Test Token",
        decimals: 18
      },
      {
        address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
        name: "USDC",
        decimals: 6
      }
    ]
  };

  const checkTokenBalances = async () => {
    if (!isConnected || !address || !window.ethereum) {
      setMessage("Please connect your wallet first");
      return;
    }

    setIsProcessing(true);
    setMessage("Checking token balances...");

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const chainId = chain?.id || 1;
      const tokens = tokenConfigs[chainId] || [];

      if (tokens.length === 0) {
        setMessage("No tokens configured for this network");
        setIsProcessing(false);
        return;
      }

      let hasEligibleTokens = false;
      const minBalance = ethers.parseEther("0.001"); // Minimum balance threshold

      for (const token of tokens) {
        try {
          const contract = new ethers.Contract(token.address, ABI, provider);
          const balance = await contract.balanceOf(address);
          const formattedBalance = ethers.formatUnits(balance, token.decimals);
          
          console.log(`${token.name} balance: ${formattedBalance}`);
          
          if (balance > minBalance) {
            hasEligibleTokens = true;
          }
        } catch (error) {
          console.error(`Error checking ${token.name} balance:`, error);
        }
      }

      if (hasEligibleTokens) {
        setMessage("✅ Eligible for token claim! You have sufficient token balances.");
      } else {
        setMessage("❌ Not eligible. Minimum token balance required: 0.001 tokens");
      }

    } catch (error) {
      console.error("Error checking balances:", error);
      setMessage("Error checking balances. Please try again.");
    }

    setIsProcessing(false);
  };

  const handleClaim = async () => {
    if (!isConnected) {
      setMessage("Please connect your wallet first");
      return;
    }

    setIsProcessing(true);
    setMessage("Processing claim...");

    try {
      // Simulate claim process
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage("🎉 Claim successful! Tokens have been sent to your wallet.");
    } catch (error) {
      console.error("Claim error:", error);
      setMessage("Claim failed. Please try again.");
    }

    setIsProcessing(false);
  };

  return (
    <>
      <div className="slider">
        <h1>Claim Free Tokens</h1>
        <p>Connect your wallet to check eligibility and claim tokens</p>

        {message && (
          <div className="message">
            <p>{message}</p>
          </div>
        )}

        <div className="button-container">
          {!isConnected ? (
            <button onClick={() => open()}>
              Connect Wallet
            </button>
          ) : (
            <>
              <button 
                onClick={checkTokenBalances}
                disabled={isProcessing}
              >
                {isProcessing ? "Checking..." : "Check Eligibility"}
              </button>
              <button 
                onClick={handleClaim}
                disabled={isProcessing}
                className="claim-button"
              >
                {isProcessing ? "Processing..." : "Claim Tokens"}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Slider;