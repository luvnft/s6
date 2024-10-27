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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate('/products');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section className="relative h-screen bg-center bg-cover">
      <div data-aos="zoom-in">
        <Modal
          title={
            <>
              <InfoCircleOutlined /> Verified Payments
            </>
          }
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="proceed" type="primary" onClick={handleOk}>
              Proceed
            </Button>,
          ]}
        >
          <p className="text-sm md:text-base">
            Once a service is paid, DM @HAHZNFT in Discord to create your
            branded Discord channel 12 hours prior to your delivery time.
          </p>
        </Modal>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto text-center lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <h1
            data-aos="fade-right"
            className="mb-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            W3W.delivery Services
          </h1>
        </div>

        <p
          data-aos="fade-up"
          className="max-w-md mb-6 text-sm text-gray-300 sm:max-w-lg sm:text-base md:max-w-2xl md:text-lg"
        >
          🚚 W3W.delivery brings transparent pricing and 🌐 fairness to local businesses and drivers! Here’s how it all works:

          🚀 Our influencer delivery ad campaign is structured based on the influencer's following size, with a fee of 11% applied.

          1️⃣ Flat Fee: Each non-influencer delivery is set at a simple $33 USD in Solana $SOL. This covers the social media post
          📲 tagging both the business and @deliv3ry on TikTok, plus Proof of Delivery (POD) 📦, all made easily accessible on our platform!

          2️⃣ Precision Delivery with what3words: Using what3words, each delivery is directed to an exact 3-meter square location
          🗺️ — no need for guesswork or complex addresses!

          3️⃣ Quick Payouts: Drivers get paid fast, usually within 1-8 hours ⏱️ post-delivery. 💸 All payment details are verified
          and shared in the W3W.delivery Discord community.

          4️⃣ Solana-Powered Security: Our transactions use Solana Pay 🔒 for lightning-fast ⚡, ultra-secure processing, providing
          peace of mind for everyone involved.

          5️⃣ Boosting Local Businesses: We help reduce overheads, simplify delivery logistics, and enhance brand reach with unique,
          driver-generated content 🚀!

          💬 With W3W.delivery, you’re always in the loop ✅ — no hidden fees, just clear, honest service.📦
        </p>

        <Button
          size="large"
          className="px-4 py-2 text-sm font-bold transition-transform duration-300 transform hover:scale-105 md:px-6 md:text-lg"
          onClick={showModal}
          data-aos="fade-up"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Home;
