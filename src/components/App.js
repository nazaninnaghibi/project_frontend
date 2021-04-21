import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/App.css";
import Auth from '../components/Authentication/Auth';
import Profile from "../components/auth/profile";
import AuthService from "../services/auth.service";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Reviews from '../components/reviews/Reviews';
import Navbar from '../components/Navbar/Navbar';
import Navigation from './Navigation';
import Home from "../components/home/Home";
import BoardUser from "../components/auth/board-user";
import BoardModerator from "../components/auth/board-moderator";
import BoardAdmin from "../components/auth/board-admin";
import AboutUs from "../components/about/AboutUs";
import ContactUs from "../components/contact/ContactUs";
import FAQ from "../components/faq/FAQ";
import HotelReservation from "../components/hotelreservation/HotelReservation";
import Flyreservation from "../components/flyreservation/Flyreservation";
import contactUsAdmin from "../components/contact/ContactUsAdmin";
import ContactUsAdmin from "../components/contact/ContactUsAdmin";
import Adminfaq from "../components/faq/Adminfaq";
// import Brand from "./components/brand/Brand";
import UserManagement from "../components/admin/UserManagement";
import EditUserComponent from "../components/admin/EditUserComponent";
import AddUserComponent from "../components/admin/AddUserComponent";
import User from "../components/dashbord/admin/user/User";
import CityAdmin from "../components/dashbord/admin/city/CityAdmin";
import Test from "../components/dashbord/admin/city/Test";
import History from "../components/user/History";


class App extends Component {

  render() {

    return (
     
      <div>
        <BrowserRouter>
        <Navigation/>
        <Container maxWidth="lg">   
          <Navbar />
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contactUs" component={ContactUs} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/fly" component={Flyreservation} />
            <Route exact path="/hotel" component={HotelReservation} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/contactUsAdmin" component={ContactUsAdmin} />
            <Route exact path="/adminFaq" component={Adminfaq} />
            <Route exact path="/userManagement" component={UserManagement} />
            <Route exact path="/edit-user" component={EditUserComponent} />
            <Route exact path="/add-user" component={AddUserComponent} />
            <Route exact path="/users" component={User} />
            <Route exact path="/cities" component={CityAdmin} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/history" component={History} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route exact path="/review" component={Reviews} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
        </BrowserRouter>
        </div>
    
    );
  }
}

export default App;