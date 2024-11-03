import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Services } from "./pages";
import { Layout } from "./components/layout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
  );
}

export default App;
