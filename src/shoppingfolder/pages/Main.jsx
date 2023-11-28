import React ,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Womenc from '../components/Womenc'

import {Gents,Ladies} from '../data'


const Main = () => {
     
   const[gentsFashion,setGentsFashion]=useState(Gents)
   const[ladiesFashion,setLadiesFashion]=useState( Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFashion={gentsFashion}/>
      <Womenc ladiesFashion={ladiesFashion} />
       <Footer />
    </div>
  )
}

export default Main
