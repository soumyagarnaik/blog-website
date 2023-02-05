import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
//   params: {
//     q: 'taylor swift',
//     pageNumber: '1',
//     pageSize: '100',
//     autoCorrect: 'true',
//     fromPublishedDate: 'null',
//     toPublishedDate: 'null'
//   },
//   headers: {
//     'X-RapidAPI-Key': '972618794bmsh1e888b594a8849dp102d52jsna93ca173b8bd',
//     'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
//   }
// };

class BlogServices {
    getListOfblogs() {
     return axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5d20677c729841888f2e9ac1f6b0661a').then(response => {
            if(response && response.status === 200) {
                return response
            }
        })
    }

}

export default BlogServices