import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { NotFoundPage } from './404-page';
import ErrorPage from './error-page';
import { ProtectedRoute } from './modules/authentication/components/ProtectedRoute/ProtectedRoute';
import { SignInPage } from './modules/authentication/views/signInPage';
import { SignUpPage } from './modules/authentication/views/SignUpPage';
import { BudgetsPage } from './modules/budgets/views/Budgets.page';
import { loader as clientLoader, CreateClientPage } from './modules/clients/views/ClientPage';
import ListClientPage, { loader as clientListLoader } from './modules/clients/views/ListClientPage';
import { SitePage } from './modules/site/views/Site.page';
import { TermsAndPrivacyPage } from './modules/site/views/TermsAndPrivacy.page';
import { AppWrapper } from './shared/components/AppWrapper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '', element: <SitePage />, errorElement: <ErrorPage /> },
      { path: 'sign-up', element: <SignUpPage />, errorElement: <ErrorPage /> },
      { path: 'sign-in', element: <SignInPage />, errorElement: <ErrorPage /> },
      { path: 'politica-de-privacidade', element: <TermsAndPrivacyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: '/app',
    element: <ProtectedRoute />, // Aplica proteção
    children: [
      {
        element: <AppWrapper />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <div>home</div>,
          },
          {
            path: 'clients',
            children: [
              {
                path: '',
                element: <ListClientPage />,
                loader: clientListLoader(queryClient),
              },
              {
                path: 'create',
                element: <CreateClientPage />,
              },
              {
                path: 'edit/:id',
                loader: clientLoader(queryClient),
                element: <CreateClientPage />,
              },
            ],
          },
          {
            path: 'budgets',
            element: <BudgetsPage />,
          },
        ],
      },
    ],
  },
]);

export function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}