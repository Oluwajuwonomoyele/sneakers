import Home from './pages/home';
import { sliderData } from './sliderData'

function App() {
  return (
    <>
      <Home slides={sliderData}/>
    </>
  );
}

export default App;
