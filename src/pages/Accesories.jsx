import HeaderPages from "../components/header-pages/HeaderPages"
import { getProductsByCat } from "../helpers/getProductosByCat"

const Accesories = () => {
    const accesoriesProducts = getProductsByCat('Hats', 'Sneakers', 'Jackets')
    return (
        <>
            <section className="section animate__animated animate__fadeIn" id="men">
                <HeaderPages title={'Mujeres'} text='La mejor ropa para mujerse la encontraras aquí' />
                <div className="container">
                    <div className="row rows-cols-3 row-cols-md-3 g-3'">

                        {
                            accesoriesProducts[0]?.items.map(product => (
                                <div key={product.id} className="item mt-5">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul className="pe-5 me-3">
                                                <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={product.imageUrl} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>{product.name}</h4>
                                        <span>$120.00</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Accesories