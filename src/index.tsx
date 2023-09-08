import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import FoodPage from "./pages/FoodPage";
import HowToPage from "./pages/HowToPage";
import IndexPage from "./pages/IndexPage";
import IngridientsPage from "./pages/IngridientsPage";
import QuizPage from "./pages/QuizPage";
import RecipePage from "./pages/RecipePage";
import RootLayout from "./pages/RootLayOut";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<IndexPage />}></Route>
      <Route path="quiz" element={<QuizPage />}></Route>
      <Route path="food" element={<FoodPage />}></Route>
      <Route path="food/:title" element={<RecipePage />}>
        <Route path="ingridients" element={<IngridientsPage />}></Route>
        <Route path="howto" element={<HowToPage />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
