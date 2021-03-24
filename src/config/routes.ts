import IRoute from '../interface/route';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';

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
    }
]

export default routes;