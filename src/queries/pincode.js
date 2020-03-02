export const cartCodPincode = `
query MyQuery($cartId: UUID) {

    allCartAddresses(condition: {cartId: $cartId, addressType: 1}) {
      nodes {
        pincode
      }
    }
  }
  `