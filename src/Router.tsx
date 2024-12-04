import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { InvoicesPage } from './modules/invoices/views/invoices.page';
import { siteRoutes } from './modules/site/routes';
import { AppWrapper } from './shared/components/AppWrapper';
import VladTamplate from './shared/templates/Vlad.tamplate';


const router = createBrowserRouter(
  [
    {
      path: 'invoices',
      element: (
        <AppWrapper pageTitle="orçamentos">
          <InvoicesPage />
        </AppWrapper>
      ),
      ErrorBoundary: () => {
        return <div> erro</div>;
      },
    },
    ...siteRoutes,
    {
      path: '/template',
      // element: <VladTamplate title="Estimou" />,
      element: <VladTamplate title="Estimou" />,
    },
    {
      path: '*',
      element: <AppWrapper>rota não encontrada</AppWrapper>,
      errorElement: <AppWrapper>rota não encontrada</AppWrapper>,
      ErrorBoundary: () => {
        return <AppWrapper>estimou</AppWrapper>;
      },
    },
  ],
  {}
);

export function Router() {
  return <RouterProvider router={router} fallbackElement={<div> Loading...</div>} />;
}