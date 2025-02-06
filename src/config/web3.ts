import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { mainnet } from 'viem/chains';

export const projectId = 'YOUR_PROJECT_ID'; // Replace with your WalletConnect project ID

const metadata = {
  name: 'Charity Donation Tracker',
  description: 'Blockchain-based charity donation tracking system',
  url: 'https://your-website.com', // Replace with your website
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet];
export const config = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig: config, projectId, chains });