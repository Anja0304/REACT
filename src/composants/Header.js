import React from "react";
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const Header = () => {
	return (
		<div>
		  <Navbar bg="dark" variant="dark">
		    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-info">Search</Button>
		    </Form>
		  </Navbar>
		  </div>
		);
}
 export default Header;




