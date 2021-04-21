import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from "../services/auth.service";



class Navigation extends Component{

  constructor(props) {
    super(props);
    // this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: true,
      showAdminBoard: true,
      currentUser: undefined,
      profile: undefined,
      about: undefined,
      contactUs: undefined,
      faq: undefined,
      flyReservation: undefined,
      hotelReservation: undefined,
      history: undefined,
      contactUsAdmin: true,
      adminFaq: true,
      userManagement: true,
      editUserComponent: true,
      addUserComponent: true,
      users: true,
      cities: true,
      test: undefined,
    };
  }

  // componentDidMount() {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     this.setState({
  //       currentUser: user,
  //       about: user,
  //       contactUs: user,
  //       faq: user,
  //       flyReservation: user,
  //       hotelReservation: user,
  //       history: user,
  //       profile: user,
  //       test: user,
  //       showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
  //       showAdminBoard: user.roles.includes("ROLE_ADMIN"),
  //       contactUsAdmin: user.roles.includes("ROLE_ADMIN"),
  //       adminFaq: user.roles.includes("ROLE_ADMIN"),
  //       userManagement: user.roles.includes("ROLE_ADMIN"),
  //       editUserComponent: user.roles.includes("ROLE_ADMIN"),
  //       addUserComponent: user.roles.includes("ROLE_ADMIN"),
  //       cities: user.roles.includes("ROLE_ADMIN"),
  //     });
  //   }
  // }

  // logOut() {
  //   AuthService.logout();
  // }


  render() {
  const { editUserComponent, addUserComponent, currentUser, showModeratorBoard, showAdminBoard , about, contactUs,
    faq, flyReservation, hotelReservation, profile, contactUsAdmin, adminFaq, userManagement, cities, history} = this.state;

  return (
    <nav className="navBar">
      <ul>

            <li className="nav-item">
              <NavLink to={"/home"} className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={"/review"} className="nav-link">
                Reviews
              </NavLink>
            </li>


            {/* {about && ( */}
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link">
                  About
                </NavLink>
              </li>
            {/* )} */}

            {/* {about && ( */}
              <li className="nav-item">
                <NavLink to={"/contactUs"} className="nav-link">
                  ContactUs
                </NavLink>
              </li>
            {/* )} */}

            {/* {about && ( */}
              <li className="nav-item">
                <NavLink to={"/faq"} className="nav-link">
                  Faq
                </NavLink>
              </li>
            {/* )} */}

            {/* {about && ( */}
              <li className="nav-item">
                <NavLink to={"/fly"} className="nav-link">
                  Flight
                </NavLink>
              </li>
            {/* )} */}

            {/* {about && ( */}
              <li className="nav-item">
                <NavLink to={"/hotel"} className="nav-link">
                  Hotel
                </NavLink>
              </li>
            {/* )} */}

            {/* {about && ( */}
              <li className="nav-item">
                <NavLink to={"/history"} className="nav-link">
                  History
                </NavLink>
              </li>
            {/* )} */}


            {/* {contactUsAdmin && (
              <li className="nav-item">
                <NavLink to={"/contactUsAdmin"} className="nav-link">
                  ContactUs Admin
                </NavLink>
              </li>
            )}

            {adminFaq && (
              <li className="nav-item">
                <NavLink to={"/adminFaq"} className="nav-link">
                   Faq Admin
                </NavLink>
              </li>
            )}


            {editUserComponent && (
              <li className="nav-item">
                <NavLink to={"/editUserComponent"} className="nav-link">
                  Edit User
                </NavLink>
              </li>
            )}

            {addUserComponent && (
              <li className="nav-item">
                <NavLink to={"/addUserComponent"} className="nav-link">
                  Add User
                </NavLink>
              </li>
            )}

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to={"/profile"} className="nav-link">
                  {currentUser}
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div> 
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/register"} className="nav-link">
                  Sign Up
                </NavLink>
              </li>
            </div>
           )}  */}
        </ul>
      </nav>

  );
};
}


export default Navigation;
