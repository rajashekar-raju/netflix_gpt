import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Browse from "./components/Browse";
import ErrorPage from "./components/ErrorPage";

function App() {  
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/error",
      element:<ErrorPage/>
    }
  ])

  return (
    <Provider store={appStore}>
    <div>
        <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
