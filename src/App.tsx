import { Navigation } from "common/components";
import { Router } from "./core/router";
import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "layouts";

export const App = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </AppLayout>
  );
};
