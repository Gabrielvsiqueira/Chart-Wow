import Colaborador from '../Colaborador';
import './Personagem.css'

const Personagem = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className='personagem' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.personagens.map (colaborador => <Colaborador nome={colaborador.nome} classe={colaborador.classe} imagem={colaborador.imagem}/>)}

            </div>
            <div className='personagem'>

            </div>
        </section>
    );
}

export default Personagem;