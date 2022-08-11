import LeftBannerImage from '../../assets/left-banner-image.jpg'
import Directory from '../../components/directory/Directory'

const categories = [
  {
    "id": 2,
    "title": "mujeres",
    "imageUrl": "https://i.ibb.co/Fm8qT3j/baner-right-image-01.jpg",
    "route" : "/womans"
  },
  {
    "id": 3,
    "title": "hombres",
    "imageUrl": "https://i.ibb.co/SPVLPXy/baner-right-image-02.jpg",
    "route" : "/mens"
  },
  {
    "id": 4,
    "title": "niños",
    "imageUrl": "https://i.ibb.co/Rc0P0hs/baner-right-image-03.jpg",
    "route" : "shop/mujeres"
  },
  {
    "id": 5,
    "title": "accesorios",
    "imageUrl": "https://i.ibb.co/rGgDGS3/baner-right-image-04.jpg",
    "route" : "/mens"
  }
]
const Home = () => {
  return (
    <>
    <div className="main-banner animate__animated animate__fadeIn" id="top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <div className="thumb">
                            <div className="inner-content">
                                <h4>Visitanos Hexashop</h4>
                                <span>Los mejores diseños y precios que podrás encontrar</span>
                                <div className="main-border-button">
                                    <a href="#">Tienda Online</a>
                                </div>
                            </div>
                            <img src="https://i.ibb.co/Y83c6sS/left-banner-image.jpg" alt=""/>
                        </div>
                    </div>
                </div>


                <Directory categories={categories}/>
            </div>
        </div>
    </div>
    
    </>
    )
}

export default Home