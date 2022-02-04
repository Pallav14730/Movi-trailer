import React from 'react';
const time=new Date().getFullYear();
const Footer=()=>{
    return(
      <div className="foot">
      <span>Copyright {time}</span>
      <h2>Made By Pallav</h2>

      </div>

    )
}
export default Footer;