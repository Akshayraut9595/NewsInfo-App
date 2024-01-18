import { create } from "apisauce";

const api = create({
    baseURL: 'https://newsapi.org/v2',
});

const apiKey = '?country=us&apiKey=b17ae818a2f64d43a63bb6d6877403e4'

const getTopHeadline = api.get('/top-headlines'+apiKey);

export default{
    getTopHeadline
}