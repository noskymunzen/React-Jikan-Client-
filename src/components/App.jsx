import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import AnimeTable from "./AnimeTable";

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
      <AnimeTable />
    </>
  );
}

export default App;
