import Custom from '../components/Containers/Custom';
import PreDefined from '../components/Containers/PreDefined';
import Dashboard from '../components/Containers/Dashboard';

const routes = [
  {
    path: '/',
    exact: true,
    component: Dashboard
  },
  {
    path: '/pre-defined/:id',
    exact: true,
    component: PreDefined
  },
  {
    path: '/custom',
    exact: true,
    component: Custom
  },
];

export default routes;
