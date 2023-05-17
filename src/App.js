import './App.css';
import {Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AllMatchesPage from "./pages/allMatchesPage/AllMatchesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
        <Routes>
            <Route path="/all-matches" element={<AllMatchesPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
