// const refer = {
//     "data": {
//         "allProductLists": {
//             "nodes": [
//                 {
//                     "productSeries": 10,
//                     "productName": "Monsoon Memories Diamond Earrings",
//                     "defaultSize": null,
//                     "defaultWeight": null
//                 }
//             ]
//         }
//     }
// }


export default function (data) {
    const { data: { allProductLists: { nodes } } } = data;
    const _format = nodes.map(k => ({
        title: k.productName
    }))
    return _format;
}