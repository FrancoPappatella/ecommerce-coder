import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { CartProvider } from "./components/context/CartContext";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CategoriaList } from "./components/CategoriaList/CategoriaList";
import { ContactoScreen } from "./components/ContactoScreen/ContactoScreen";
import { NosotrosScreen } from "./components/NosotrosScreen/NosotrosScreen";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/productos/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<CategoriaList />} />
            <Route path="/nosotros/" element={<NosotrosScreen/>} />
            <Route path="/contacto/" element={<ContactoScreen/>} />
          </Routes>
        </Router>

        {/*<ItemCount id="item-count" />*/}
      </div>
    </CartProvider>
  );
}

export default App;
