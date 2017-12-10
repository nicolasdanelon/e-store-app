import React from 'react';
import { Route } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Link = ({ to, children }) => (
  <Route
    children={history => React.cloneElement(children, {
      href: to,
      onClick: e => {
        e.preventDefault();
        history.history.push(to);
      }
    })}
  />
);

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <NavItem eventKey={1}>E-shop!</NavItem>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <Link to="/add">
          <NavItem eventKey={2}>Add</NavItem>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;