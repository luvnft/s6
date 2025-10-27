import { FC } from 'react';
import {
  TikTokOutlined,
  DiscordOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Custom TikTok icon component as an SVG
const TikTokIcon: FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px"
    style={style}
  >
    <path d="M...Z" /> {/* Replace with actual TikTok SVG path data */}
  </svg>
);

const Footer: FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-10 pb-6 text-gray-300 border border-white border-t-1"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Brand and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">TikTok @DELIV3RY Services</h2>
            <p className="max-w-md mt-2 text-sm">
              Watch POD (Proof of delivery) reels. 🚀💻
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 mb-6 md:mb-0">
            <Link
              to="/products"
              className="text-gray-400 no-underline transition duration-300 hover:text-white"
            >
              Browse Services
            </Link>
            <Link
              to="/https://w3w.delivery"
              className="text-gray-400 no-underline transition duration-300 hover:text-white"
            >
              @DELIV3RY
            </Link>

            <Link
              to="mailto:info@arvrtise.com"
              className="text-gray-400 no-underline transition duration-300 hover:text-white"
            >
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://tiktok.com/@deliv3ry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition duration-300 hover:text-white"
            >
              <TikTokOutlined style={{ fontSize: '24px' }} />
            </a>
            <a
              href="https://discord.gg/YEQCwtSHzb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition duration-300 hover:text-white"
            >
              <DiscordOutlined style={{ fontSize: '24px' }} />
            </a>
            <a
              href="https://instagram.com/w3wdelivery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition duration-300 hover:text-white"
            >
              <InstagramOutlined style={{ fontSize: '24px' }} />
            </a>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-6 text-sm text-center text-gray-500">
          &copy; 2025 DELIVERY.HAHZ.LIVE donation delivery services. <br /> All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

