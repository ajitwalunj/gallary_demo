import Home from './Views/Home/home';
import Gallary from './Views/Gallary/gallay';

const routes = [
    {
        path: "/home",
        layout: "/gallary-layout",
        name: "Home",
        component: Home
    },
    {
        path: "/gallary",
        name: "Gallary",
        layout: "/gallary-layout",
        component: Gallary
      }
];

export default routes;