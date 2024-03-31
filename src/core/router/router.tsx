import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { KittiesScene } from "scenes";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={<KittiesScene />} />
        <Route path={routes.kitties} element={<KittiesScene />} />
      </Routes>
    </BrowserRouter>
  );
};
