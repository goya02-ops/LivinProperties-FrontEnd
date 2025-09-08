import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "../pages/index.tsx";

export const AppRouter = () => {
  return (
    <Routes>

        {/*Rutas Publicas*/}
        <Route path='/' element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

        {/*Rutas Privadas*/}

    </Routes>
    )
}