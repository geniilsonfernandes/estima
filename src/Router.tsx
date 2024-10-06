import { PDFViewer } from '@react-pdf/renderer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { builderRouter } from './modules/builder/router';
import VladTamplate from './shared/templates/Vlad.tamplate';

const router = createBrowserRouter([
  builderRouter,
  {
    path: '/template',
    element: (
      <PDFViewer showToolbar>
        <VladTamplate title="Estimou" />
      </PDFViewer>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
