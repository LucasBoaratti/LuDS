import { useState } from "react";
import { Button } from "../Components/Button/Button";
import { Input } from "../Components/Input/Input";
import { Checkbox } from "../Components/Checkbox/Checkbox";
import { TextArea } from "../Components/TextArea/TextArea";
import { Select } from "../Components/Select/Select";

export function Home() {
    const [numero, setNumero] = useState<number>(0);
    const [nome, setNome] = useState<string>("");
    const [aceito, setAceito] = useState<boolean>(true);
    const [sexo, setSexo] = useState<string>("");

    const salvarDados = () => {
        setNumero(numero + 1);
    }

    const opcoesSexo = [
        {
            label: "Masculino",
            value: "masculino",
        },
        {
            label: "Feminino",
            value: "feminino",
        },
        {
            label: "Outros",
            value: "outros",
        },
    ];

    return (
        <main>
            <h1>Label/input</h1>
            <Input type="text" label="Nome:" id="nome" placeholder="Digite seu nome..." value={nome} onChange={(e) => setNome(e.target.value)} minLength={1} maxLength={20}/>
            <p>Seu nome: {nome}</p>
            <h1>Checkbox</h1>
            <Checkbox label="Maior de idade?" checked={aceito} onChange={(e) => setAceito(e.target.checked)} />
            <p>Foi aceito? {aceito ? "Sim" : "Não"}</p>
            <h1>Botão</h1>
            {/* Chamando o componente do botão e adicionando as props nele */}
            <Button descricao="Aumentar" variant="primary" isDisabled={false} onClick={salvarDados}/>
            <p>Contador: {numero}</p>
            <TextArea label="Digite um texto:" id="texto" rows={5} minLength={1} maxLength={300} placeholder="Digite algo..." />
            <Select id="sexo" label="Sexo:" options={opcoesSexo} value={sexo} onChange={(e) => setSexo(e.target.value)} />
            <p>Seu sexo: {sexo}</p>
        </main>
    );
}