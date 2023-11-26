import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
import CreateListing from "../pages/CreateListing";
import UpdateListing from "../pages/UpdateListing";
import Listing from "../pages/Listing";
import Search from "../pages/Search";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-listing",
        element: (
          <PrivateRoute>
            <CreateListing></CreateListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-listing/:listingId",
        element: (
          <PrivateRoute>
            <UpdateListing></UpdateListing>
          </PrivateRoute>
        ),
      },
      {
        path:"/listing/:listingId",
        element: (
          <Listing></Listing>
        )
      },
      {
        path:"/search",
        element: <Search/>
      }
    ],
  },
]);
