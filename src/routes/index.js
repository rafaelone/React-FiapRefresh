import Home from '../Pages/Home/Home'
import Details from '../Pages/Details'

const routes  = [
    {
        exact: 'true',
        path: '/',
        component:  Home
    },
    {
        exact: 'true',
        path: '/item/:id',
        component: Details
    }
] 

export default routes;