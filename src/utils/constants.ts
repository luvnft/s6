import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js';
import { IProduct } from './types';

export const WALLET_ADDRESS: string =
  'F5iFyvKbtXhX8BgHyC9tGAfgDKMagVBuygwsSTcUwQAh';
export const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
export const keypair = Keypair.generate();
export const referencePublicKey = keypair.publicKey;

const conversionRateUSDToSOL = 700; // Example conversion rate

export const deliveryProducts: IProduct[] = [
  {
    id: 1,
    price: Number((5000 / conversionRateUSDToSOL).toFixed(2)), // Influencer Tier 1: 1M+ Followers
    imageUrl: 'blob:https://i.imgur.com/2TzTBBr.png',
    description: 'One-time booking of a verified influencer with over 1 million followers delivery a product to your customer with Proof of delivery that can include a photo or video.',
    name: 'Influencer Delivery - Tier 1 (1M+ Followers)',
    serviceArea: 'United States',
    mileRange: 'N/A',
  },
  {
    id: 2,
    price: Number((4000 / conversionRateUSDToSOL).toFixed(2)), // Influencer Tier 2: 500K-1M Followers
    imageUrl: 'https://i.imgur.com/sUNx4nU.png',
    description: 'One-time booking of a verified influencer with 500K-1M followers for 1 hour. This package includes a $1000 service fee and a branded Discord channel for communication.',
    name: 'Influencer Delivery - Tier 2 (500K-1M Followers)',
    serviceArea: 'United States',
    mileRange: 'N/A',
  },
  {
    id: 3,
    price: Number((3000 / conversionRateUSDToSOL).toFixed(2)), // Influencer Tier 3: 100K-500K Followers
    imageUrl: 'https://i.imgur.com/2Rpoahl.png',
    description: 'One-time booking of a verified influencer with 100K-500K followers for 1 hour. Includes a $1000 service fee and access to a branded Discord channel.',
    name: 'Influencer Booking - Tier 3 (100K-500K Followers)',
    serviceArea: 'United States',
    mileRange: 'N/A',
  },
  {
    id: 4,
    price: Number((2000 / conversionRateUSDToSOL).toFixed(2)), // Influencer Tier 4: 10K-100K Followers
    imageUrl: 'https://i.imgur.com/Yo2nfGR.png',
    description: 'One-time booking of a verified influencer with 10K-100K followers for 1 hour. Includes a $1000 service fee and access to a branded Discord channel for delivery communication.',
    name: 'Influencer Booking - Tier 4 (10K-100K Followers)',
    serviceArea: 'United States',
    mileRange: 'N/A',
  },
  {
    id: 5,
    price: Number((1500 / conversionRateUSDToSOL).toFixed(2)), // Tier 1: Monthly Proof of Delivery (50 deliveries)
    imageUrl: 'https://i.imgur.com/VjowbaV.png',
    description: 'Monthly package for 25 social POD (proof of delivery) photos and videos showcasing customer interactions or products, shared by drivers on social media and in your branded Discord channel.',
    name: 'POD AD - Tier 1',
    serviceArea: 'South Jersey, NJ',
    mileRange: '0-10 miles',
  },
  {
    id: 6,
    price: Number((750 / conversionRateUSDToSOL).toFixed(2)), // Tier 2: Monthly Proof of Delivery (25 deliveries)
    imageUrl: 'https://i.imgur.com/UZTunK1.png',
    description: 'Monthly package for 15 social proof of delivery (POD) photos and videos, featuring customer interactions or showcasing the product without customers.',
    name: 'POD AD - Tier 2',
    serviceArea: 'South Jersey, NJ',
    mileRange: '0-10 miles',
  },
  {
    id: 7,
    price: Number((300 / conversionRateUSDToSOL).toFixed(2)), // Tier 3: Monthly Proof of Delivery (5 deliveries)
    imageUrl: 'https://i.imgur.com/Ups3pKj.png',
    description: 'Monthly package of 5 social POD (proof of delivery) photos and videos showcasing customer interactions or products, shared by drivers on social media and in your branded Discord channel.',
    name: 'POD AD - Tier 3',
    serviceArea: 'South Jersey, NJ',
    mileRange: '0-10 miles',
  },
  {
    id: 8,
    price: Number((100 / conversionRateUSDToSOL).toFixed(2)), // Branded Discord Channel
    imageUrl: 'https://i.imgur.com/b1WP1Fq.png',
    description: 'Branded Discord channel for ongoing communication with delivery drivers and influencers. Facilitates open dialogue and quick response times for delivery needs.',
    name: 'Branded Discord Channel',
    serviceArea: 'South Jersey, NJ',
    mileRange: '0-10 miles',
  },
  {
    id: 9,
    price: Number((50 / conversionRateUSDToSOL).toFixed(2)), // NFT Proof of Delivery
    imageUrl: 'https://i.imgur.com/x2M37Wt.png',
    description: 'NFT proof of delivery service airdropped to your wallet upon successful delivery. Enhance your brand\'s transparency and traceability in every transaction.',
    name: 'NFT POD Airdrop',
    serviceArea: 'N/A',
    mileRange: 'N/A',
  },
  {
    id: 9,
    price: Number((100 / conversionRateUSDToSOL).toFixed(2)), // NFT Proof of Delivery
    imageUrl: 'https://i.imgur.com/Vi0ZsI0.png',
    description: 'NFT proof of delivery service airdropped to your wallet upon successful delivery. Enhance your brand\'s transparency and traceability in every transaction.',
    name: 'Livestream event',
    serviceArea: 'N/A',
    mileRange: 'N/A',
  },
];