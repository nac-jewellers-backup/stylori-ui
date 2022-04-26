
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

export const SilverButton = styled(Button)(
  ({ theme, variant, color, htmlColor, size, weight }) => ({
    borderRadius: "0px",
    width: "100%",
    fontSize: "12px",
    letterSpacing: "1.5px",
    ...(variant === "contained" && {
      backgroundColor: theme.palette.ternary.main,
      ...(color && {
        backgroundColor: theme.palette[color],
      }),
      ...(htmlColor && {
        backgroundColor: htmlColor,
      }),
    }),
    ...(variant === "outlined" && {
      color: theme.palette.text.secondary,
      border: `2px solid ${theme.palette.ternary.main}`,
      ...(color && {
        color: theme.palette[color],
        border: `2px solid ${theme.palette[color]}`,
      }),
      ...(htmlColor && {
        color: htmlColor,
        border: `2px solid ${htmlColor}`,
      }),
    }),
    ...(size === "dense" && {
      lineHeight: 1,
      padding: "3px 15px",
    }),
    ...(weight === "semi-bold" && {
      fontWeight: "600",
    }),
  })
);
