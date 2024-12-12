import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { NotFoundPage } from './404-page';
import ErrorPage from './error-page';
import { BudgetsPage } from './modules/budgets/views/Budgets.page';
import { loader as clientLoader, CreateClientPage } from './modules/clients/views/ClientPage';
import ListClientPage, { loader as clientListLoader } from './modules/clients/views/ListClientPage';
import { SitePage } from './modules/site/views/Site.page';
import { TermsAndPrivacyPage } from './modules/site/views/TermsAndPrivacy.page';
import { AppWrapper } from './shared/components/AppWrapper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

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
            loader: clientListLoader(queryClient),
            errorElement: <ErrorPage />,
          },
          {
            path: 'create',
            element: <CreateClientPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: 'edit/:id',
            loader: clientLoader(queryClient),
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
