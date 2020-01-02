import React from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { NetworkContext } from 'context/NetworkContext';

export const useCheckForCod = (query, mapper, variables = {}, initRequest = false) => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState({});
    const [mappedData, setMappedData] = React.useState({});
    const { NetworkCtx: { graphqlUrl: uri, cdnUrl } } = React.useContext(NetworkContext);
    const client = createApolloFetch({ uri });

    const makeRequestCod = (reqvars) => {
       
        client({ query, variables: { ...variables, ...reqvars } }).then(resdata => {
            setLoading(false);
            setError(false);
            setData(resdata);
            if (mapper && data) {
                try {
                    let mapped = mapper(data,cdnUrl);
                    setMappedData(mapped);
                } catch (error) {
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
        if(initRequest) makeRequestCod();
    }, []);
return { error, loading, data, mappedData, makeRequestCod }
}