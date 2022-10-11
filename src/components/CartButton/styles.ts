import { styled } from "../../styles/styles";

export const CartButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: 6,
  position: "relative",
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  variants: {
    color: {
      gray: {
        background: "$gray800",
        color: "$gray500",
      },
      green: {
        background: "$green500",
        color: "$white",
        "&:not(:disabled):hover": {
          backgroundColor: "$green300",
        },
      },
    },
    size: {
      medium: {
        height: "3rem",
        width: "3rem",
        svg: {
          fontSize: 24,
        },
      },
      large: {
        height: "3.5rem",
        width: "3.5rem",
        svg: {
          fontSize: 32,
        },
      },
    },
  },
  defaultVariants: {
    color: "gray",
    size: "medium",
  },
});
