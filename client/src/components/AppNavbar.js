import { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";
import RegisterModal from "./auth/registerModal";
import Logout from "./auth/logout";
import LoginModal from "./auth/loginModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assests/logox2.png";
import "./AppNavbar.scss";
import LineUp from "./Lineup";
import Home from './Home'
import Philosophy from "./Philosophy";


const navLinks = [
    { navlink: "/home", title: "Home", className: "navlink" },
    { navlink: "/lineup", title: "Lineup", className: "navlink" },
    { navlink: "/tickets", title: "Tickets", className: "navlink" },
    { navlink: "/cart", title: "Cart", className: "navlink" },
    { navlink: "/orders", title: "Orders", className: "navlink mr-2" },
    {navlink: "/philosophy", title: "Philosophy", className: "navlink"}
  ];


  const NavListItem = ({ className, navLink, title }) => (
    <NavItem className={className}>
      <Link to={navLink}>
       {title}
      </Link>
    </NavItem>
  );
class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };


  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
         { navLinks.map((link, key)=>
          <NavListItem key={key} className={link.className} navLink={link.navlink} title={link.title} />
          )}
     
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar
          dark
          expand="sm"
          className="navbar navbar"
        >
          <Container>
            <NavbarBrand className="brand" href="/home">
              MUSICVERSE
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" color="white" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
