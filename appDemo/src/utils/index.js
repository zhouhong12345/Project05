import queryString from 'query-string';

let rootUrl = "https://www.fastmock.site/mock/626dc8b1223fd02654799cd08b53359d/api"

let myFetch = {
    get(url,queryParams) {
        url=rootUrl+url
        if(queryParams){
         url+="?"+queryString.stringify(queryParams)
        }
        console.log(url);
        return fetch(url)
            .then(res=>res.json())
    },
    post(url,body) {
        return fetch(rootUrl + url, {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
    }
}
export {myFetch};//多个用,导出