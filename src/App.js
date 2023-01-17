import "./App.css";
import { Homepage } from "./component/Homepage";
import { UserDataContextProvider } from "./context/userData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserDetail } from "./component/user/UserDetail";
import { ComingSoonPage } from "./component/ComingSoonPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/:id",
      element: <UserDetail />,
      children: [
        {
          path: "/:id/posts",
          element: <ComingSoonPage />,
        },
        {
          path: "/:id/gallery",
          element: <ComingSoonPage />,
        },
        {
          path: "/:id/toDO",
          element: <ComingSoonPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <UserDataContextProvider>
        <RouterProvider router={router} />
      </UserDataContextProvider>
    </div>
  );
}

export default App;
