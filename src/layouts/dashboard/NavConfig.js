// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Search',
    path: '/dashboard/user',
    icon: getIcon('material-symbols:manage-search-rounded'),
  },
  {
    title: 'Ro Data',
    path: '/dashboard/ROData',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Naver Cafe Data',
    path: '/dashboard/NaverCafe',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Guide',
    path: '/dashboard/products',
    icon: getIcon('ep:guide'),
  }

  /*
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
  */
];

export default navConfig;
