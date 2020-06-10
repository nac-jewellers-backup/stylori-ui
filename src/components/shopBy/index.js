import React from "react";
import ShopByCard from "./ShopByCard";
import { Grid, Container, Typography } from "@material-ui/core";

export const ShopBy = () => {
  return (
    <Container style={{ padding: "0px 17px" }} maxWidth="lg">
      <Grid container item xs={12} justify="space-around" spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            component="div"
            style={{
              textTransform: "uppercase",
              letterSpacing: "9px",
              fontWeight: "bold",
            }}
          >
            Shop by
          </Typography>
        </Grid>
        {[
          {
            label: "Earrings",
            image:
              "https://assets.stylori.com/product/SE1273/1000X1000/SE1273-1Y.webp?_=1591730609728",
          },
          {
            label: "Necklaces",
            image:
              "https://assets.stylori.com/product/SP0850/575X575/SP0850-1Y.webp",
          },
          {
            label: "Rings",
            image:
              "https://assets.stylori.com/product/SR0738/575X575/HOVER-SR0738-2Y.webp",
          },
          {
            label: "Bracelets",
            image:
              "https://assets.stylori.com/product/SB0500/575X575/SB0500-2R.webp",
          },
        ].map((val) => {
          return (
            <Grid item xs={3}>
              <ShopByCard label={val.label} image={val.image} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
