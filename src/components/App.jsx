import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import $anime from "../services/anime";
import AnimeTable from "./AnimeTable";

function App() {
  const [list, setList] = useState([]);

  const getAnimeList = async () => {
    const response = await $anime.getAnime();
    setList(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getAnimeList();
  }, []);

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
      <AnimeTable items={list} />
    </>
  );
}

export default App;
