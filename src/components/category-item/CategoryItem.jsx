import { Link } from "react-router-dom"


const CategoryItem = ({ categories }) => {

    
    return (

        <div className="row">
            {
                categories.map(category => (
                    <div key={category.id} className="col-lg-6">
                        <div className="right-first-image">
                            <div className="thumb">
                                <div className="inner-content">
                                    <h4 className="category-title">{category.title}</h4>
                                    <span>Mejores prendas </span>
                                </div>
                                <div className="hover-content">
                                    <div className="inner">
                                        <h4 className="category-title">{category.title}</h4>
                                        <p>Escoje cualquiera de nuestros modelos</p>
                                        <div className="main-border-button">
                                            <Link to={category.route}>Mira los productos</Link>
                                        </div>
                                    </div>
                                </div>
                                <img src={category.imageUrl}/>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>







    )
}

export default CategoryItem