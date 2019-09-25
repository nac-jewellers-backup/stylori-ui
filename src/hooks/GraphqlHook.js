import React from 'react';
import ApolloClient from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { createApolloFetch } from 'apollo-fetch';
import { NetworkContext } from '../context/NetworkContext';

export const useGraphql = (query, mapper) => {
    const { NetworkCtx: { graphqlUrl: uri } } = React.useContext(NetworkContext);
    const client = createApolloFetch({ uri });
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState({});
    const [mappedData, setMappedData] = React.useState({});

    const makeRequest = () => {
        client({ query }).then(data => {
            setLoading(false);
            setError(false);
            setData(data);
            if (data && mapper) setMappedData(mapper(data));
        }).catch(err => {
            setLoading(false);
            setError(true);
            setData([]);
            setMappedData([]);
        })
    }

    React.useEffect(() => {
        makeRequest();
        console.info('UPDATE', data, loading)
    }, [])

    // const client = new ApolloClient({ uri: graphqlUrl })
    // const { data, error, loading } = useQuery(query, { client })

    // React.useEffect(() => {
    //     (() => {
    //         if (!loading && !error) {
    //             if (mapper) setMappedData(mapper(data))
    //         }
    //     })()
    // }, [])

    return { error, loading, mappedData, data }
}