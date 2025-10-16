import { BrowserRouter, Route, Routes } from "react-router";
/* import PostsPage from "./pages/PostsPage" */
import GeneUpPage from "./pages/GeneUpPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Useful Gene Home page</h1>}></Route>
          <Route path="/geneUp" element={<GeneUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
