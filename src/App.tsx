import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navber'
import Products from './components/Products/Products'
import type { Type } from './types/Types'
import Footer from './components/Footer'

const ProductIconsData = async():Promise<Type[]> =>{
  const res = await fetch("/data.json");
  const data = await res.json();
  // console.log(data)
  return data
}
function App() {
  return (
    <> 
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<li>loading...</li>}>
      <Products ProductIconsData={ProductIconsData()}></Products>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
