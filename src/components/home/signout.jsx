import React from "react"
import {RiLogoutBoxRLine} from "react-icons/ri"
import {auth, salirSesion} from "../../firebaseConfi";


const Signout = () =>{
    //const auth = getAuth();
    salirSesion(auth).then(() => {
    //alert("Desea cerrar sesión");
}).catch((error) => {
  // An error happened.
});
    //const exit = limpiar secion localStoragesignout del firebaseConfi

    return (
         <div>
            <RiLogoutBoxRLine/> Logout 
            <button onClick={Signout}>Logout</button>
             
            </div>

    )
}

export default Signout;