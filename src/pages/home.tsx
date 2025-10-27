import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { InfoCircleOutlined } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => {
    setIsModalVisible(false);
    navigate('/products');
  };
  const handleCancel = () => setIsModalVisible(false);

  return (
    <section className="relative h-screen bg-center bg-cover">
      <div data-aos="zoom-in">
        <Modal
          title={
            <>
              <InfoCircleOutlined /> How TikTok Delivery Works
            </>
          }
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="proceed" type="primary" onClick={handleOk}>
              OK, Got It
            </Button>,
          ]}
        >
          <p className="text-sm md:text-base">
            💬 To start a @DELIV3RY order, fill out the TikTok form on the official @deliv3ry page.  
            You’ll get a quote showing which delivery you’re paying for.  
            Funds (in $SOL) are held safely in escrow 🔒 until your delivery is confirmed.  
            <br /><br />
            📦 The driver must upload a TikTok video at the What3Words (W3W) address listed in the bid, 
            tagging both the buyer’s @username and @deliv3ry.  
            Once both confirm in TikTok comments or DM, the driver receives the $SOL airdrop instantly.  
            <br /><br />
            🚫 If nothing is delivered, the buyer is refunded automatically.
          </p>
        </Modal>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto text-center lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <h1
            data-aos="fade-right"
            className="mb-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            ⚡ TikTok Premium Delivery
          </h1>
        </div>

        <p
          data-aos="fade-up"
          className="max-w-md mb-6 text-sm text-gray-300 sm:max-w-lg sm:text-base md:max-w-2xl md:text-lg"
        >
          @DELIV3RY is the world’s first TikTok-powered delivery service.  
          Drivers post <strong>video proof of delivery</strong> 🎥 at the What3Words location 🗺️ from the bid.  
          Once both the buyer’s TikTok @username and @deliv3ry confirm the video,  
          the $SOL payment held in escrow is released instantly 💸.  
          <br /><br />
          🔹 Fill out the TikTok form on @deliv3ry to get a quote  
          🔹 Choose your delivery & pay in $SOL  
          🔹 Driver records proof-of-delivery video  
          🔹 Payment unlocks when verified by both sides  
          🔹 Refunds happen automatically if no delivery occurs  
          <br /><br />
          Transparent. Fast. Verified by TikTok & powered by Solana ⚡
        </p>

        <Button
          size="large"
          className="px-4 py-2 text-sm font-bold transition-transform duration-300 transform hover:scale-105 md:px-6 md:text-lg"
          onClick={showModal}
          data-aos="fade-up"
        >
          How It Works
        </Button>
      </div>
    </section>
  );
};

export default Home;
