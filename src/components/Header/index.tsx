import Image from "next/future/image";

import { HeaderContainer } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
    </HeaderContainer>
  );
}
