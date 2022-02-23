import { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import RegisterModal from "./auth/registerModal";
import Logout from "./auth/logout";
import LoginModal from "./auth/loginModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const navLinks = [
    { navlink: "/home", title: "Home", className: "navlink text-white" },
    { navlink: "/lineup", title: "Lineup", className: "navlink" },
    { navlink: "/tickets", title: "Tickets", className: "navlink" },
    { navlink: "/cart", title: "Cart", className: "navlink" },
    { navlink: "/orders", title: "Orders", className: "navlink mr-2" },
    {navlink: "/philosophy", title: "Philosophy", className: "navlink"},
    {navlink: "/faq", title: "F.A.Q", className: "navlink"},
  ];


  const NavListItem = ({ className, navLink, title }) => (
    <Link to={navLink}>
    <NavItem className={className}>
       {title}
     
    </NavItem>
    </Link>
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
          className="navbar navbar-fluid "
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
