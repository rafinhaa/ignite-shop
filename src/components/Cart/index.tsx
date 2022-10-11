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

export function Cart() {
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
            <p>Parece que seu carrinho está vazio :(</p>
            <CartProduct>
              <CartProductImage>
                <Image
                  width={100}
                  height={93}
                  alt=""
                  src="https://via.placeholder.com/100x93"
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 50,99</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$ 100,00</p>
              </div>
            </FinalizationDetails>
            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
