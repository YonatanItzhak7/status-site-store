import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsProvider from "./context/products-contexts";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Home/>
      </ProductsProvider>
    </div>
  );
}

export default App;
