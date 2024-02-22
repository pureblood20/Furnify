import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../Components";

const HomeLayout = () => {
  const navigate = useNavigation();
  return (
    <div>
      <Header></Header>
      <Navbar />
      <section className="align-element py-20">
        {navigate.state === "loading" ? (
          <span className="loading loading-ring loading-lg" />
        ) : (
          <Outlet />
        )}
      </section>
    </div>
  );
};

export default HomeLayout;
