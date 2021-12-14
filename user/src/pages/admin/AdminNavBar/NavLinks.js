import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';
const NavLinks = (props) => {

    const user = JSON.parse(localStorage.getItem('current user'));

    function logout() {
        localStorage.removeItem('current user')
        window.location.href = '/login'
    }
    return (
        <div className={classes.NavBar}>

            <nav>

                <ul>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/admin/home">Home Admin</Link></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/admin/all-services">Services</Link></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/admin/item-list">Parts/Supplies</Link></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/admin/mechanic-list">Mechanics</Link></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/admin/all-booking">View Bookings</Link></li>
                    <li> {user ? (<><div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-user" aria-hidden="true"></i>  {user.name}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <a className="dropdown-item" href="#" onClick={logout}>Logout</a>
                        </div>
                    </div></>) : (<>
                        <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/login">Login</a></li>
                        <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/register">Register</a></li>
                    </>)}</li>

                </ul>
            </nav>

        </div>
    );
}

export default NavLinks;