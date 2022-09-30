import Link from "next/link";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer />
      <p>
        Uhuul <strong>NOME</strong>, sua camiseta <strong>CAMISETA</strong> já
        está a caminho da sua casa.
      </p>
      <Link href="/">Voltar ao catalogo</Link>
    </SuccessContainer>
  );
}
