import Image from "next/future/image";
import React, { MouseEvent } from "react";
import { useKeenSlider } from "keen-slider/react";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";

import { HomeContainer, Product } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Head from "next/head";
import { CartButton } from "../components/CartButton";
import { useCart } from "../hook/useCart";
import { IProduct } from "../context/CartContext";

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const handleAddToCart = (
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      {products.map((product) => (
        <Link key={product.id} href={`product/${product.id}`} prefetch={false}>
          <Product className="keen-slider__slide">
            <Image src={product.imageUrl} alt="" width={520} height={480} />
            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>
              <CartButton
                color="green"
                size="large"
                onClick={(event) => handleAddToCart(event, product)}
                disabled={checkIfItemAlreadyExists(product.id)}
              />
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
