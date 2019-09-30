import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { NetworkContext } from 'context/NetworkContext';
import {ProductDetailContext} from 'context/ProductDetailContext'

export const useGraphql = (query, mapper, variables = {}) => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState({});
    const [mappedData, setMappedData] = React.useState({});
    const { NetworkCtx: { graphqlUrl: uri, cdnUrl } } = React.useContext(NetworkContext);
    const {ProductDetailCtx:{}} = React.useContext(ProductDetailContext)
    const client = createApolloFetch({ uri });

    const makeRequest = () => {
        client({ query, variables }).then(resdata => {
            setLoading(false);
            setError(false);
            setData(resdata);
            if (mapper && data) {
                try {
                    let mapped = mapper(data,cdnUrl);
                    setMappedData(mapped);
                } catch (error) {
                    console.error('MAPPER ERROR', error);
                    setError(true);
                    setMappedData({});
                }
            }

        }).catch(err => {
            setLoading(false);
            setError(true);
            setData([]);
            setMappedData([]);
        })
    }

    React.useEffect(() => {
        (() => {
            makeRequest();
        })()
    }, []);
return { error, loading, data, mappedData, makeRequest }
}