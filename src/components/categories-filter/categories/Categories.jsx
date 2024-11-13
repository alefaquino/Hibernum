import SelectCategorie from '../../selectCategorie/selectCategorie';
import './Categories.css'

const Categories = () => {
    return (
        <div className="categorias">
            <h5 className='mb-3 mt-2'>Categorias</h5>
            <SelectCategorie id="construcoesreformas" nomeCategoria="Roupas de Frio" value="construcoesreformas"/>
            <SelectCategorie id="manutencaoreparos" nomeCategoria="Acessórios de Frio" value="construcoesreformas"/>
            <SelectCategorie id="servicosautomotivos" nomeCategoria="Acessórios de Viagem" value="construcoesreformas"/>
            </div>
    );
}

export default Categories;