import React, { } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from "./GptSearch";
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch />) : (<>
          <MainContainer />
          <SecondaryContainer />
        </>)
      }


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