import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { routes } from "./App";
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
