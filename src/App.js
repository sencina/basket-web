import './App.css';
import {Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import {useRequestService} from "./service/requestService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage service={useRequestService()}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
