import React from "react"
var copyYear= new Date().getFullYear();
function Footer(props){
    return(
        <div className="footer">
         <p>CopyRights C {copyYear}</p>   
        </div>
    );
}
export default Footer;
