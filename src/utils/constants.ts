import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js';
import { IProduct } from './types';

export const WALLET_ADDRESS: string =
  '9MkXqB55qNMrYN9EVcHNHCaAoEtZzvjjoFxjEypCwGJq';

export const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
export const keypair = Keypair.generate();
export const referencePublicKey = keypair.publicKey;

// 💰 Conversion rate: 1 SOL = $199 USD
const conversionRateUSDToSOL = 199;

// 🪩 Updated Premium TikTok Delivery + Ad Campaign Services
export const dummyProducts: IProduct[] = [
  {
    id: 1,
    price: Number((3570 / conversionRateUSDToSOL).toFixed(2)), // 17.94 SOL
    imageUrl: 'https://i.imgur.com/2TzTBBr.png',
    name: 'Influencer D1',
    description:
      '1M+ follower influencer TikTok delivery featuring an 11-sec Proof-of-Delivery video.',
  },
  {
    id: 2,
    price: Number((1260 / conversionRateUSDToSOL).toFixed(2)), // 6.35 SOL
    imageUrl: 'https://i.imgur.com/sUNx4nU.png',
    name: 'Influencer D2',
    description:
      '500K–1M influencer TikTok 11-sec Proof-of-Delivery video reel.',
  },
  {
    id: 3,
    price: Number((950 / conversionRateUSDToSOL).toFixed(2)), // 4.76 SOL
    imageUrl: 'https://i.imgur.com/2Rpoahl.png',
    name: 'Influencer D3',
    description:
      '100K–500K influencer TikTok 11-sec Proof-of-Delivery video reel.',
  },
  {
    id: 4,
    price: Number((630 / conversionRateUSDToSOL).toFixed(2)), // 3.17 SOL
    imageUrl: 'https://i.imgur.com/Yo2nfGR.png',
    name: 'Influencer D4',
    description:
      '10K–100K influencer TikTok 11-sec Proof-of-Delivery video reel.',
  },
{
  id: 5,
  price: Number((3995 / conversionRateUSDToSOL).toFixed(2)), // ≈ 20.07 SOL ($3,995 USD)
  imageUrl: 'https://i.imgur.com/VjowbaV.png',
  name: 'POD AD1',
  description:
    '25 blockchain verified TikTok deliveries for enterprise campaigns.',
},
{
  id: 6,
  price: Number((1995 / conversionRateUSDToSOL).toFixed(2)), // ≈ 10.02 SOL ($1,995 USD)
  imageUrl: 'https://i.imgur.com/UZTunK1.png',
  name: 'POD AD2',
  description:
    '15 blockchain verified TikTok deliveries for enterprise campaigns.',
},
{
  id: 7,
  price: Number((995 / conversionRateUSDToSOL).toFixed(2)), // ≈ 5.00 SOL ($995 USD)
  imageUrl: 'https://i.imgur.com/Ups3pKj.png',
  name: 'POD AD3 — Starter',
  description:
    '5 blockchain verified TikTok TikTok deliveries for enterprise campaigns.',
},
  {
  id: 8,
  price: Number((795 / conversionRateUSDToSOL).toFixed(2)), // ≈ 4 SOL ($795 USD)
  imageUrl: 'https://i.imgur.com/qLDDUrV.png',
  name: 'UGC Unboxing Reel',
  description:
    '11-sec Proof-of-Delivery unboxing reel using your branded TikTok AR effect.',
},
  {
    id: 9,
    price: Number((999 / conversionRateUSDToSOL).toFixed(2)), // 5 SOL ≈ $995 USD
    imageUrl: 'https://i.imgur.com/x2M37Wt.png',
    name: 'PODROP Campaign',
    description:
      'Proof-of-Delivery tokenized delivery campaign.',
  },
  {
    id: 10,
    price: Number((1999 / conversionRateUSDToSOL).toFixed(2)), // 5 SOL ≈ $995 USD
    imageUrl: 'https://i.imgur.com/Vi0ZsI0.png',
    name: 'Live Delivery Show',
    description:
      'Branded TikTok Live delivery show scheduled and promoted.',
  },
];
