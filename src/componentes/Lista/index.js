import './Lista.css'

const Lista = (props) => {
    console.log(props.item);

    // Filtrar os itens da raça selecionada
    const itensFiltrados = props.itens?.filter(item => item.raça === props.item);

    return (
        <div className='lista'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {itensFiltrados?.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
}


export default Lista;