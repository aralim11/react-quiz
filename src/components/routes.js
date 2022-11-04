import {createBrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Layout from './Layout';

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (<Layout><Home/></Layout>),
    },
    {
      path: "/signup",
      element: (<Layout><Signup/></Layout>),
    },
    {
      path: "/login",
      element: (<Layout><Login/></Layout>),
    },
    {
      path: "/quiz",
      element: (<Layout><Quiz/></Layout>),
    },
    {
      path: "/result",
      element: (<Layout><Result/></Layout>),
    },
]);

export default routes;
