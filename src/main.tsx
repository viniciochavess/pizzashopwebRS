import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "sonner";
import { IndexRoutes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet titleTemplate="%s - Pizza shop" />
      <Toaster richColors position="top-right" />
      <RouterProvider router={IndexRoutes} />
    </HelmetProvider>
  </StrictMode>
);
