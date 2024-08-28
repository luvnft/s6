import React, { useEffect, useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import { Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Home from './pages/home';
import ProductList from './pages/product-list';
import Footer from './components/footer';

const { defaultAlgorithm, darkAlgorithm } = theme;

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    AOS.init({
      delay: 1000,
      duration: 1500,
      easing: 'ease-in-sine',
    });
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode, mounted]);

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted || !theme) return null;

  return (
    <ConfigProvider
      message={{
        className: 'text-white',
      }}
      theme={{
        ...theme,
        token: {
          colorPrimary: isDarkMode ? '#fff' : '#0E0E0E',
          colorText: isDarkMode ? '#fff' : '#0E0E0E',
          colorLink: isDarkMode ? '#fff' : '#0E0E0E',
        },
        components: {
          Button: {
            algorithm: true,
            colorPrimary: isDarkMode ? '#0078D4' : '#0E0E0E',
            primaryColor: isDarkMode ? '#fff' : '#000',
            defaultHoverColor: isDarkMode ? '#0E0E0E' : '#fff',
            defaultHoverBg: isDarkMode ? '#fff' : '#0E0E0E',
          },
          Alert: {
            colorText: isDarkMode ? '#fff' : '#0E0E0E',
          },
          Input: {
            paddingBlock: 10,
          },
          Modal: {
            algorithm: true,
            colorBgBlur: isDarkMode
              ? 'rgba(0, 0, 0, 0.9)'
              : 'rgba(255, 255, 255, 0.9)',
          },
        },
        algorithm: mounted
          ? isDarkMode
            ? darkAlgorithm
            : defaultAlgorithm
          : defaultAlgorithm,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <Footer />
    </ConfigProvider>
  );
};

export default App;
