import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { DoggiesScene, KittiesScene } from "scenes";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.root} element={<KittiesScene />} />
        <Route path={routes.kitties} element={<KittiesScene />} />
        <Route path={routes.doggies} element={<DoggiesScene />} />
      </Routes>
    </BrowserRouter>
  );
};
