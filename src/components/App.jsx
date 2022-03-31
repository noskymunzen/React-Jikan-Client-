import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-5">
        MyAnimeList API Simple Client
      </h1>
      <Container className="d-flex justify-content-center mt-5">
        <InputGroup className="mb-3">
          <FormControl placeholder="Type anime name" />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Container>
    </>
  );
}

export default App;
