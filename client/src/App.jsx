import { BrowserRouter, Route, Routes } from "react-router";
/* import PostsPage from "./pages/PostsPage" */

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>Home page</p>}></Route>
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
