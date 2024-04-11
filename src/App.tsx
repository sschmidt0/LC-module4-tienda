import { Navigation } from "common/components";
import { Router } from "./core/router";
import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "layouts";
import { SelectedItemsProvider } from "core/provider";

export const App = () => {
  return (
    <SelectedItemsProvider>
      <AppLayout>
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </AppLayout>
    </SelectedItemsProvider>
  );
};
