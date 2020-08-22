import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const NavBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>About Me</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Projects
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>React Directory</DropdownItem>
            <DropdownItem disabled>CPS</DropdownItem>
            <DropdownItem>Lynch Construction</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">Github</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact Me</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
