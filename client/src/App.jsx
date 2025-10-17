import { BrowserRouter, Route, Routes } from "react-router";
/* import PostsPage from "./pages/PostsPage" */
import GeneUpPage from "./pages/GeneUpPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GeneUp" element={<GeneUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
