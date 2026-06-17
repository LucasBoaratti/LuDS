import React, { useState, type FormEvent } from "react";
import { Button } from "../../Components/Button/Button";
import { Input } from "../../Components/Input/Input";
import { Select } from "../../Components/Select/Select";
import styles from "./Cadastro.module.css";

export function Cadastro() {
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [confirmarSenha, setConfirmarSenha] = useState<string>("");
    const [sexo, setSexo] = useState<string>("");

    // Formulário inválido
    const formInvalido = nome === "" || email === "" || senha === "" || confirmarSenha === "" || sexo === "";

    // Opções de sexo
    const opcoesSexo = [
        {
            label: "Selecione...",
            value: "",
        },
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

    // Função de realizar cadastro
    function realizarCadastro(e: React.FormEvent) {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            alert("As senhas são diferentes.");
            
            return;
        }
        else {
            alert("Seja bem-vindo(a)!");
        }
    }

    return (
        <section className={styles.containerFormulario}>
            <form className={styles.formulario} onSubmit={realizarCadastro}>
                <h1 className={styles.titulo}>Formulário de cadastro</h1>

                <Input label="Nome:" id="nome" type="text" placeholder="Digite seu nome..." value={nome} onChange={(e) => setNome(e.target.value)} />
                <Select label="Sexo:" id="sexo" options={opcoesSexo} value={sexo} onChange={(e) => setSexo(e.target.value)} />
                <Input label="Email:" id="email" type="email" placeholder="Digite seu email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input label="Senha:" id="senha" type="password" placeholder="Digite sua senha..." value={senha} onChange={(e) => setSenha(e.target.value)} />
                <Input label="Confirmar Senha:" id="confirmarSenha" type="password" placeholder="Confirme sua senha..." value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />

                <div className={styles.containerBotao}>
                    <Button type="submit" variant="primary" descricao={formInvalido ? "Preencha os dados" : "Cadastrar"} isDisabled={formInvalido} />
                </div>
            </form>
        </section>
    );
}