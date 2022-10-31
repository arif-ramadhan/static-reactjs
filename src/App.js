import './App.css';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import Superhero from './components/Superhero';
import Trending from './components/Trending';

function App() {
  return (
    <div>
      <div className="layer1">
        <NavigationBar/>
        <Intro/>
      </div>
      <div className="trending">
        <Trending/>
      </div>
      <div className="superhero">
        <Superhero/>
      </div>
    </div>
  );
}

export default App;
