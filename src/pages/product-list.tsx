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
        <Link to="/" className="text-white no-underline text-3xl font-bold mb-4">
          🚀 Exclusive Products 🌟
          <br />
          <span className="text-[15px] italic font-normal">
            For the cool crypto boys n girls 😎
          </span>
        </Link>
      </div>

      <br />

      <div
        className="grid md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-5 flex-wrap mb-12"
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
                className="text-center text-lg font-bold w-full overflow-hidden text-overflow-ellipsis whitespace-nowrap"
                data-aos="fade-right"
              >
                {product.name}
              </Text>
              <Text className="text-lg font-bold" data-aos="fade-left">
                ${(product.price / 100).toFixed(2)}
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
