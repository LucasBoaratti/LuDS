import { Button } from "../Components/Button/Button";

export function Home() {
    const salvarDados = () => {
        alert("Dados salvos!");
    }

    return (
        // Chamando o componente do botão e adicionando as props nele
        <Button descricao="Salvar dados" variant="primary" isDisabled={false} onClick={salvarDados}/>
    );
}