import React from 'react';
import  "./Home.css";
import Product from "./Product"

function Home() {
    return(
        <div className="home">
            <div className="home__container">
               <img className="home__image" src="https://pocketapp.in/img/blog-img/electronics1.jpg" alt="Poster"/> 
            
            <div className="home__row">
                
                <Product 
                id="12321341"
            title="Apple 13' Macbook Air | M1 chip with 8‑core CPU, 7‑core GPU and 16‑core Neural Engine (8GB RAM,256GB SSD,Retina display) -Gold 2021"
            price={92190}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gallery3-20201110?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1603399121000"
                />
                <Product
            id="12321341"
            title="Whirlpool 292 L 3 Star Inverter Frost-Free Double Door Refrigerator (INTELLIFRESH INV CNV 305 3S, Black Sparkle, Convertible)"
            price={25999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71PpAFGSYyL._SL1500_.jpg"
          />
            </div>
            <div className="home__row">
           
            <Product
            id="4903850"
            title="Noise ColorFit Pro 2 Full Touch Control Smart Watch with Call,Message Alerts,Long Battery Life,trackers(Jet Black)"
            price={2799}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
          />
          <Product
            id="23445930"
            title="Sony HT-S20R 5.1ch Dolby Digital Soundbar Home Theatre System (400W,Bluetooth Connectivity) - Black"
            price={14190}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={70999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        

            </div>
            <div className="home__row">
            <Product
            id="90829332"
            title=" LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={48999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
            </div>
            </div>
        </div>
    )
}
export default Home;