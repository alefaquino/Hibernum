import './Comment.css'

const Comment = ({ Nome, Avaliacao, Comentario }) => {
    return (
        <div className="d-flex align-items-center " id='comentario'>

            <div id="foto-comentario-box" className=''>
                <div id="foto-comentario">

                </div>

            </div>
            <div className='d-flex flex-column'>
                <h5>{Nome}</h5>
                <h6 className='d-flex align-items-center'>
                    <span>
                        <img src="/star.svg" alt="" />
                    </span>
                    <span className=' mt-1 p-1'>
                        {Avaliacao}
                    </span>
                </h6>

                <p>
                    {Comentario}
                </p>
            </div>
        </div>
    );
}

export default Comment;