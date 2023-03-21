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
    path: '/dashboard/Search',
    icon: getIcon('material-symbols:manage-search-rounded'),
  },
  {
    title: 'Ro Data',
    path: '/dashboard/RoData',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Naver Cafe Data',
    path: '/dashboard/NaverCafe',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Upload',
    path: '/dashboard/Upload',
    icon: getIcon('material-symbols:drive-folder-upload-outline-rounded'),
  },
  {
    title: 'Guide',
    path: '/dashboard/Guide',
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
