import './App.css';
import Header from './components/header/header';
import MainRoutes from './routes/routes.js';

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <MainRoutes />
    </>
  );
}

export default App;
