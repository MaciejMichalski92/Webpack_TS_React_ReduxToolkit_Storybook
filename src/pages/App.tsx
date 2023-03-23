import ExampleComponent from '../components/ExampleComponent/ExampleComponent';
import '../styles/global.scss';
import '../styles/critical.scss';
import img from '../images/7flr5p.jpg';

const App = () => (
  <div className="app">
    <h1>
      React 18 boilerplate with TS, Style Modules, Redux Toolkit,
      Jest
    </h1>
    <ExampleComponent />
    <img src={img} alt="Meme" />
  </div>
);

export default App;
