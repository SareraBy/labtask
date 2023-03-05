import Home from "./pages/Home";
import {HOME_ROUTE, lab1_ROUTE, lab2_ROUTE, lab3_ROUTE, MATH_ROUTE} from "./utils/route";
import Math from "./pages/Math";
import lab1 from "./pages/lab1/lab1";
import lab2 from "./pages/lab2/lab2";
import lab3 from "./pages/lab3/lab3";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: MATH_ROUTE,
        Component: Math
    },
    {
        path: lab1_ROUTE,
        Component: lab1
    },
    {
        path: lab2_ROUTE,
        Component: lab2
    },
    {
        path: lab3_ROUTE,
        Component: lab3
    }
]