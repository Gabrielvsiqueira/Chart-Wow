import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <section className="campos">
            <div>

                <label> {props.label} </label>
                <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />

            </div>
        </section>
    );
}

export default CampoTexto;