import axios from 'axios'
import { extract } from 'article-parser'

export const FETCH_STORIES = "FETCH_STORIES"

function parse(htmlInput) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlInput, 'text/html')
    return parsedDocument.all[0].textContent
    }



export async function fetchStories (query) {    
    const results = await axios.get(`https://newsapi.org/v2/everything?q=${query}&pageSize=1&apiKey=6f455332142e46d88daddea6d559b104`)
    const input = await results.data.articles[0].url
    const extracted = await extract(input)
    return {
        type: FETCH_STORIES,
        payload: parse(extracted.content)
}
}



// const input = stories?.[0]?.url
// console.log(input)
// let text;
// function getArticle (data) {
//   extract(data)
// .then((article) => {
//   text = article.content
//   return <div>{text}</div>
// })
// .catch(err => console.log(err))
// }

//bing

// export async function fetchStories (query) {    
//     const results = await axios.get(`https://api.bing.microsoft.com/v7.0/search`,{
//         headers: {
//             'Ocp-Apim-Subscription-Key': '2adb3806defa4c0981809abf67def9db'
//         },
//         params: {
//             count: 10,
//             mkt: "en-US",
//             q: query
//           }
//     })
//     return {
//         type: FETCH_STORIES,
//         payload: results
//     }
// }




