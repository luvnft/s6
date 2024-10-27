import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js';
import { IProduct } from './types';
export const WALLET_ADDRESS: string =
  'F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh';
export const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
export const keypair = Keypair.generate();
export const referencePublicKey = keypair.publicKey;

const conversionRateUSDToSOL = 700; // Example conversion rate

export const dummyProducts: IProduct[] = [
  {
    id: 1,
    price: Number((5555 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://i.imgur.com/2TzTBBr.png',
      description: 'Mega (1 million followers) influencer delivery of a product to your customer.',
      name: 'Influencer Delivery - Tier 1',
  },
  {
    id: 2,
    price: Number((4444 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl: 'https://i.imgur.com/sUNx4nU.png',
    description: 'Macro (500K-1M followers) influencer delivery of a product to your customer.',
    name: 'Influencer Delivery - Tier 2',
  },
  {
    id: 3,
    price: Number((3333 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://i.imgur.com/2Rpoahl.png',
    description: 'Mid (100K-500K Followers) influencer delivery of a product to your customer.',
    name: 'Influencer Booking - Tier 3',
  },
  {
    id: 4,
    price: Number((2222 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://i.imgur.com/Yo2nfGR.png',
    description: 'Local (10K-100K Followers) influencer delivery of a product to your customer.',
    name: 'Influencer Booking - Tier 4',
  },
  {
    id: 5,
    price: Number((1555 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://i.imgur.com/VjowbaV.png',
    description: 'Monthly package for 25 social POD (proof of delivery) photos and videos showcasing customer interactions or products, shared by drivers on social media and in your branded Discord channel.',
    name: 'POD AD - Tier 1',
  },
  {
    id: 6,
    price: Number((777 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://i.imgur.com/UZTunK1.png',
    description: 'Monthly package for 15 social proof of delivery (POD) photos and videos, featuring customer interactions or showcasing the product without customers.',
    name: 'POD AD - Tier 2',
  },
  {
    id: 7,
    price: Number((555 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://i.imgur.com/Ups3pKj.png',
    description: 'Monthly package of 5 social POD (proof of delivery) photos and videos showcasing customer interactions or products, shared by drivers on social media and in your branded Discord channel.',
    name: 'POD AD - Tier 3',
  },
  {
    id: 8,
    price: Number((100 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://i.imgur.com/b1WP1Fq.png',
    description: 'Branded Discord channel for ongoing communication with delivery drivers and influencers. Facilitates open dialogue and quick response times for delivery needs.',
    name: 'Branded Discord',
  },
  {
    id: 9,
    price: Number((249 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://i.imgur.com/x2M37Wt.png',
    description: 'NFT proof of delivery service airdropped to your wallet upon successful delivery. Enhance your brand\'s transparency and traceability in every transaction.',
    name: 'NFT POD',
  },
  {
    id: 10,
    price: Number((399 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://i.imgur.com/Vi0ZsI0.png',
      description: 'Livestream event showcasing the delivery process, enhancing customer engagement and brand visibility.',
      name: 'Livestream',
  },
];
