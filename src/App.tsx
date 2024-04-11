import { BrowserRouter } from "react-router-dom";
import { SelectedItemsProvider, ToggleCartProvider } from "core/provider";
import { Router } from "./core/router";
import { AppLayout } from "layouts";
import { Navigation } from "common/components";

export const App = () => {
  return (
    <ToggleCartProvider>
      <SelectedItemsProvider>
        <AppLayout>
          <BrowserRouter>
            <Navigation />
            <Router />
          </BrowserRouter>
        </AppLayout>
      </SelectedItemsProvider>
    </ToggleCartProvider>
  );
};
