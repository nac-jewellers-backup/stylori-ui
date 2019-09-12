import * as filterdata from './dummydata/filterdata'
import * as headerdata from './dummydata/headerdata';
import descriptiondata from './dummydata/descriptiondata';

export const filterParams = async (resdata) => filterdata;

export const headerData = async (resdata) => JSON.parse(JSON.stringify(headerdata));

export const descriptionData = async (data) => descriptiondata;