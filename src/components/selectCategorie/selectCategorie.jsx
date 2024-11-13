import "./selectCategorie.css"

const SelectCategorie = ({ nomeCategoria, id, value }) => {

    return (
        <>
            <input type="radio" name="categoria" id={id} value={value} className='input-categoria' />
            <label htmlFor={id} className="label-categoria categoria">{nomeCategoria}</label>
        </>
    );
}

export default SelectCategorie;