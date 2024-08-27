import { createContext } from "react";
import { IProduct } from "../../utils/types";

interface ICartContext {
    cart: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

export const CartContext = createContext<ICartContext | null>(null);