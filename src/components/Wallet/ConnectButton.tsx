import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from '@ethersproject/units'

export default function ConnectButton() {

  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <div className='bg-green-100 rounded-md'>
      <text className='rounded-md px-2 bg-green-100 py-1 text-sm font-bold'>
        {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
      </text>

      <button className='bg-white hover:bg-purple-200 rounded-md px-2 py-1 text-sm font-bold'>
        <text>
          {account && 
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </text>
      </button>
    </div>

  ) : (
    <button className='wallet-button text-sm font-bold' onClick={handleConnectWallet}>Connect Wallet</button>
  );
}