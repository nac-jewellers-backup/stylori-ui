import * as filterdata from './dummydata/filterdata'
import * as headerdata from './dummydata/headerdata';
import * as headertabdata from './dummydata/headertabdata';
import descriptiondata from './dummydata/descriptiondata';

export const filterParams = async (resdata) => JSON.parse(JSON.stringify(filterdata));

export const headerData = async (resdata) => JSON.parse(JSON.stringify(headerdata));

export const headertabdatas = async (resdata) => JSON.parse(JSON.stringify(headertabdata));

export const descriptionData = async (data) => descriptiondata;