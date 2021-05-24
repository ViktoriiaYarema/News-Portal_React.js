import React from 'react'; 
import {withRouter} from 'react-router-dom';
import NewsItem from '../NewsItem/NewsItem';
import './DetailNews.scss';

const DetailNews = props => {
    return (
        <div className= "DetailNews">
            <div className = "DetailNews__wrapper">
                <div className = "DetailNews__link-info">
                    <NewsItem 
                        title = {props.history.location.state.title}
                        src = {props.history.location.state.src}
                        day = {props.history.location.state.day}
                        month = {props.history.location.state.month}
                    />
                </div>
                <div className= "DetailNews__full">
                    <div className = "DetailNews__img">                
                        <img src = {props.history.location.state.img} alt = {props.history.location.state.src}></img>                        
                    </div>
                    <div className= "DetailNews__content">
                        {props.history.location.state.content}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default withRouter(DetailNews);