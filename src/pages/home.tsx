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
    <section
      className="relative bg-cover bg-center h-screen"
    >
      <div data-aos="zoom-in">
        <Modal
          title={
            <>
              <InfoCircleOutlined /> Important Information
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
          <p>
            This platform is currently in development. If you're trying out the
            purchase process, please ensure that your wallet is set to Devnet
            before scanning to pay for items.
          </p>
        </Modal>
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10 px-6 lg:px-12">
        <div className="flex items-center justify-center gap-6">
          <h1
            data-aos="fade-right"
            className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-4"
          >
            Tech Flare Store
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-4"
          >
            <span className="text-blue-500">x</span>
          </h1>
          <div
            data-aos="fade-left"
            className="flex gap-1"
          >
            <img
              src="https://cryptologos.cc/logos/solana-sol-logo.png"
              alt="solana logo"
              className="w-[120px] h-[120px] mt-4"
            />
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              olana Pay
            </h1>
          </div>
        </div>

        <p
          data-aos="fade-up"
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl"
        >
          🚀 Elevate Your Fitness Journey with High-Tech Gear, powered by the
          lightning-fast ⚡ and ultra-secure 🔒 Solana Pay. Let's level up your
          game! 🏋️‍♂️💪
        </p>

        <Button
          size="large"
          className="px-6 text-lg font-bold transform hover:scale-105 transition-transform duration-300"
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
