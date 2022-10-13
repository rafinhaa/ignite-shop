import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import {
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from "./styles";
import { CartButton } from "../CartButton";
import Image from "next/future/image";
import { useCart } from "../../hook/useCart";
import { useState } from "react";
import axios from "axios";

export function Cart() {
  const { cartItems, quantityCartItems, totalCartPrice, removeCartItem } =
    useCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const formattedTotalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalCartPrice);

  const handleCheckout = async () => {
    try {
      setIsCreatingCheckoutSession(false);
      const {
        data: { checkoutUrl },
      } = await axios.post("/api/checkout", {
        products: cartItems,
      });

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {quantityCartItems === 0 ? (
              <p>Parece que seu carrinho está vazio :(</p>
            ) : (
              cartItems.map((product) => (
                <CartProduct key={product.id}>
                  <CartProductImage>
                    <Image
                      width={100}
                      height={93}
                      alt={product.name}
                      src={product.imageUrl}
                    />
                  </CartProductImage>
                  <CartProductDetails>
                    <p>{product.name}</p>
                    <strong>{product.price}</strong>
                    <button onClick={() => removeCartItem(product.id)}>
                      Remover
                    </button>
                  </CartProductDetails>
                </CartProduct>
              ))
            )}
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>{quantityCartItems} itens</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{formattedTotalPrice}</p>
              </div>
            </FinalizationDetails>
            <button
              onClick={handleCheckout}
              disabled={isCreatingCheckoutSession}
            >
              Finalizar compra
            </button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
