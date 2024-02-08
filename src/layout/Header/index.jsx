import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import './header.css';
import brandLogo from '../../assets/brand.png';
const Header = () => {
  const navLinks = ['Articles', 'Bookmarks', 'Companies', 'Projects'];
  return (
    <div className="header-block">
      <img src={brandLogo} alt="brandLogo" className="header-logo" />

      <div className="header-nav-bar">
        {navLinks.map((item, index) => (
          <p className="header-nav" key={index}>
            {item}
          </p>
        ))}
      </div>
      <FaRegUserCircle  size={34} color='#fff' style={{marginRight:'16px'}}/>
    </div>
  );
};

export default Header;
// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';

// function Example(args) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar expand="false" color="primary" dark="true">
//         <NavbarBrand href="/">
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={true} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;
