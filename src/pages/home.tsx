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
          <p className="text-sm md:text-base">
            This platform is currently in development. If you're trying out the
            purchase process, please ensure that your wallet is set to Devnet
            before scanning to pay for items.
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
          <h1
            data-aos="zoom-in"
            className="mb-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-blue-500">x</span>
          </h1>
          <div data-aos="fade-left" className="flex items-center gap-2">
            <img
              src="https://cryptologos.cc/logos/solana-sol-logo.png"
              alt="solana logo"
              className="w-12 h-12 md:w-20 md:h-20 lg:w-[120px] lg:h-[120px] mt-2"
            />
            <h1 className="mb-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              olana Pay
            </h1>
          </div>
        </div>

        <p
          data-aos="fade-up"
          className="max-w-md mb-6 text-sm text-gray-300 sm:max-w-lg sm:text-base md:max-w-2xl md:text-lg"
        >
          🚚 W3W.delivery has revolutionized the delivery industry by eliminating
          exploitative pay structures. We offer a flat payout for deliveries within
          a 10-mile radius, utilizing three-word addresses and engaging social
          content to enhance local businesses through driver-generated media,
          powered by the lightning-fast ⚡ and ultra-secure 🔒 Solana Pay.
          Let's level up your delivery content!📦
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
