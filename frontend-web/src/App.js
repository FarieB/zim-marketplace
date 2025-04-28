import { Routes, Route } from "react-router-dom";
import colors from "./styles/colors";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ItemDetails from "./pages/ItemDetails";
import Auth from "./pages/Auth";
import PostItem from "./pages/PostItem";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
    <nav className="navbar" style={{ backgroundColor: colors.primary }}>
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          Zim Marketplace 🇿🇼
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/post-item">Post Item</Link>
          <Link to="/auth">Login</Link>
        </div>
      </nav>
            
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/post-item" element={<PostItem />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
