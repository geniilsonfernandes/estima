import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { builderRouter } from './modules/builder/router';
import { siteRoutes } from './modules/site/routes';
import VladTamplate from './shared/templates/Vlad.tamplate';


const router = createBrowserRouter([
  {
    path: 'app',
    children: [builderRouter],
  },
  ...siteRoutes,
  {
    path: '/template',
    // element: <VladTamplate title="Estimou" />,
    element: <VladTamplate title="Estimou" />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}