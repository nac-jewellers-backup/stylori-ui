// import React from 'react';
// import { useNetworkRequest } from 'hooks/index';


// const useContinues = () => {
//     const [values, setValues] = React.useState({
//         mail: null,
//     });
//     const [invalids, setInvalids] = React.useState({ mail: false });
//     const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest('/api/auth/guestlogin', values, () => []);

//     const handleChange = (type, value) => {
//         setValues({
//             ...values,
//             [type]: value
//         })
//     }

//     // const handleInvalid = (type, status) => {
//     //     setInvalids({
//     //         ...invalids,
//     //         [type]: status
//     //     })
//     // }

//     const handleSubmit = () => {
//         makeFetch();
//     }
//     const handle = { handleChange, handleInvalid, handleSubmit };
//     return { values, handle }
// }

// export default useContinues;