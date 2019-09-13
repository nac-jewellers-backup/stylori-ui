import * as filterdata from './dummydata/filterdata'
import * as headerdata from './dummydata/headerdata';
import {descriptiondata} from './dummydata/descriptiondata';
import * as productcarddata from './dummydata/productcarddata'

export const filterParams = async (resdata) => JSON.parse(JSON.stringify(filterdata));

export const headerData = async (resdata) => JSON.parse(JSON.stringify(headerdata));

export const productcarddatas = async (resdata) => JSON.parse(JSON.stringify(productcarddata));

export const descriptionData = async (data) => descriptiondata;