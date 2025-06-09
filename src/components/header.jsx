import { useAccount } from "wagmi";

const Header = () => {
  const { address, isConnected } = useAccount();
  
  const formatAddress = (addr) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <>
      <div className="header">
        <h4>
          {isConnected 
            ? `Connected: ${formatAddress(address)}` 
            : "Wallet Not Connected"
          }
        </h4>
      </div>
    </>
  );
};

export default Header;