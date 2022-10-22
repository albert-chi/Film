import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Home from './components/content/Home/home';
import MainRoutes from './routes/routes.js';

//Test

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <Content />
      <MainRoutes />
    </>
  );
}

export default App;
