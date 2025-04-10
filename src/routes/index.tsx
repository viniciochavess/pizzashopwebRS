import { Route, Routes } from "react-router-dom";
import "../index.css";
import App from "../App";
import { AppLayout } from "../layout/AppLayout";
import { SignIn } from "../pages/auth/Sign-In";
export function IndexRoutes() {
  return (
    <Routes>
      <Route path="/" Component={AppLayout}>
        <Route index element={<App />} />
      </Route>

      <Route path="/auth" element={<AppLayout />}>
        <Route index element={<SignIn />} />
      </Route>

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
