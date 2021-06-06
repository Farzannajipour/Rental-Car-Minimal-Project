import { createMuiTheme } from '@material-ui/core/styles';

import Main from './components/main';
import {PRIMARY_COLOR, SECONDARY_COLOR} from './helpers/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

export default App;
