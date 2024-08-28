import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js';
import { IProduct } from './types';
export const WALLET_ADDRESS: string =
  '8hBosSCfzLy2fyoDU6UxfyALdj3vpPcW62s47Mth2ZSP';
export const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
export const keypair = Keypair.generate();
export const referencePublicKey = keypair.publicKey;

const conversionRateUSDToSOL = 700; // Example conversion rate

export const dummyProducts: IProduct[] = [
  {
    id: 1,
    price: Number((399 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/sense-2/hero-static/shadow-grey/sense2-black-device-front.png',
    description: 'Smartwatch with fitness tracking and stress management',
    name: 'Fitbit Sense',
  },
  {
    id: 2,
    price: Number((1299 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl: 'https://press.onepeloton.com/assets/images/2020/bike-1.jpg',
    description: 'Interactive indoor cycling bike with live classes',
    name: 'Peloton Bike',
  },
  {
    id: 3,
    price: Number((299 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://photos5.appleinsider.com/price_guide/apple-watch-series-8-pp-header.png',
    description: 'Fitness tracker with ECG and blood oxygen monitoring',
    name: 'Apple Watch Series 8',
  },
  {
    id: 4,
    price: Number((1999 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://worldfitness.com.au/cdn/shop/files/IMG-8112.webp?v=1699070306',
    description: 'High-end treadmill with iFit integration and built-in fans',
    name: 'NordicTrack Commercial X32i Treadmill',
  },
  {
    id: 5,
    price: Number((299 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1040/0152/products/WHOOP-Shopify-BANDS-View1_800x1000-SuperKnit-Ice_1ad661bf-8095-4282-a18d-a9b39b6b70fe.png',
    description: 'Wearable device for tracking sleep, recovery, and strain',
    name: 'Whoop Strap 4.0',
  },
  {
    id: 6,
    price: Number((999 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://m.media-amazon.com/images/I/51hWEGkT0xL._AC_UF1000,1000_QL80_.jpg',
    description: 'Indoor rowing machine with live classes and leaderboard',
    name: 'Oarsome Row',
  },
  {
    id: 7,
    price: Number((499 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://main.mobile.doss.co.id/storage/uploads/2024/06/medium/coros-pace-3-gps-sport-silicone-mist2.webp',
    description: 'GPS running watch with heart rate and pace monitoring',
    name: 'Coros Pace 2',
  },
  {
    id: 8,
    price: Number((1499 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://res.cloudinary.com/iconfitness/image/upload/dpr_3.0,f_auto,fl_progressive.lossy,q_auto,w_200/v1/site--1/NTL29221_catcompare.png',
    description:
      'Elliptical trainer with iFit integration and adjustable incline',
    name: 'NordicTrack Commercial 2450 Elliptical',
  },
  {
    id: 9,
    price: Number((249 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://www.worldshop.eu/medias/img/8940202262558_w360_734564644/PIC1768914_RL_03.webp',
    description: 'Multisport GPS watch with solar charging and mapping',
    name: 'Garmin Fenix 7',
  },
  {
    id: 10,
    price: Number((399 / conversionRateUSDToSOL).toFixed(2)),
    imageUrl:
      'https://cdn-iibnp.nitrocdn.com/VjyilAmBtWmZaLojjwWFayaMdinRRPlg/assets/images/optimized/rev-1818d00/www.ourfriday.co.uk/image/cache/catalog/Fitbit/Fitbit-Sense-2-graphite--1-800x800.png',
    description:
      'Smartwatch with continuous glucose monitoring and stress management',
    name: 'Fitbit Sense 2',
  },
];
