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
    name: 'Influencer D1 — MEGA Drop',
    description:
      '1M+ follower influencer TikTok delivery with 11-sec Proof-of-Delivery video and brand tag @deliv3ry.',
  },
  {
    id: 2,
    price: Number((1260 / conversionRateUSDToSOL).toFixed(2)), // 6.35 SOL
    imageUrl: 'https://i.imgur.com/sUNx4nU.png',
    name: 'Influencer D2 — MACRO Drop',
    description:
      '500K–1M follower influencer TikTok delivery with product hand-off and What3Words location tag.',
  },
  {
    id: 3,
    price: Number((950 / conversionRateUSDToSOL).toFixed(2)), // 4.76 SOL
    imageUrl: 'https://i.imgur.com/2Rpoahl.png',
    name: 'Influencer D3 — MID Drop',
    description:
      '100K–500K follower TikTok delivery reel featuring product unboxing and verified @deliv3ry tag.',
  },
  {
    id: 4,
    price: Number((630 / conversionRateUSDToSOL).toFixed(2)), // 3.17 SOL
    imageUrl: 'https://i.imgur.com/Yo2nfGR.png',
    name: 'Influencer D4 — LOCAL Drop',
    description:
      'Local (10K–100K Followers) influencer delivery of a product to your customer with TikTok proof.',
  },
{
  id: 5,
  price: Number((3995 / conversionRateUSDToSOL).toFixed(2)), // ≈ 20.07 SOL ($3,995 USD)
  imageUrl: 'https://i.imgur.com/VjowbaV.png',
  name: 'POD AD1 — Enterprise Vault 25',
  description:
    '25 blockchain-verified TikTok deliveries with NFT proof airdrops and smart contract tracking for enterprise campaigns.',
},
{
  id: 6,
  price: Number((1995 / conversionRateUSDToSOL).toFixed(2)), // ≈ 10.02 SOL ($1,995 USD)
  imageUrl: 'https://i.imgur.com/UZTunK1.png',
  name: 'POD AD2 — Premium Sprint 15',
  description:
    '15 blockchain-certified Proof-of-Delivery TikTok reels with NFT verification and standard smart contract escrow.',
},
{
  id: 7,
  price: Number((995 / conversionRateUSDToSOL).toFixed(2)), // ≈ 5.00 SOL ($995 USD)
  imageUrl: 'https://i.imgur.com/Ups3pKj.png',
  name: 'POD AD3 — Starter Chain 5',
  description:
    '5 blockchain-authenticated TikTok Proof-of-Delivery reels with NFT proof and basic verification layer.',
},
  {
    id: 8,
    price: Number((777 / conversionRateUSDToSOL).toFixed(2)), // 4 SOL ≈ $795 USD
    imageUrl: 'https://i.imgur.com/qLDDUrV.png',
    name: 'Branded TikTok AR Effect 👻',
    description:
      'Branded TikTok AR filter used by @deliv3ry drivers in each Proof-of-Delivery post for viral reach.',
  },
  {
    id: 9,
    price: Number((999 / conversionRateUSDToSOL).toFixed(2)), // 5 SOL ≈ $995 USD
    imageUrl: 'https://i.imgur.com/x2M37Wt.png',
    name: 'PODROP NFT Campaign 🪙',
    description:
      'Proof-of-Delivery NFT campaign minting each TikTok delivery as collectible on-chain brand content.',
  },
  {
    id: 10,
    price: Number((1999 / conversionRateUSDToSOL).toFixed(2)), // 5 SOL ≈ $995 USD
    imageUrl: 'https://i.imgur.com/Vi0ZsI0.png',
    name: 'Livestream Delivery Show 🎥',
    description:
      'Branded TikTok Live delivery event with creator hosting, live audience chat and brand mentions.',
  },
];
