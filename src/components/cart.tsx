import { FC, useEffect, useState } from 'react';
import { IProduct } from '../utils/types';
import { useCartContext } from './hooks/useCartContext';
import CheckoutButton from './ui/solanapay-checkout-btn';
import { Button, Modal, Result } from 'antd';
import { QRCode } from 'antd';
import { PublicKey } from '@solana/web3.js';
import { encodeURL, createQR, findReference } from '@solana/pay';
import BigNumber from 'bignumber.js';
import { message } from 'antd';
import {
  connection,
  referencePublicKey,
  WALLET_ADDRESS,
} from '../utils/constants';
import { Empty } from 'antd';

const CartPanel = () => {
  const { cart, removeFromCart, totalPrice, totalItems } = useCartContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [payLink, setPayLink] = useState<string | null>(null);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  useEffect(() => {
    if (payLink) {
      const checkPaymentStatus = async () => {
        try {
          setIsLoading(true);
          const interval = setInterval(async () => {
            try {
              const signatureInfo = await findReference(
                connection,
                referencePublicKey,
              );
              console.log(signatureInfo);

              if (signatureInfo) {
                clearInterval(interval);
                setIsSuccessful(true);
                message.success('Payment confirmed');
                setPayLink(null);
              }
            } catch (error) {
              console.log('Payment not confirmed yet, retrying...');
            }
          }, 10000);
        } catch (error) {
          console.error('Error checking payment status:', error);
        }
      };

      checkPaymentStatus();
    }
  }, [payLink]);

  const createPayLink = async () => {
    const totalAmount = new BigNumber(totalPrice); // Convert price to BigNumber
    const recipient = new PublicKey(WALLET_ADDRESS);
    const label = 'SolanaPay Demo';
    const messageText = 'Pay for Exclusive Products';
    const memo = 'optional-memo';
    const reference = referencePublicKey;

    const url = encodeURL({
      recipient,
      amount: totalAmount.div(1000000), // Convert from micro to SOL
      label,
      message: messageText,
      memo,
      reference,
    });

    setPayLink(url.toString());

    const qr = createQR(url);
    const qrCanvas = document.getElementById('qr-code');
    if (qrCanvas) {
      qrCanvas.innerHTML = ''; // Clear previous QR code if any
      qr.append(qrCanvas);
    }
  };

  return (
    <>
      <div className="bg-secondary mt-1 relative w-[400px] px-2 h-[400px] overflow-x-hidden rounded-lg shadow-lg">
        {cart?.length > 0 ? (
          <>
            <div className="scrollbar-hide mb-3 flex flex-col gap-3 p-3 px-1 h-[320px] overflow-y-scroll">
              {cart?.map((product: IProduct) => (
                <div
                  key={product.id}
                  className="rounded-lg flex items-center justify-between px-4 py-0 border-b border-gray-200"
                >
                  <div>
                    <p className="text-lg font-bold">{product.name}</p>
                    <p className="text-sm">
                      Price: ${product.price} x{' '}
                      {cart.filter((item) => item.id === product.id)?.length}{' '}
                    </p>
                  </div>
                  <Button onClick={() => removeFromCart(product)} danger>
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            <CheckoutButton loading={isLoading} onClick={createPayLink} />
          </>
        ) : (
          <Empty
            className="mt-20"
            description={
              <span className="text-gray-400 text-lg">
                Your cart is empty. 😔 <br />
                Feel free to add some cool items to it! 💃🕺
              </span>
            }
          />
        )}
      </div>

      <Modal
        title="💸 Scan to Pay"
        visible={!!payLink}
        onCancel={() => setPayLink(null)}
        footer={null}
        width={400}
        className="p-12"
      >
        <QRCode
          value={payLink}
          className="!w-full !h-full mt-4"
          icon={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOOhDi1KrwwS7G_H1yvSkMoiPhO3anGP8_w&s'
          }
        />
      </Modal>

      <Modal
        title="Payment Status"
        visible={isSuccessful}
        onCancel={() => setIsSuccessful(false)}
        footer={null}
        centered
        className="!rounded-xl"
      >
        <Result
          status="success"
          title="Payment Successful"
          subTitle={
            <span className="text-gray-400 text-base">
              💸 You have successfully paid{' '}
              <b>${(totalPrice / 100).toFixed(2)}</b> for{' '}
              <b>{totalItems} items.</b>
            </span>
          }
        />
      </Modal>
    </>
  );
};

export default CartPanel;
