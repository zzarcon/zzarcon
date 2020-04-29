import * as React from 'react';
import {FC} from 'react';
import { Link } from 'react-router-dom';
import { MoviesLinkWrapper } from '../styled';

export interface HomeProps {

}

export const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Link to="/movies">
        <MoviesLinkWrapper>
        </MoviesLinkWrapper>
      </Link>      
    </div>
  )
}