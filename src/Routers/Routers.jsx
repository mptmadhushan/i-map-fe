import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home,Article } from '@/pages';
import { Header } from '@/layout';

const Routers = () => {
  return (
    <div>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/home" element={<Home />} />

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
