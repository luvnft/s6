import { useState } from 'react';
import { useCartContext } from './hooks/useCartContext';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import CartPanel from './cart';

const Panel = () => {
  const { totalItems, totalPrice } = useCartContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="absolute z-50 right-6 top-7 flex flex-col items-end justify-end">
      <div className="bg-secondary max-w-[400px] w-[100px] h-[50px] rounded-lg  flex items-center justify-between px-4 gap-2">
        <p className="text-white font-bold text-lg">{totalPrice ?? 0}</p>
        <Badge
          count={totalItems ?? 0}
          onClick={() => setIsOpen((prev: boolean) => !prev)}
          className="cursor-pointer"
          style={{ backgroundColor: '#fff', fontWeight: 'bold' }}
        >
          <ShoppingCartOutlined className="text-3xl" />
        </Badge>
      </div>
      {isOpen && <CartPanel />}
    </div>
  );
};

export default Panel;
