import CreateUser from "../CreateUser";
import Home from "../Home";
import AnonymousLayout from "../Layouts/AnonymousLayout ";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Login";
import UserList from "../UserList";
import { RenderRoutes } from "./GenerateRoutes";

export const routes = [
  {
    layout: <AnonymousLayout></AnonymousLayout>,
    path: "/anonymouseLayout",
    routes: [
      {
        name: "login",
        title: "login page",
        component: <Login></Login>,
        path: "login",
        isPublic: true,
      },
    ],
  },
  {
    layout: <MainLayout></MainLayout>,
    path: "/mainLayout",
    routes: [
      {
        name: "home",
        title: "Home page",
        hasSiderLink: true,
        component: <Home></Home>,
        path: "home",
      },
      {
        name: "list-users",
        title: "List of users",
        hasSiderLink: true,
        component: <UserList></UserList>,
        path: "users",
      },
      {
        name: "create-user",
        title: "Add user",
        hasSiderLink: true,
        component: <CreateUser></CreateUser>,
        path: "users/new",
      },
    ],
  },
];

export const Routes = () => {
  return RenderRoutes(routes);
};
