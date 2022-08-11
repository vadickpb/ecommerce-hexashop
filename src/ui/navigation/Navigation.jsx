import { Link, Outlet, NavLink} from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { getProductsByCat } from '../../helpers/getProductosByCat';

import './navbar.scss'

const Navigation = () => {
    getProductsByCat()
    return (
        <>
            <div className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link to="/" className="logo">
                                    <img src={Logo} />
                                </Link>

                                <ul className="nav">
                                    <li className="scroll-to-section">
                                        <NavLink to="/" className={({isActive}) => `${isActive ? 'active' : ''}`}>
                                            Home
                                        </NavLink></li>
                                    <li className="scroll-to-section">
                                        <NavLink to="/shop" className={({isActive}) => `${isActive ? 'active' : ''}`}>
                                            Tienda
                                        </NavLink>
                                    </li>
                                    <li className="scroll-to-section">
                                        <NavLink to="/mens" className={({isActive}) => `${isActive ? 'active' : ''}`}>
                                            Hombres
                                        </NavLink>
                                    </li>
                                    <li className="scroll-to-section"><NavLink to="/womans" className={({isActive}) => `${isActive ? 'active' : ''}`} >Mujeres</NavLink></li>
                                    {/* <li className="scroll-to-section"><NavLink to="/accesories">Accesorios</NavLink></li> */}
                                    <li className="scroll-to-section"><NavLink to="/auth" className={({isActive}) => `${isActive ? 'active' : ''}`}>Login</NavLink></li>

                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />

        </>
    )
}

export default Navigation