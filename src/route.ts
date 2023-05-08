import Home from "./pages/Home";
import {
    HOME_ROUTE, lab10_ROUTE,
    lab1_ROUTE,
    lab2_ROUTE,
    lab3_ROUTE,
    lab4_ROUTE,
    lab5_ROUTE,
    lab6_ROUTE, lab7_ROUTE, lab8_ROUTE, lab9_ROUTE,
    MATH_ROUTE, Sys_ROUTE
} from "./utils/route";
import Math from "./pages/Math";
import lab1 from "./pages/lab1/lab1";
import lab2 from "./pages/lab2/lab2";
import lab3 from "./pages/lab3/lab3";
import lab4 from "./pages/lab4/lab4";
import lab5 from "./pages/lab5/lab5";
import lab6 from "./pages/lab6/lab6";
import lab7 from "./pages/lab7/lab7";
import lab8 from "./pages/lab8/lab8";
import lab9 from "./pages/lab9/lab9";
import lab10 from "./pages/lab10/lab10";
import MathSys from "./pages/MathSys";

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
    },
    {
        path: lab4_ROUTE,
        Component: lab4
    },
    {
        path: lab5_ROUTE,
        Component: lab5
    },
    {
        path: lab6_ROUTE,
        Component: lab6
    },
    {
        path: lab7_ROUTE,
        Component: lab7
    },
    {
        path: lab8_ROUTE,
        Component: lab8
    },
    {
        path: lab9_ROUTE,
        Component: lab9
    },
    {
        path: lab10_ROUTE,
        Component: lab10
    },

    {
        path: Sys_ROUTE,
        Component: MathSys
    },
]