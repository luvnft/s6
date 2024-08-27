import { FC } from 'react';
import {
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-t-1 border border-white text-gray-300 py-10 pb-6"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">Imam</h2>
            <p className="mt-2 text-sm max-w-md">
              Tech & Everything in Between. 🚀💻
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 mb-6 md:mb-0">
            <Link
              to="/products"
              className="text-gray-400 no-underline hover:text-white transition duration-300"
            >
              Browse Products
            </Link>
            <Link
              to="/https://github.com/eimaam/s6-solana-pay"
              className="text-gray-400 no-underline hover:text-white transition duration-300"
            >
              Source Code
            </Link>

            <Link
              to="mailto:imamddahir@gmail.com"
              className="text-gray-400 no-underline hover:text-white transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/eimaam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <LinkedinOutlined style={{ fontSize: '24px' }} />
            </a>
            <a
              href="https://twitter.com/eimaam_d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <TwitterOutlined style={{ fontSize: '24px' }} />
            </a>
            <a
              href="https://instagram.com/eimaam.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <InstagramOutlined style={{ fontSize: '24px' }} />
            </a>
            <a
              href="https://github.com/eimaam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <GithubOutlined style={{ fontSize: '24px' }} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm text-gray-500">
          &copy; 2024 Imam Dahir Dan-Azumi. <br /> All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
