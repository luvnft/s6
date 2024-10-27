import React, { useEffect } from 'react';
import {
  Image,
  Button,
  Typography,
  Divider,
  Badge,
} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { dummyProducts } from '../utils/constants';
import { IProduct } from '../utils/types';
import Panel from '../components/panel';
import { useCartContext } from '../components/hooks/useCartContext';
import { Link } from 'react-router-dom';

const { Text } = Typography;

const ProductList: React.FC = () => {
  const { cart, addToCart, totalItems, totalPrice } = useCartContext();

  const getProductCount = (productId: number) => {
    return cart.filter((item: IProduct) => item.id === productId).length;
  };

  return (
    <div className="p-6 !font-spaceGrotesk">
      <Panel />

      <div data-aos="fade-down">
        <Link to="/" className="mb-4 text-3xl font-bold text-white no-underline">
          🚀 W3W.delivery Services 🌟
          <br />
          <span className="text-[15px] italic font-normal">
            Making deliveries look cool since 2024 😎
          </span>
        </Link>
      </div>

      <br />

      <div
        className="grid flex-wrap items-center justify-center gap-5 mb-12 md:grid-cols-4 lg:grid-cols-5"
        data-aos="fade-up"
      >
        {dummyProducts.map((product: IProduct) => (
          <Badge
            key={product.id}
            count={getProductCount(product.id)}
            overflowCount={99}
            style={{ backgroundColor: '#fff', fontWeight: 'bold' }}
            data-aos="zoom-in"
          >
            <div className="w-[200px] flex items-center flex-col gap-2 h-[300px] p-4 bg-secondary rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <Image
                alt={product.name}
                src={product.imageUrl}
                className="!w-[125px] !h-[125px] mx-auto !rounded-[9999999px]"
                data-aos="flip-left"
              />
              <Text
                className="w-full overflow-hidden text-lg font-bold text-center text-overflow-ellipsis whitespace-nowrap"
                data-aos="fade-right"
              >
                {product.name}
              </Text>
              <Text className="text-lg font-bold" data-aos="fade-left">
                {product.price} SOL
              </Text>
              <Text className="text-sm text-gray-300" data-aos="fade-up">
                {product.description}
              </Text>
              <Button
                icon={<ShoppingCartOutlined />}
                onClick={() => addToCart(product)}
                className="absolute bg-transparent bottom-2"
                data-aos="fade-up"
              >
                Add to Cart
              </Button>
            </div>
          </Badge>
        ))}
      </div>

      <Divider data-aos="fade-in" className="!mt-8"/>
    </div>
  );
};

export default ProductList;
