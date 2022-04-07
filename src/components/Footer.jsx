import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="mb-5">
        <Row>
          <Row className="h5 fw-bold text-white mb-3">Contact</Row>
          <Row className="mt-3">
            <Col>
              <a className="text-white" href="https://github.com/noskymunzen">
                GitHub
              </a>
            </Col>
            <Col>
              <a
                className="text-white"
                href="https://www.linkedin.com/in/ninoska-m%C3%BCnzenmayer-52a6a11a7/"
              >
                LinkedIn
              </a>
            </Col>
            <Col>
              <a className="text-white" href="mailto: nmunzenmayer7@gmail.com">
                Send Email
              </a>
            </Col>
            <Col className="h6 fw-bold text-white text-uppercase mt-3">
              © noskymunzen 2022
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
