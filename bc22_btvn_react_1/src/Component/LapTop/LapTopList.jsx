import React from 'react'
import LapTop from './LapTop'
 
export default function LapTopList() {
    const laptopList = [
        {
            "img":"https://macbook.haloshop.vn/image/cache/data/products/apple/macbook/macbook-pro-2021-14-inch-chip-m1-space-gray-00-1400x1400.jpg",
            "name": "Macbook",
            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content"

        },
        {
            "img":"https://macbook.haloshop.vn/image/cache/data/products/apple/macbook/macbook-pro-2021-14-inch-chip-m1-space-gray-00-1400x1400.jpg",
            "name": "Macbook",
            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content"

        },
        {
            "img":"https://macbook.haloshop.vn/image/cache/data/products/apple/macbook/macbook-pro-2021-14-inch-chip-m1-space-gray-00-1400x1400.jpg",
            "name": "Macbook",
            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content"

        },
        {
            "img":"https://macbook.haloshop.vn/image/cache/data/products/apple/macbook/macbook-pro-2021-14-inch-chip-m1-space-gray-00-1400x1400.jpg",
            "name": "Macbook",
            "desc": "Some quick example text to build on the card title and make up the bulk of the card's content"

        },
    ]
          
    
  return (
    <>
        <LapTop laptopList = {laptopList} />
        
    </>
  )
}
