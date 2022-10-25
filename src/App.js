import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Home from './components/content/Home/home'; //Todo: remove unused
import MainRoutes from './routes/routes.js';

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      {/*Todo: Remove Content*/}
      <Content />
      {/*Todo: Remove Content / End*/}
      <MainRoutes />
    </>
  );
}

export default App;
