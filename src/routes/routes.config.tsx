import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Cv from "../pages/Cv/cv"

const router = createBrowserRouter([
  {
    'path': '/',
    'element': <Home />,
    "errorElement": <Error />
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
])
export default router