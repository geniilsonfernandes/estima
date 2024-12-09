import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateClientPage } from './modules/clients/views/Client.page';
import { ListClientPage } from './modules/clients/views/List.page';
import { InvoicesPage } from './modules/invoices/views/invoices.page';
import { siteRoutes } from './modules/site/routes';
import { AppWrapper } from './shared/components/AppWrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    ErrorBoundary: () => {
      return <div> erro</div>;
    },
    children: [
      {
        path: '/clients',
        children: [
          {
            path: '',
            element: <ListClientPage />,
          },
          {
            path: 'create',
            element: <CreateClientPage />,
          },
          {
            path: 'edit/:id',
            element: <CreateClientPage />,
          },
        ],
      },
      {
        path: '/invoices',
        element: <InvoicesPage />,
      },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
  ...siteRoutes,
]);

export function Router() {
  return <RouterProvider router={router} fallbackElement={<div> Loading...</div>} />;
}