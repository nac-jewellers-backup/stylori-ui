import { API_URL, CDN_URL } from "../config";
export const injectUrl_url_construct = (url) => {
    
    var browser_type = JSON.parse(localStorage.getItem('browserDetails'))
    if (browser_type !== undefined && url !== undefined && url && ((url.imageUrl && url.imageUrl.length > 0)) ) {
        var resolution = 1000
        var _resolutions =`${resolution}X${resolution}`
        var url_split = url && url.imageUrl ? url.imageUrl.split('/') : url.split('/')
        var extension_split = url_split && url_split[url_split.length - 1]
        var browser_type_append = extension_split && extension_split.split('\.')[0].concat(`${browser_type && browser_type.browser_type}`)

        url_split[url_split && url_split.length - 1] = browser_type_append
        url_split.splice(2, 0, _resolutions);
        var url_construct = url_split.join().replace(/\,/g, '/')
        var img_url = `${CDN_URL}${url_construct}`
    }
    else {

        var img_not_found = "product/productnotfound.webp"
        url_split = img_not_found.split('/')
        extension_split = url_split[url_split.length - 1]
        browser_type_append = extension_split.split('\.')[0].concat(`${browser_type.browser_type}`)
        url_split[url_split.length - 1] = browser_type_append
        url_split.splice(1, 0, _resolutions);
        url_construct = url_split.join().replace(/\,/g, '/')
    }


    return `${img_url}?_=${new Date().getTime()}`
}