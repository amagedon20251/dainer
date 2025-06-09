const Faq = () => {
  return (
    <>
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        
        <h4>How does the token faucet work?</h4>
        <p>
          Connect your wallet, check your eligibility based on existing token balances, 
          and claim free tokens if you meet the requirements. This is an educational demonstration.
        </p>
        
        <h4>What wallets are supported?</h4>
        <p>
          We support MetaMask, WalletConnect, and other Web3 wallets. Make sure you're 
          connected to the correct network (Ethereum Mainnet or Goerli testnet).
        </p>
        
        <h4>Is this safe to use?</h4>
        <p>
          This is an educational project. Always review transactions before signing. 
          Never share your private keys or seed phrases with anyone.
        </p>
        
        <h4>Why do I need a minimum balance?</h4>
        <p>
          The minimum balance requirement helps prevent spam and ensures the faucet 
          is used by genuine users who are actively participating in the ecosystem.
        </p>
      </div>
    </>
  );
};

export default Faq;