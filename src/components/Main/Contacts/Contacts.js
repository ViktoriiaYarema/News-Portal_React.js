import React from 'react';
import './Contacts.scss';
import Img from '../../../img/contact_photo.png';

const Contacts = () => {
    return (
        <div className="Contacts">
            <div className="Contacts__wrapper">
                <div className="Contacts__info">
                   <p className="Contacts__phone"><a href="tel: +380972590591">+380 97-25-90-591</a></p> 
                    <div className="Contacts__name">
                        <p>Виктория <pre></pre> Ярема</p>
                        
                    </div>
                    <p className="Contacts__mail"><a href="emailto: yarema1815@gmail.com">yarema1815@gmail.com</a></p>
                    <div className="Contacts__skills">
                        <p>JavaScript разработчик</p>
                        <p>ES5, ES6, <span>React</span></p>
                    </div>
                </div>
                <div className="Contacts__img">
                    <img src={Img} alt={"img"}></img>
                </div>
            </div>
        </div>
    )
}

export default Contacts;