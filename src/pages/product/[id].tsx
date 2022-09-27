import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,00</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta autem
          doloremque tempora alias ut quidem architecto natus rerum, similique
          dolore dicta, earum in, ducimus excepturi quo! Perferendis quam hic
          alias?
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
