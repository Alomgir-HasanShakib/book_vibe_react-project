import Header from "./Componants/Header/Header";
import Footer from "./Componants/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <div className=" max-w-7xl mx-auto min-h-[calc(100vh-78px)]">
          <Header></Header>
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
