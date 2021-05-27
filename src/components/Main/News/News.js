import  React from "react";
import './News.scss';
import NewsItem from '../NewsItem/NewsItem';
import {Link} from "react-router-dom";

const News = props => {      

    const optomizationDate = apiDate => {
        const date = new Date(apiDate);
        const checkZero = value => { 
           return value < 10 ? '0'+ value : value  
        }
        return checkZero(date);
    }
    
    return (
        <div className="News"> 
            <h1 className = "MainTitle__title">{props.titleFirst}<pre></pre>{props.titleSecond} <span>{props.titleMark}</span></h1>
            <div className="container-news">  
            { 
                props.response && props.response.map((item,index) => {
                    if(props.amountNewsItems === 6) {
                        if(index < props.amountNewsItems) {                        
                            return ( 
                                <NewsItem 
                                    key = {index}
                                    title = {item.title}
                                    src ={item.source.name}
                                    day = {optomizationDate(item.publishedAt).getDate()}
                                    month = {optomizationDate(item.publishedAt).getMonth() +1}
                                    name = {item.source.name}
                                    content = {item.content}
                                    img = {item.urlToImage}>
                                </NewsItem>
                            )
                        } 
                    } else {
                        return ( 
                            <NewsItem 
                                key = {index}
                                title = {item.title}
                                src ={item.source.name}
                                day = {optomizationDate(item.publishedAt).getDate()}
                                month = {optomizationDate(item.publishedAt).getMonth() +1}
                                name = {item.source.name}
                                content = {item.content}
                                img = {item.urlToImage}
                            />
                        )
                    }
                    
                })                
            }
            {
                props.amountNewsItems === 6 ?  ( <Link to = "/News" className = "News__all-news-link">Быть в курсе событий</Link>) : null
            }         
            </div>
        </div>
    )
}

export default News;