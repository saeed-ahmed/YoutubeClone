import axios from "axios";
const KEY = "AIzaSyBZgs9w6va9ahlmSscXyCaDqBMZ9cIPAyk";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        type: 'video',
        key:KEY
    }    
});

