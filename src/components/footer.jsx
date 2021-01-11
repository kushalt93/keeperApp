import React from "react";
function Footer() {
    var currDate = new Date()
    return(
        <footer>
            <p>Copyright{currDate.getFullYear()}</p>
        </footer>
    );
}

export default Footer