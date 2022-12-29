import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Home2 from "../pages/Home/Home2";
import Portfolio from "../pages/Portfolio/Portfolio";
import Cv from "../pages/Cv/Cv"

const router = createBrowserRouter([
  {
    'path': '/',
    'element': <Home2 />,
    "errorElement": <Error />,

  },
  {
    'path': '/about',
    'element': <Home />,
    "errorElement": <Error />,

  },
  {
    'path': '/projects',
    'element': <Portfolio />,
    "errorElement": <Error />,
  },
  {
    'path': '/cv',
    'element': <Cv />,
    "errorElement": <Error />,
  },
  {
    'path': '/home',
    'element': <Home2 />,
    "errorElement": <Error />,
  },
])
export default router