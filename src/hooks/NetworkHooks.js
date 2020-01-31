import React from 'react';
import { NetworkContext } from '../context/NetworkContext';
import { FieldsOnCorrectType } from 'graphql/validation/rules/FieldsOnCorrectType';
import { circIn } from '@popmotion/easing';
let accessTokens;

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
            })
            .catch(err => setError(true));
        setLoading(false);
        setMapped(mappeddata);
        setData(mappeddata);
    }, [mapper])

    return { loading, error, status, data, mapped }
}

// HOOK to make network request
export const useNetworkRequest = (urlSignin: string, body: string | object | null = null, initRequest = true, mapper: ({ }) => Promise<{}> = null) => {
    const { NetworkCtx: { apiUrl } } = React.useContext(NetworkContext);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState({});
    const [mapped, setMapped] = React.useState({});
    const [status, setStatus] = React.useState({ status: null, statusText: '' })

    // PARSE FOR NETWORK REQUEST
    const method = data ? 'POST' : 'GET';
    let url = `${apiUrl}${urlSignin}`
    const makeFetch = (bodyvar, header) => {
        if (header) {
            accessTokens = header
        }
        else {
            accessTokens = localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : ""
        }
        // body = typeof body === "string" ? body : JSON.stringify(body)
        const bodyvariable = typeof body === "string" ? body : JSON.stringify(body)
        body = JSON.parse(bodyvariable).length === 0 ? bodyvariable : JSON.stringify(bodyvar);
        setLoading(true);
        fetch(url, {
            method, headers: {
                'Content-Type': 'application/json',
                "x-access-token": accessTokens
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }, body
        })
            .then(res => {
                setStatus({ status: Response.status, statusText: res.message })
                return res.json();
            })
            .then(resdata => {
                setData(resdata);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            });
    }
    React.useEffect(() => {
        if (initRequest) makeFetch();
    }, []);
    return { loading, error, status, data, mapped, makeFetch }
}