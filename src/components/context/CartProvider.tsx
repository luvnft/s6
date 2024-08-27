import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { IProduct } from '../../utils/types';
import { CartContext } from './CartContext';

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);

      const totalItems = parsedCart.length;
      setTotalItems(totalItems);

      const totalPrice = Array.isArray(parsedCart)
        ? parsedCart.reduce((total: number, product: IProduct) => {
            return total + product.price;
          }, 0)
        : 0;

      setTotalPrice(Number(totalPrice.toFixed(2)));
    }
  }, []);

  const addToCart = (product: IProduct) => {
    const item = {
      ...product,
      price: Number((product.price / 100).toFixed(2)),
    };

    const newCart = cart.length > 0 ? [...cart, item] : [item];
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);

    const totalItems = newCart.length;
    setTotalItems(totalItems);

    const totalPrice = newCart.reduce((total: number, product: IProduct) => {
      return total + product.price;
    }, 0);

    setTotalPrice(Number(totalPrice.toFixed(2)));
  };

  const removeFromCart = (product: IProduct) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((p) => p.id !== product.id);
      setTimeout(() => {
        localStorage.setItem('cart', JSON.stringify(newCart));

        const totalItems = newCart.length;
        setTotalItems(totalItems);

        const totalPrice = newCart.reduce(
          (total: number, product: IProduct) => {
            return total + product.price;
          },
          0,
        );

        setTotalPrice(Number(totalPrice.toFixed(2)));
      }, 1200);

      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const values = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
