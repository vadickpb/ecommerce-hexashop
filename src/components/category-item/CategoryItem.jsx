

const CategoryItem = ({ categories }) => {

    
    return (

        <div className="row">
            {
                categories.map(category => (
                    <div key={category.id} className="col-lg-6">
                        <div className="right-first-image">
                            <div className="thumb">
                                <div className="inner-content">
                                    <h4>{category.title}</h4>
                                    <span>Best Clothes For Women</span>
                                </div>
                                <div className="hover-content">
                                    <div className="inner">
                                        <h4>{category.title}</h4>
                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                        <div className="main-border-button">
                                            <a href="#">Discover More</a>
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