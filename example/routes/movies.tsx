import * as React from 'react';
import {FC} from 'react';
import { moviesData } from '../data/movies';
import {Movie} from '../types';
import { MoviesPanel, MoviesWrapper, MovieWrapper, MovieCover, MovieTitle } from '../styled';

export interface MoviesProps {

}


export const Movies: FC<MoviesProps> = () => {
  const movies = moviesData.map(movieData => <Movie key={movieData.name} {...movieData} />)
 
  return (
    <div>
      <MoviesPanel>
        Favourite movies by <a href="https://www.instagram.com/zzarcon" target="_blank">@zzarcon</a>
      </MoviesPanel>
      <MoviesWrapper>
        {movies}
      </MoviesWrapper>
    </div>
  )
}

interface MovieProps extends Movie {

}

const Movie: FC<MovieProps> = ({name, coverUrl}) => {
  return (
    <MovieWrapper>
      <MovieTitle>{name}</MovieTitle>
      <MovieCover src={coverUrl} alt={name} />
    </MovieWrapper>
  )
}