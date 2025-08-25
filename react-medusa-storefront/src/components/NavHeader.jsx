import {Badge, Container, Nav, Navbar} from "react-bootstrap";

export default function NavHeader(){
    const cartCount = localStorage.getItem("cartCount") ?? 0;
    return (
       <Navbar bg="dark" variant="dark">
           <Container fluid>
               <Nav className="w-25 d-flex align-items-center justify-content-between">
                  <span className="text-light fw-bold" style={{fontSize: '24px'}}>
                      folly
                  </span>
                   <Navbar.Text className="text-light fw-bold">
                       <Link className="text-decoration-none" to="/">Товары</Link>
                   </Navbar.Text>
               </Nav>
               <Nav>
                   <Navbar.Text className="text-light fw-bold">
                       Cart
                       <Badge bg="success" className="ms-2">{cartCount}</Badge>
                       <span className="visually-hidden">{cartCount} товаров в корзине</span>
                   </Navbar.Text>
               </Nav>
           </Container>
       </Navbar>
    )
}