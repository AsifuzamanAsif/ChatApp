import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Registration from "./components/pages/Registration";
import Login from "./components/pages/Login";
import Layout from "./components/Layout";
import Chat from "./components/pages/Chat";
import User from "./components/pages/User";
import Group from "./components/pages/Group";
import Friend from "./components/pages/Friend";
import People from "./components/pages/People";
import Newsfeed from "./components/Newsfeed";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/Group" element={<Group />}></Route>
          <Route path="/Friend" element={<Friend />}></Route>
          <Route path="/People" element={<People />}></Route>
          <Route path="/Newsfeed" element={<Newsfeed />}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
