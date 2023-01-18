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
    title: 'Guide',
    path: '/dashboard/Guide',
    icon: getIcon('ep:guide'),
  }
];

export default navConfig;
