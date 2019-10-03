import React from 'react';
import { NetworkContext } from '../context/NetworkContext';
import { FieldsOnCorrectType } from 'graphql/validation/rules/FieldsOnCorrectType';
export const useDummyRequest = (mapper) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState({});
    const [mapped, setMapped] = React.useState({});
    const [status, setStatus] = React.useState({ status: null, statusText: '' })

    React.useEffect(() => {
        setLoading(true);
        let mappeddata = {};
        mapper()
            .then(data => {
                setMapped(data);
                console.info('MAPPER', data);
            })
            .catch(err => setError(true));
        setLoading(false);
        setMapped(mappeddata);
        setData(mappeddata);
    }, [mapper])

    return { loading, error, status, data, mapped }
}

// HOOK to make network request
export const useNetworkRequest = (urlSignin: string, body: string | object | null = null, mapper: ({ }) => Promise<{}> = null) => {
    const { NetworkCtx: { apiUrl } } = React.useContext(NetworkContext);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState({});
    const [mapped, setMapped] = React.useState({});
    const [status, setStatus] = React.useState({ status: null, statusText: '' })

    // PARSE FOR NETWORK REQUEST
    const method = data ? 'POST' : 'GET';
    let url = `${apiUrl}${urlSignin}`
    body = typeof body === "string" ? body : JSON.stringify(body);
    const makeFetch = () => {
        setLoading(true);
        fetch(url, {
            method, headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }, body
        })
            .then(res => {
                setStatus({ status: Response.status, statusText: res.message })
                return res.json();

            })
            .then(resdata => {
                setData(resdata);
                localStorage.setItem(Object.keys(resdata), Object.values(resdata));
                setLoading(false);
                if (mapper) {
                    mapper(resdata)
                        .then(mappeddata => setMapped(mappeddata))
                        .catch(err => setError(true));
                }
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(Response.status)
            });
    }

    return { loading, error, status, data, mapped, makeFetch }
}
