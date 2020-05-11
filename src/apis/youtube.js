import axios from 'axios';

const KEY = 'AIzaSyDGwfllCjnnLSUzRVOjbvFUN7NEy0DC7cM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxresults: 5,
        key: KEY,
    }
});
