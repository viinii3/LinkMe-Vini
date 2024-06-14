import './Company.scss'
import logo from './logo.png'

function Company(){
    return(
        <div className="company">
            <div className="company-detail">
                <h3>Minha Empresa</h3>
            </div>
            <div className="company-link">
                <a href="https://devzoneinnovations.com.br/">
                    <img src={logo} alt="empresa logo"></img>
                </a>
            </div>
        </div>

    )
}

export default Company