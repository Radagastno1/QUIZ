import { Typography } from "@mui/material";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { recipes } from "../recipe";

export default function RecipePage() {
  const { title } = useParams();
  const recipe = recipes.find((r) => r.title === title);

  return (
    <div>
      {recipe ? (
        <div className="flex items-center">
          <img src={recipe.image} alt="food" className="h-40 w-60" />
          <Typography variant="h4">{recipe.title}</Typography>
        </div>
      ) : (
        <div>No recipe found</div>
      )}
      <nav className="flex w-full">
        <ul className="flex w-full">
          <li className="flex flex-1">
            <NavLink
              className={({ isActive }) =>
                `w-full p-4 bg-slate-200 font-semibold ${
                  isActive ? "text-neutral-900" : "text-neutral-400"
                }`
              }
              to="ingridients"
            >
              Ingridienser
            </NavLink>
          </li>
          <li className="flex flex-1">
            <NavLink
              className={({ isActive }) =>
                `w-full p-4 bg-slate-200 font-semibold ${
                  isActive ? "text-neutral-900" : "text-neutral-400"
                }`
              }
              to="howto"
            >
              Gör såhär
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
