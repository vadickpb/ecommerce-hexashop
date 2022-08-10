import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.png'

import './navbar.scss'

const Navigation = () => {
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
                                    <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                                    <li className="scroll-to-section"><Link to="/shop">Tienda</Link></li>
                                    <li className="scroll-to-section"><Link to="/auth">Login</Link></li>

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