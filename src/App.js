import logo from './logo.svg';
import './App.css';

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
}

const App = () => (
  <Grommet theme={theme} full>
    <Box fill background="light-3">
      <NavBar />
    </Box>
  </Grommet>
)

export default App;
