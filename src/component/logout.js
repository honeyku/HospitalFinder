import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

function Logout(){
   const nevigate = useNavigate();

   const onLogoutSuccess=(res)=>{
        console.log("Logout Successfully");
        nevigate('/');
    }

    return(
    <div id="signOutButton">
      <GoogleLogout
      clientId="clientID"
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
      
      />
    </div>
    )

}

export default Logout;