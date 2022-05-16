import React from 'react'
import SmartPhone from './SmartPhone'
 
export default function SmartPhoneList() {
    const phoneList = [
        {
            "img":"https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-x_1_.jpg",
            "name": "Iphone X",
            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content"

        },
        {
            "img":"https://image.cellphones.com.vn/358x/media/catalog/product/_/0/_0005_layer_6.jpg",
            "name": "Iphone 11",
            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content"

        },
        {
            "img":"https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-12-mini-white-select-2020_11.png",
            "name": "Iphone 12",
            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content"

        },
        {
            "img":"https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13_green_pure_back_iphone_13_green_pure_front_2-up_screen__usen_1.png",
            "name": "Iphone 13",
            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content"

        }
    ]
          
    
  return (
    <>
        <SmartPhone phoneList = {phoneList} />
        
    </>
  )
}
