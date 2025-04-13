import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IndexRoutes } from "./routes/index.tsx";
import {Toaster} from 'sonner'

createRoot(document.getElementById("root")!).render(
  
  <BrowserRouter>
    <StrictMode>
      <Toaster richColors />
      <IndexRoutes />
    </StrictMode>
  </BrowserRouter>
);
