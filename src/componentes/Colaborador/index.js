import './Colaborador.css'

const Colaborador = ({nome, imagem, classe}) => {

    return (<div className="colaborador">
        <div className="cabecalho">
            <img src={imagem} alt={nome}/>
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{classe}</h5>
        </div>
    </div>

    );
}

export default Colaborador;