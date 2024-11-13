import './PreviousNextButton.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PreviousNextButtons = ({text, link, type, onclick}) => {

    return ( 
        <div className="button-box" onClick={onclick}>
            {type === 'next' ? <Link className='next button' to={link}>{text}</Link> :
                             <Link className='previous button' to={link}>Voltar</Link> 
            }
        </div>
     );
}
 
export default PreviousNextButtons;