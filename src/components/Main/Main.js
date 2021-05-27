import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import News from './News/News';
import DetailNews from './DetailNews/DetailNews';
import axios from 'axios';

let useFetch = () => {
  const [data,setData] = useState(null);
  const requestUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bd95c46c69304f21aa39479f054aeff4';

  useEffect(() => {
      const fetchData = async () => {
        await axios.get(requestUrl).then(data=> setData(data.data.articles));
      }   
      fetchData();
  }, []);
  return data;
}

const Main = () => {  
  const result = useFetch();
    return (
      <div className="Main">
        <Route
          path= "/"
          exact
          render = {(props) => 
          <News {...props}  
            response = {result} 
            amountNewsItems = {6} 
            titleFirst = {'Всегда'}
            titleSecond = {'cвежие'}
            titleMark = {'новости'}
          />}
        /> 
        <Route
          path= "/News"
          exact
          render = {(props) => 
            <News {...props}  
              response = {result} 
              amountNewsItems = {0}
              titleFirst = {'Быть'}
              titleSecond = {'в курсе'}
              titleMark = {'событий'}
            />}          
        />
        <Route
          path= "/Contacts"
          exact
          component = {Contacts}
        />
        <Route
          path= "/News/:name"
          component = {DetailNews}
        />
      </div>
    );
  }
  
  export default Main;