import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useState } from "react";
import Stripe from "stripe";
import { IProduct } from "../../context/CartContext";
import { useCart } from "../../hook/useCart";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart();
  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id);
  const buttonTitle = itemAlreadyInCart
    ? "Produto já está na sacola"
    : "Colocar na sacola";

  return (
    <ProductContainer>
      <Head>
        <title>Produto | {product.name}</title>
      </Head>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)} disabled={itemAlreadyInCart}>
          {buttonTitle}
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "prod_MUCsVpdBxXSBmA" },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
        numberPrice: price.unit_amount / 100,
      },
    },
    revalidate: 60 * 60 * 1,
  };
};
