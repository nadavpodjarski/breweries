import { routes } from "../../../routes/routes";
import { Breweries, FavoriteBreweries } from "../view";

export const breweriesRoutes = [
  {
    path: routes.breweries,
    element: <Breweries />,
    children: [],
  },
  {
    path: routes.favoriteBreweries,
    element: <FavoriteBreweries />,
    children: [],
  },
];
