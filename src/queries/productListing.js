import { filterGenerator } from "utils";

export const PRODUCTLIST = `query fetchProductDetails($filter: ProductListFilter,$offsetvar:Int,$firstvar:Int,$conditionImage:ProductImageCondition) {
  allProductLists(filter: $filter,offset: $offsetvar, first:$firstvar,condition: {isactive: true} ) {
    totalCount
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
      transSkuListsByProductId (condition: {isdefault: true}) {
        nodes {
          skuSize
          purity
          diamondType
          metalColor
          markupPrice
          sellingPrice
          discountPrice
          generatedSku
        }
      }
      productMaterialsByProductSku {
        nodes {
          materialName
        }
      }
      productImagesByProductId(condition:$conditionImage,orderBy: IMAGE_POSITION_ASC) {
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
    case "Occasion": {
      fc = {
        table: "productOccassionsByProductId",
        type: "occassionName"
      }
      break;
    }
    case "Theme": {
      fc = {
        table: "productThemesByProductId",
        type: "themeName"
      }
      break;
    }
    case "Style": {
      fc = {
        table: "productStylesByProductId",
        type: "styleName"
      }
      break;
    }
    case "ProductType": {
      fc = {
        table: "",
        type: "productType"
      }
      break;
    }
    case "MetalColor": {
      fc = {
        table: "transSkuListsByProductId",
        type: "metalColor"
      }
      break;
    }
    case "MetalPurity": {
      fc = {
        table: "transSkuListsByProductId",
        type: "purity"
      }
      break;
    }
    case "Gender": {
      fc = {
        table: "",
        type: "gender"
      }
      break;
    }
    case "Material":{
      fc={
        table:"productMaterialsByProductSku",
        type:"materialName"
      }
      break;
    }
    case "StoneColor":{
      fc={
        table:"productStonecolorsByProductId",
        type:"stonecolor"
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

    filters.map(k => {
      const fkey = String(Object.keys(k));
      const fval = String(Object.values(k));
      const fquery = filterProductMatrix(fkey, fval);
      filter = { ...filter, ...fquery };
    })

    if (Object.keys(filter).length > 0) {
      return { filter };
    } else {
      return {};
    }
  }
}