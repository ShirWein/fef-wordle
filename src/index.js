import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "game",
    element: <Game/>,
  }
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);