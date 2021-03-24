import IRoute from '../interface/route';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import RobotPage from '../pages/robot';
import NewRobotPage from '../pages/newRobot';
import BattlesPage from '../pages/battles';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true

    },
    {
        path: '/about/:number',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
    {
        path: '/robot/:id',
        name: 'Robot Page',
        component: RobotPage,
        exact: true
    },
    {
        path:'/new',
        name: 'Create Page',
        component: NewRobotPage,
        exact: true
    },
    {
        path: '/battles',
        name: 'Battle Page',
        component: BattlesPage,
        exact: true
    }
]

export default routes;