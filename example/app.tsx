import * as React from 'react';
import {GHCorner} from 'react-gh-corner';
import {AppWrapper, GlobalStyles} from './styled';

const repoUrl = 'https://github.com/zzarcon/zzarcon';

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <GHCorner openInNewTab href={repoUrl} />
      Example!
    </AppWrapper>
  )
}

export default App