import { createBrowserRouter, RouterProvider } from 'react-router';
import { NotFoundPage } from './404-page';
import ErrorPage from './error-page';
import { BudgetsPage } from './modules/budgets/views/Budgets.page';
import { CreateClientPage } from './modules/clients/views/Client.page';
import { ListClientPage } from './modules/clients/views/List.page';
import { SitePage } from './modules/site/views/Site.page';
import { TermsAndPrivacyPage } from './modules/site/views/TermsAndPrivacy.page';
import { AppWrapper } from './shared/components/AppWrapper';

const router = createBrowserRouter([
  {
    path: 'app',
    element: <AppWrapper />,
    errorElement: <ErrorPage />,
    ErrorBoundary: () => {
      return <div> erro</div>;
    },
    children: [
      {
        index: true,
        element: <div>home</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: 'clients',
        children: [
          {
            path: '',
            element: <ListClientPage />,
            loader: () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({
                    clients: [
                      {
                        id: '1',
                        name: 'Client 1',
                      },
                    ],
                  });
                }, 1500);
              });
            },
            errorElement: <ErrorPage />,
          },
          {
            path: 'create',
            element: <CreateClientPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: 'edit/:id',
            element: <CreateClientPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: 'budgets',

        children: [
          {
            path: '',
            element: <BudgetsPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/',
    children: [
      {
        path: '',
        element: <SitePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'politica-de-privacidade',
        element: <TermsAndPrivacyPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'changelog',
        element: <div>changelog</div>,
        errorElement: <ErrorPage />,
        // TODO: create changelog in mdx
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
