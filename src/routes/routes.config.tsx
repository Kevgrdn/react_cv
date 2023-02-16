import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Cv from "../pages/Cv/Cv"
import Page from "../components/Page";

const router = createBrowserRouter([
  {
    'path': '/',
    'element': <Home />,
    "errorElement": <Error />,

  },
  {
    'path': '/about',
    'element': <About />,
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
    'path': '/test',
    'element': <Page />,
    "errorElement": <Error />,
  },

])
export default router