import useStateValue from "./components/AppState";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { Widgets } from "./components/Widgets";

function App() {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  const withLogin = (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="app">
      <Header />
      {/* <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div> */}
    </div>
  );
}

export default App;
