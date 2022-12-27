import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";

const router = createBrowserRouter([
  {
    'path': '/',
    'element': <Home />,
    "errorElement": <Error />
  },
  {
    'path': '/projects',
    'element': <Portfolio />,
    "errorElement": <Error />
  },
])
export default router