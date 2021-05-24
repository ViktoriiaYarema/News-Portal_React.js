import React, {useEffect, useState} from 'react';
import MainTitle from "../MainTitle";
import NewsItem from '../NewsItem/NewsItem';
import axios from 'axios';

let useFetch = () => {
    const [data,setData] = useState(null);
    const requestUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bd95c46c69304f21aa39479f054aeff4';

    useEffect(() => {
        const fetchData = async () => {
            // await fetch(requestUrl).then(response =>  response.json()).then(data => setData(data.articles));
            await axios.get(requestUrl).then(data=> setData(data.data.articles));
        }
        fetchData();
    }, []);
    return data;
}

const AllNews = () => {
    const result = useFetch();
    
    const optimizationDay = date => {
        const parse = new Date(date);
        const day = parse.getDate();
        let currentDay;

        function checkZero(value) {
            if(value < 10) {
                return '0'+ value;
            } else {
                return value
            }
        }

        currentDay = checkZero(day);
        return currentDay;
    }   
    
    const optimizationMonth = date => {
        const parse = new Date(date);
        const month = parse.getMonth() + 1;
        let currentMonth;

        function checkZero(value) {
            if(value < 10) {
                return '0'+ value;
            } else {
                return value
            }
        }
        currentMonth = checkZero(month);
        return currentMonth;
    }   

    return (
        <div className = "AllNews">            
            <MainTitle 
                first = 'Быть'
                second = 'в курсе'
                mark = 'событий'
            />
            <div className="container-news">
            { 
                result && result.map((item,index) => {
                    return ( 
                        <NewsItem 
                            key = {index}
                            title = {item.title}
                            src ={item.source.name}
                            day = {optimizationDay(item.publishedAt)}
                            month = {optimizationMonth(item.publishedAt)}
                            name = {item.source.name}
                            content = {item.description}
                            img = {item.urlToImage}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default AllNews;