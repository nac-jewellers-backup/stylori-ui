import { filterGenerator, filterTransSkuGenerator } from "utils";

export const PRODUCTLIST = `query fetchProductDetails($filter: ProductListFilter, $offsetvar: Int, $firstvar: Int, $orderbyvar: [ProductListsOrderBy!], $conditionImage: ProductImageCondition, $filterTransSku: TransSkuListFilter) {
  allProductLists(filter: $filter, orderBy: $orderbyvar, offset: $offsetvar, first: $firstvar, condition: {isactive: true}) {
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
      transSkuListsByProductId(filter: $filterTransSku) {
        nodes {
          skuSize
          purity
          diamondType
          metalColor
          markupPrice
          sellingPrice
          discountPrice
          generatedSku
          productListByProductId {
            productImagesByProductId(condition: $conditionImage, orderBy: IMAGE_POSITION_ASC) {
              nodes {
                ishover
                imageUrl
                imagePosition
                isdefault
              }
            }
          }
          isReadyToShip
          vendorDeliveryTime
        }
      }
      productMaterialsByProductSku {
        nodes {
          materialName
        }
      }
    }
  }
}

`
export const seoUrlResult = `query CheckForSeo($seofilter: SeoUrlPriorityFilter ) {
  allSeoUrlPriorities( filter: $seofilter) {
    nodes {
      attributeName
      attributeValue
      
    }
  }
}
`


export const filterProductMatrix = (type, value, filter) => {

  let fc = { table: "", type: "" }
  switch (type) {
    case "Availability": {
      if(value===true){
        fc = {
          table: "transSkuListsByProductId",
          type: "isReadyToShip"
        }
      }
    else{
      fc = {
        table: "transSkuListsByProductId",
        type: "vendorDeliveryTime"
      }
    }
      break;
    }
    case "Category": {
      fc = {
        table: "",
        type: "productCategory"
      }
      break;
    }
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
    case "NoOfStones":{
      fc={
        table:"productStonecountsByProductId",
        type:"stonecount"
      }
      break;
    }
    case "StoneShape":{
      fc={
        table:"productGemstonesByProductSku",
        type:"gemstoneShape"
      }
      break;
    }
    case "Price":{
      fc={
        table:"productStonecountsByProductId",
        type:"stonecount"
      }
      break;
    }
 

    default: {
      break;
    }
  }

  return filterGenerator(fc.type, value, fc.table, filter);
}

export const filterTransSkuMatrix = (type, value) => {
  let fc = { table: "", type: "" }
  switch (type) {
    
   
    case "MetalColor": {
      fc = {
        type: "metalColor"
      }
      break;
    }
    case "MetalPurity": {
      fc = {
        type: "purity"
      }
      break;
    }

    case "Availability": {
      if(value===true){
        fc = {
          type: "isReadyToShip"
        }
      }
    else{
      fc = {
        type: "vendorDeliveryTime"
      }
    }
      break;
    }
    default: {
      break;
    }
  }

  return filterTransSkuGenerator(fc.type, value);
}
const AvailabilityVal = (fval) =>{
  if(fval==='1 Day Shipping') return true
  else if(fval==='5 Day Shipping') return 5
  else if(fval==='7 Day Shipping') return 7
  else if(fval==='10 Day Shipping') return 10
  else if(fval === '15 & Above Days Shipping') return 15
  else return fval
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
      const fquery = filterProductMatrix(fkey, AvailabilityVal(fval), filter);
      filter = { ...filter, ...fquery };
    })

    if (Object.keys(filter).length > 0) {
      return { filter };
    } else {
      return {};
    }
  },
  generateTransSkuFilters: (filters) => {
    let filterTransSku = {};
    // const filterKeys = filters.map(val => String(Object.keys(val)));

    filters.map(k => {
      const fkey = String(Object.keys(k));
      const fval = String(Object.values(k));
      
      const fquery = filterTransSkuMatrix(fkey, AvailabilityVal(fval));
      filterTransSku = { ...filterTransSku, ...fquery };
    })

    if (Object.keys(filterTransSku).length > 0) {
      return { filterTransSku };
    } else {
      return {};
    }
  }
}