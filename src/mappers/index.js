import * as filterdata from './dummydata/filterdata'
import * as headerdata from './dummydata/headerdata';
import * as headerdataSilver from './dummydata/headerDataSilver';
import { descriptiondata } from './dummydata/descriptiondata';
import * as productcarddata from './dummydata/productcarddata'
import * as productpricingPage from './dummydata/productpricingPage'
import * as cartdata from './dummydata/cartdata'
import * as checkoutloginReg from './dummydata/checkoutloginReg'
import * as dataSilver from './dummydata/DataSilver'
import * as filterDataSilver from './silverListingPage'
import * as headerdataStyloriSilver from './dummydata/headerdataStyloriSilver'
export const filterParams = async (resdata) => JSON.parse(JSON.stringify(filterdata));
export const headerData = async (resdata) => JSON.parse(JSON.stringify(headerdata));
export const productcarddatas = async (resdata) => JSON.parse(JSON.stringify(productcarddata));
export const productpricingPages = async (resdata) => JSON.parse(JSON.stringify(productpricingPage));
export const checkoutloginRegs = async (resdata) => JSON.parse(JSON.stringify(checkoutloginReg));
export const cartdatas = async (resdata) => JSON.parse(JSON.stringify(cartdata));
export const descriptionData = async (data) => descriptiondata;
export const headerDataSilver = async (resdata) => JSON.parse(JSON.stringify(headerdataSilver));
export const headerDataStyloriSilver = async (resdata) => JSON.parse(JSON.stringify(headerdataStyloriSilver));
export const HomedataSilver = async (data) => JSON.parse(JSON.stringify(dataSilver));
export const FilterdataSilver = async (data) => JSON.parse(JSON.stringify(filterDataSilver));