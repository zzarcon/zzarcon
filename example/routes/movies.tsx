import * as React from 'react';
import {FC, useState, MouseEvent} from 'react';
import * as ReactDOM from 'react-dom';
import { moviesData } from '../data/movies';
import {Movie} from '../types';
import { TrailerWrapper, MoviesPanel, MoviesWrapper, MovieWrapper, MovieCover, MovieTitle } from '../styled';

export interface MoviesProps {

}

interface TrailerViewerProps {
  youtubeTrailerId: string;
  onClose?: () => void;
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

const Movie: FC<MovieProps> = ({name, coverUrl, youtubeTrailerId}) => {
  const [isTrailerVisible, setTrailerVisible] = useState(false);
  const showTrailer = () => setTrailerVisible(true);
  const hideTrailer = () => setTrailerVisible(false);
  
  return (
    <MovieWrapper onClick={showTrailer}>
      <MovieTitle>{name}</MovieTitle>
      <MovieCover src={coverUrl} alt={name} loading="lazy" />
      {isTrailerVisible && <TrailerViewer youtubeTrailerId={youtubeTrailerId} onClose={hideTrailer} />}
    </MovieWrapper>
  )
}

const TrailerViewer: FC<TrailerViewerProps> = ({youtubeTrailerId, onClose}) => {
  const src = `https://www.youtube.com/embed/${youtubeTrailerId}`;
  const onBackgroundClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClose && onClose();
  }
  return ReactDOM.createPortal((
    <TrailerWrapper onClick={onBackgroundClick}>
      <iframe 
        width="560"
        height="315"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </TrailerWrapper>
  ), document.body)
}