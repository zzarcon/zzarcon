import * as React from 'react';
import {FC} from 'react';
import { Link } from 'react-router-dom';
import { MoviesLinkWrapper, CaliLinkWrapper, CoffeeLinkWrapper } from '../styled';

export interface HomeProps {

}

export const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Link to="/movies">
        <MoviesLinkWrapper />
      </Link>      
      <Link to="/cali">
        <CaliLinkWrapper />
      </Link>
      <CoffeeLinkWrapper href="https://sydney-coffee.com/" />
    </div>
  )
}