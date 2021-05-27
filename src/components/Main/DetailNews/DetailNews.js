import React from 'react'; 
import {withRouter} from 'react-router-dom';
import './DetailNews.scss';

const DetailNews = props => {
    return (
        <div className= "DetailNews">
            <div className = "DetailNews__wrapper">
                <div className = "DetailNews__link-info">
                    <div className= "NewsItem">
                    <div className= "NewsItem__title">{props.history.location.state.title}</div>
                    <div className= "NewsItem__info">  
                        <p className= "NewsItem__scr">{props.history.location.state.src}</p>
                        <div className= "NewsItem__date">
                            <p>{props.history.location.state.day} </p>
                            <p> / {props.history.location.state.month}</p>
                        </div>
                    </div>
                </div>
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