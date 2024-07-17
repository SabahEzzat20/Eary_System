import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import {UpdateProfile} from "./shared/UpdateProfile";
import { Authentication } from './shared/Authentication';
import { NewQuestion } from "./AdminModule/NewQuestion";
import { Requests } from "./AdminModule/Requests";
import QuestionsInventory from "./AdminModule/QuestionsInventory";
import ExamsHistory from "./UserModule/ExamsHistory";
import Instructions from "./UserModule/Instructions";
import {Questions} from "./UserModule/Questions";
import { App } from "./App";
import { HomePage } from "./shared/HomePage";
import Guest from "./Middleware/Guest";
import NotFoundPage from "./UserModule/NotFound/NotFoundPage";
export const router = createBrowserRouter([
    
{
    path: "",
    element: <App />,
    children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "/questions",
                element: <QuestionsInventory />,
            }
            ,
            {
                path: "/newQuestion",
                element: <NewQuestion />,
            }
            ,
            {
                path: "/requests",
                element: <Requests />,
        }
        ,
        {
            path: "/exam",
            element: <Instructions />,
        }
        ,
        {
            path: "/history",
            element: <ExamsHistory />,
        }
        ]
    },
    {
        element: <Guest />,
        children: [
            {
                path: "/login",
                element: <Authentication />,
            }
        ]
    }
    ,
    {
        path: "/updateProfile",
        element: <UpdateProfile />,
    },
    {
        path: "/login",
        element: <Authentication />,
    }
    ,
    {
        path: "/startTest",
        element: <Questions />,
    },{
        path: '*',
        element: <NotFoundPage/>
    }
]);
