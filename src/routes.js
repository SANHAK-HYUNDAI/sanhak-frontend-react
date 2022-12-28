import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import RoData from './pages/RoData';
import Search from './pages/SearchInfo';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Guide from './pages/Guide';
import DashboardApp from './pages/DashboardApp';
import NaverCafe from './pages/NaverCafe';
// LearnMore 페이지 추가 
import LearnMore from './pages/LearnMore';
import AfterLearnMore from './pages/AfterLearnMore';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'Search', element: <Search /> },
        { path: 'Guide', element: <Guide /> },
        { path: 'RoData', element: <RoData /> },
        { path: 'NaverCafe', element: <NaverCafe /> },
        { path: '/dashboard/app/LearnMore', element: <LearnMore /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [ 
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
        { path: '/LearnMore/information' , element: <AfterLearnMore /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}