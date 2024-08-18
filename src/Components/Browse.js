import React, {} from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';

const Browse = () => {

useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/*
      Main Container
        -Video Background
        -Video Title
      Secondary Container
        -Movie List*n
        -Movie Cards*n  
      */}
       
    </div>
  )
}

export default Browse