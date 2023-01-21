import './header.component.scss';
import icon from '../../../assets/logo.svg'
export const Header=()=>{
    return (
        <section className="header__wrapper">
            <div className="header row">
                <a className="header__title">
                    <div className="icon-container">
                        <img src={icon} alt="Plate Logo" />
                    </div>
                    <h1>Plat<span className='style'>e.</span></h1>
                </a>
                <nav className="header__navigations">
                    <ul className="header__nav-links">
                        <li className="header__nav-link">Home</li>
                        <li className="header__nav-link">Offers</li>
                        <li className="header__nav-link">Help</li>
                        <li className="header__nav-link">Cart</li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}