import { createBrowserRouter } from "react-router-dom"
import App from "./App.jsx"

import HomePage from "../pages/HomePage.jsx"
import StatsPage from "../pages/StatsPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/stats",
        element: <StatsPage />
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <>404</>,
  //   children: [],
  // }
])

export default router