import React from 'react';
import { Route } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import FreshNews from './FreshNews/FreshNews';
import AllNews from "./AllNews/AllNews";
import DetailNews from './DetailNews/DetailNews';

const Main = () => {
    return (
      <div className="Main">
        <Route
          path= "/"
          exact
          component = {FreshNews}
        />
        <Route
          path= "/AllNews"
          exact
          component = {AllNews}
        />
        <Route
          path= "/Contacts"
          exact
          component = {Contacts}
        />
        <Route
          path= "/AllNews/:name"
          component = {DetailNews}
        />
      </div>
    );
  }
  
  export default Main;