import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Builder } from './modules/builder/Builder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Builder />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}