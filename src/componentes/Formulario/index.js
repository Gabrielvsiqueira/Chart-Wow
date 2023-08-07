import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import Lista from "../Lista";
import './Formulario.css'

const Formulario = (props) => {

    const racas = ['Horda', 'Aliança'];
    const classes = [
        'Guerreiro',
        'Paladino',
        'Caçador',
        'Ladino',
        'Sacerdote',
        'Xamã',
        'Mago',
        'Bruxo',
        'Monge',
        'Druida',
        'Caçador de Demônios',
        'Cavaleiro da Morte',
        'Conjurante',
    ];

    const [nome, SetNome] = useState('');
    const [raca, setRaca] = useState('');
    const [classe, setClasse] = useState('');
    const [imagem, setImagem] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.personagemCriado({
            nome: nome,
            raca: raca,
            classe: classe,
            imagem: imagem,
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do seu personagem</h2>
                <CampoTexto
                    obrigatorio={true} label="Nome"
                    placeholder="Informe o nome do seu personagem"
                    valor={nome}
                    aoAlterado={valor => SetNome(valor)}
                />
                <Lista label="Facção"
                    itens={racas}
                    valor={raca}
                    aoAlterado={valor => setRaca(valor)}
                />
                <Lista label="Classe"
                    itens={classes}
                    valor={classes}
                    aoAlterado={valor => setClasse(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da foto do seu personagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Botao>Criar personagem</Botao>
            </form>
        </section>
    );
}

export default Formulario;