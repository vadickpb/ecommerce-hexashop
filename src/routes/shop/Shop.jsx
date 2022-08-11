import SHOP_DATA from "../../shop.data"

const Shop = () => {
  console.log(SHOP_DATA[4])
  return (
    <section className="section animate__animated animate__fadeIn" id="men">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-heading">
                    <h2>Men's Latest</h2>
                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row rows-cols-3 row-cols-md-3 g-3'">

                      {
                        SHOP_DATA[4].items.map(product => (
                          <div key={product.id} className="item mt-5">
                            <div className="thumb">
                                <div className="hover-content">
                                    <ul className="pe-5 me-3">
                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <img src={product.imageUrl} alt=""/>
                            </div>
                            <div className="down-content">
                                <h4>{product.name}</h4>
                                <span>$120.00</span>
                                {/* <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>   */}
                            </div>
                        </div>
                        ))
                      }
        </div>
    </div>
</section>
  )
}

export default Shop