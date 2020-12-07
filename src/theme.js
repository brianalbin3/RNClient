import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: orange
  },
  status: {
      danger: 'red'
  }
});


export default theme;