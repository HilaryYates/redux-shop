import Header from "./redux/containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductComponent from "./redux/containers/ProductComponent";
import ProductDetail from "./redux/containers/ProductDetail";
import ProductListing from "./redux/containers/ProductListing";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />}></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
