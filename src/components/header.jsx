import { useAccount } from "wagmi";
const Header = () => {
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();
  return (
    <>
      <div className="header">
        <h4>
          {isConnected ? `Connected Account: ${address}` : "Not connected"}
        </h4>
      </div>
    </>
  );
};

export default Header;
