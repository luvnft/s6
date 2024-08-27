import React, { FC } from 'react'
import SolanaPayLogo from './spay-logo'
import { Button } from 'antd'

interface ICheckoutButtonProps {
  onClick?: () => void;
  loading?: boolean;
}

const CheckoutButton:FC<ICheckoutButtonProps> = ({ loading, onClick}) => {
  return (
            <Button 
            loading={loading}
            disabled={loading}
            onClick={onClick}
            size="large" className="w-full !hover:bg-secondary/60 ">
        <SolanaPayLogo /> Proceed to Checkout
    </Button>
  )
}

export default CheckoutButton