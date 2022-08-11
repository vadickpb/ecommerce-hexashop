import { Route, Routes } from 'react-router-dom'
import Auth from '../routes/auth/Auth'
import Home from '../routes/home/Home'
import Navigation from '../ui/navigation/Navigation'
import Shop from '../routes/shop/Shop'
import Footer from '../ui/footer/Footer'
import Mens from '../pages/Mens'
import Womans from '../pages/Womans'
import Accesories from '../pages/Accesories'

const AppRouter = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/mens' element={<Mens />} />
                <Route path='/womans' element={<Womans />} />
                <Route path='/accesories' element={<Accesories />} />

            </Routes>
            <Footer />
        
        </>
    )
}

export default AppRouter