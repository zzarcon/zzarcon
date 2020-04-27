import * as React from 'react';
import {FC} from 'react';
import { moviesData } from '../data/movies';
import {Movie} from '../types';

export interface MoviesProps {

}


export const Movies: FC<MoviesProps> = () => {
  const movies = moviesData.map(movieData => <Movie key={movieData.name} {...movieData} />)
 
  return (
    <div>
      Favourite movies (in order)
      {movies}
    </div>
  )
}

interface MovieProps extends Movie {

}

const Movie: FC<MovieProps> = ({name, coverUrl, youtubeTrailerId}) => {
  return (
    <div>
      {name}
      <img src={coverUrl} alt={name} />
    </div>
  )
}