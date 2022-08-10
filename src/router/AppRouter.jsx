import {Route, Routes} from 'react-router-dom'
import Auth from '../routes/auth/Auth'
import Home from '../routes/home/Home'
import NavBar from '../routes/navbar/Navigation'
import Shop from '../routes/shop/Shop'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<NavBar />}>
                <Route index element = {<Home />} />
                <Route path='/auth' element = {<Auth />} />
                <Route path='/shop' element = {<Shop />} />
            </Route>
        </Routes>
    )
}

export default AppRouter