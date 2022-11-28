
import { useState } from "react";
import Botao from "../Boatao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

    const times = [
        'Programação',
        'Frontend',
        'Data Science',
        'Dev Ops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Foi =>', nome, cargo, imagem )
    }

    //const [formularioErro, setFormularioErro] = useState(false);
    //className={formularioErro ? "form-error" : ""}

    return(
  <section className="formulario">
    <form  onSubmit={aoSalvar}> 
        <h2>Prencha os dados para criar o card do colaborador</h2>
      <CampoTexto 
        obrigatorio={true}  
        label="Nome" 
        placeholder="Digite seu nome" />
        valor={nome}
        aoAlterado={valor => setNome(valor)}
      <CampoTexto 
        obrigatorio={true}
        label="Cargo" 
        placeholder="Digite seu cargo" />
        valor={cargo}
        aoAlterado={valor => setCargo(valor)}
      <CampoTexto 
        label="Imagem" 
        placeholder="Digite o endereço da imagem" />
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
      <ListaSuspensa 
        obrigatorio={true} 
        label= "Time" 
        itens={times}/>
        
        <Botao>Criar card</Botao>
    </form>
  </section>
    ) 
}
export default Formulario;