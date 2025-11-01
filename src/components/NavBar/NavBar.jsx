import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
const NavBar = () => {

  const {user, setUser} = useContext(UserContext);
const handleSignOut = () => {
  //clear token from user storage 
  localStorage.removeItem('token');
  // clear the user state 
  setUser(null);
}

  return (
     <nav>
  {user ? (
    <ul>
      <li>welcome, {user.username}</li>
      <li><Link to='/'>Dahboard</Link></li>
      <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
    </ul>
  ): (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/sign-in'>Sign In</Link></li>
      <li><Link to='/sign-up'>Sign Up</Link></li>
    </ul>
  )}
     </nav>
  );
};

export default NavBar;