import axios from "axios";

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