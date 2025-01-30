import React from 'react';
import "./DescriptionBox.css"

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="desctiptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (999+)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>CricKart is a well-rounded eCommerce platform for cricket gear, offering a wide array of products with detailed information to help customers make informed choices. With a few tweaks to enhance speed, usability, and support, CricKart could further solidify its position as a go-to resource for professional cricket equipments.</p>
                
            </div>
        </div>
    );
}

export default DescriptionBox;
