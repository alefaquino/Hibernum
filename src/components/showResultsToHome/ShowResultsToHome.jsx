import PrestadorServico from "../prestadorServico/PrestadorServico";


const ShowResultsToHome = ({ usersFound }) => {
    return (
        <>
            <div id='prestadores-box'>
                {
                    usersFound.length > 0 ?
                        usersFound.map((prestador) => (
                            <PrestadorServico
                                key={prestador.id}
                                foto={`http://54.87.135.22:5000/images/users/${prestador.image}`}
                                nome={prestador.name}
                                descricao={prestador.descriptionAd}
                                servicos={prestador.servicesAd}
                                avaliacao={"5.0"}
                                cidade={prestador.city}
                                rota={`/users/${prestador.id}`}
                            />
                        ))
                        :
                        <div className='text-center mt-4'>
                            <h3>Sua pesquisa não encontrou nenhum resultado!</h3>
                        </div>
                }
            </div>
        </>
    );
}

export default ShowResultsToHome;