import React from 'react'
import Logout from './Logout'
import Footer from "../components/Footer"
import data from "../Data/data.json"
import Services from './Services';

function ProductPage() {
  let ingo = data.map((d) => d);
  console.log(ingo)
  return (
    <div>
      <Logout/>
      <Services/>
     <Footer/>
      
    
   

   

      



        


  

    </div>
  )
}

export default ProductPage