import { styled } from "../../styles/styles";

export const CartButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: 6,
  position: "relative",
  background: "$gray800",
  color: "$gray500",
  height: "3rem",
  width: "3rem",
  svg: {
    fontSize: 24,
  },
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});
