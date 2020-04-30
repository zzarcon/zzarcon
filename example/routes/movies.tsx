import * as React from 'react';
import {FC, useState} from 'react';
import { moviesData } from '../data/movies';
import {Movie} from '../types';
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import { MoviesPanel, AddMoviePopupWrapper, MoviesWrapper, MovieWrapper, MovieTitle, MovieCover } from '../styled';
import { Blanket } from '../components/blanket';

export interface MoviesProps {

}

interface TrailerViewerProps {
  youtubeTrailerId: string;
  onClose?: () => void;
}

export const Movies: FC<MoviesProps> = () => {
  const movies = moviesData.map(movieData => <Movie key={movieData.name} {...movieData} />)
  const [isAddMoviePopupVisible, setAddMoviePopupVisible] = useState(false);
  const showAddMoviePopup = () => setAddMoviePopupVisible(true);
  const closeAddMoviePopup = () => setAddMoviePopupVisible(false);
  const renderAddMoviePopup = () => {
    if (!isAddMoviePopupVisible) return;

    return (
      <Blanket onClose={closeAddMoviePopup}>
        <AddMoviePopupWrapper>
          <Textfield
            name="movie-name"
            placeholder="Movie name..."
            label="Name"
            width={300}
            required
            elemAfterInput={<Button appearance="primary">Submit</Button>}
          />
        </AddMoviePopupWrapper>
      </Blanket>
    )
  }

  return (
    <div>
      <MoviesPanel>
        Favourite movies by <a href="https://www.instagram.com/zzarcon" target="_blank">@zzarcon</a>
        <Button appearance="primary" spacing="compact" onClick={showAddMoviePopup}>Add movie</Button>
      </MoviesPanel>
      <MoviesWrapper>
        {movies}
      </MoviesWrapper>
      {renderAddMoviePopup()}
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

  return (
    <div>
      <Blanket onClose={onClose}>
        <iframe 
          width="560"
          height="315"
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </Blanket>
    </div>
  )
}
