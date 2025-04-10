import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IndexRoutes } from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  
  <BrowserRouter>
    <StrictMode>
      <IndexRoutes />
    </StrictMode>
  </BrowserRouter>
);
