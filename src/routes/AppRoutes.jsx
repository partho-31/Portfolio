import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import JerseyShop from '../components/projects/details/JerseyShop';
import EduPoint from '../components/projects/details/EduPoint';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout/>} >
                    <Route index element={<HomePage/>}/>
                    <Route path="project/jersey-shop" element={<JerseyShop/>} />
                    <Route path="project/edupoint" element={<EduPoint/>} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;