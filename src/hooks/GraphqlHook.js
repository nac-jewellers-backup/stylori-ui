import React from 'react';
import ApolloClient from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { NetworkContext } from '../context/NetworkContext';

export const useGraphql = (query, mapper) => {
    const { NetworkCtx: { graphqlUrl } } = React.useContext(NetworkContext);
    const client = new ApolloClient({ uri: graphqlUrl })
    const { data, error, loading } = useQuery(query, { client })
    const [mappedData, setMappedData] = React.useState([]);

    React.useEffect(() => {
        (() => {
            if (!loading && !error) {
                if (mapper) setMappedData(mapper(data))
            }
        })()
    }, [loading, error])

    return { error, loading, mappedData }
}