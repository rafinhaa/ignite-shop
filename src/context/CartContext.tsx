import { createContext, ReactNode, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  quantityCartItems: number;
  totalCartPrice: number;
  addToCart: (product: IProduct) => void;
  checkIfItemAlreadyExists: (productId: string) => boolean;
  removeCartItem: (productId: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const quantityCartItems = cartItems.length;
  const totalCartPrice = cartItems.reduce((totalPrice, product) => {
    return totalPrice + product.numberPrice;
  }, 0);

  const addToCart = (product: IProduct) => {
    setCartItems((oldState) => [...oldState, product]);
  };

  const checkIfItemAlreadyExists = (productId: string) => {
    return cartItems.some((product) => product.id === productId);
  };

  const removeCartItem = (productId: string) => {
    setCartItems((oldState) =>
      oldState.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantityCartItems,
        totalCartPrice,
        addToCart,
        checkIfItemAlreadyExists,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
