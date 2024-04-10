import { Navigate, RouteObject } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { Breweries, FavoriteBreweries } from "../view";

export const breweriesRoutes: RouteObject[] = [
  {
    path: routes.breweries,
    element: <Breweries />,
    index: true,
  },
  {
    path: routes.favoriteBreweries,
    element: <FavoriteBreweries />,
  },
];
