import { filterGenerator } from "utils";

export const PRODUCTLIST = `query fetchProductDetails($filter: ProductListFilter) {
  allProductLists(filter: $filter, first: 10) {
    nodes {
      productName
      productId
      defaultSize
      sizeVarient
      productType
      productDiamondsByProductSku {
        nodes {
          diamondClarity
          diamondColour
          diamondType
          stoneWeight
          diamondShape
          diamondSettings
          stoneCount
        }
      }
      transSkuListsByProductId {
        nodes {
          skuSize
          purity
          markupPrice
          sellingPrice
          discountPrice
          generatedSku
        }
      }
      productImagesByProductId {
        nodes {
          ishover
          imageUrl
          imagePosition
        }
      }
    }
  }
}
`
export const filterProductMatrix = (type, value) => {
  let fc = { table: "", type: "" }
  switch (type) {
    case "Collection": {
      fc = {
        table: "productCollectionsByProductId",
        type: "collectionName"
      }
      break;
    }

    default: {
      break;
    }
  }

  return filterGenerator(fc.type, value, fc.table);
}



export const conditions = {
  productId: (id) => ({
    "condition": {
      "productId": id,

    }
  }),
  generateFilters: (filters) => {
    let filter = {};
    const filterKeys = filters.map(val => String(Object.keys(val)));

    filterKeys.map(k => {
      const fval = filters[k];
      const fquery = filterProductMatrix('Collection', 'Mistletoe');
      filter = { ...filter, ...fquery };
    })

    debugger
    if (Object.keys(filter).length > 0) {
      return { filter };
    } else {
      return {};
    }
  }
}