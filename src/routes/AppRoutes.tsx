import { Navigate, Outlet, useRoutes } from "react-router-dom";

import { routes } from "./routes";
import { MainLayout } from "../components/layout/MainLayout";
import { breweriesRoutes } from "../features/breweries/routes";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const appRoutes = [
  {
    path: "/",
    element: <App />,
    children: breweriesRoutes,
  },
  {
    path: "*",
    element: <Navigate to={`${routes.breweries}`} />,
  },
];

export const AppRoutes = () => {
  return useRoutes(appRoutes);
};
