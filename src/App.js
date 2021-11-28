import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CrewPage from './Pages/CrewPage/CrewPage';
import DestinationPage from './Pages/DestinationPage/DestinationPage';
import HomePage from './Pages/HomePage/HomePage';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import TechnologyPage from './Pages/TechnologyPage/TechnologyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
