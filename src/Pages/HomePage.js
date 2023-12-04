// HomePage.js
import React from 'react';
import HomePageContainer from '../Components/HomePage/HomePageContainer';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
function HomePage() {
  return (
    <div>
      <header>
          <NavigationBar />
        </header>
    <HomePageContainer/>
    </div>
  );
}

export default HomePage;
