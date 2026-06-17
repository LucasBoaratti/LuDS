import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../Pages/Cadastro/Cadastro";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Cadastro/>} />
        </Routes>
    );
}