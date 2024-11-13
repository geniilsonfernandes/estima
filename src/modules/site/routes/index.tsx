import { RouteObject } from 'react-router-dom';
import { Site } from '../presentation/Site';
import { TermsAndPrivacy } from '../presentation/TermsAndPrivacy';

export const siteRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Site />,
  },
  {
    path: '/politica-de-privacidade',
    element: <TermsAndPrivacy />,
  },
];
