import React from 'react';
import './App.css';

//Header info//
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';

//Card info//
import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';

//Footer Info//


const App = () => {
  return (
    <div>
        <HeaderContainer />
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
        <CardContainer />
        <CardBanner />
        <CardContent />
    </div>
  );
};

export default App;


