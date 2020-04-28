import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Helvetica;
    background-color: #F2F2F2;
  }

  * {
    box-sizing: content-box;
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
`;