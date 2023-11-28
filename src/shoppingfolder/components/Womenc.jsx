import React from 'react'

const Womenc = (props) => {
    const{title, image1,image2,image3,image4,image5,image6} = props.ladiesFashion
    return (

    <div className='ladiesSection'>
        
        <div className="bannerbox">
      <img src='React_images/Women/banner.png' alt="banner.png"/>
      </div>
      <h2>{title}</h2>
      <div className="ladiesImages">

      <img src={image1} alt= {title}/>
      <img src={image2} alt= {title}/>
     <img src={image3} alt= {title}/>
     <img src={image4} alt= {title}/>
     <img src={image5} alt= {title}/>
     <img src={image6} alt= {title}/>

      </div>
    </div>
  )
}

export default Womenc
