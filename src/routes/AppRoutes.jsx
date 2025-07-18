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
                </Route>
                <Route path="/projects/1" element={<JerseyShop/>} />
                <Route path="/projects/2" element={<EduPoint/>} />
            </Routes>
        </>
    );
};

export default AppRoutes;