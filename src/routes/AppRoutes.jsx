import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import JerseyShop from "../components/projects/details/JerseyShop";
import EduPoint from "../components/projects/details/EduPoint";
import AstronomyClub from "../components/projects/details/JNIAC_JUST";
import Solara from "../components/projects/details/Solara";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/projects/1" element={<Solara />} />
        <Route path="/projects/2" element={<AstronomyClub />} />
        <Route path="/projects/3" element={<JerseyShop />} />
        <Route path="/projects/4" element={<EduPoint />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
