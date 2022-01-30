import styled, {createGlobalStyle, keyframes} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Helvetica;
    background-color: #F2F2F2;
  }

  * {
    box-sizing: content-box;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AppWrapper = styled.div`

`;

export const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(173px, 1fr) );
  grid-gap: 10px;
  margin: 0 auto;
  max-width: 1200px;
`

export const MovieCover = styled.img`
  width: 100%;
`;

export const MovieTitle = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.7);
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  font-weight: bold;
  text-align: center;
`;

export const MovieWrapper = styled.div`
  position: relative;
  height: 250px;
  width: 170px;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  border-radius: 3px;
  cursor: pointer;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 16px 4px rgba(48, 64, 176, 0.65), 0 0 0 1px rgba(0,0,0,0.08);
  }
`

export const MoviesPanel = styled.div`
  width: calc(100vw - 40px);
  background: #626973;
  margin: 10px auto;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  font-size: 22px;
  color: #F2F2F2;
  max-width: 500px;

  a {
    text-decoration: none;
    color: #0B1C26;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    margin-left: 20px;
  }
`;

const fadeIn = keyframes`
  0% {
    background: rgba(0,0,0,0.0)
  }
  100% {
    background: rgba(0,0,0,0.8)
  }
`

export const BlanketWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} .5s forwards;
`;

export const MoviesLinkWrapper = styled.div`
  width: 300px;
  background-color: #ccc;
  background-image: url(/assets/movies_bg.jpg);
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  margin: 20px auto;
  height: 200px;
  border-radius: 10px;
  color: black;
  position: relative;
  overflow: hidden;

  &:before {
    content: 'Movies';
    color: white;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    text-shadow: 1px 1px black;
  }
`;

export const CaliLinkWrapper = styled.div`
  width: 300px;
  background-color: white;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 10px 0;
  background-image: url(/assets/sw.png);
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  margin: 20px auto;
  height: 126px;
  border-radius: 10px;
  color: black;
  position: relative;
  overflow: hidden;

  &:before {
    content: 'Cali';
    color: white;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    text-shadow: 1px 1px black;
  }
`;

export const CoffeeLinkWrapper = styled.a`

`;

export const AddMoviePopupWrapper =  styled.div`
  input {
    margin-right: 20px;
  }
`;