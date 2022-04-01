import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import $anime from "../services/anime";
import AnimeTable from "./AnimeTable";
import AnimeModal from "./AnimeModal";

function App() {
  const [list, setList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getAnimeList = async () => {
    const response = await $anime.getAnime();
    setList(response.data);
    console.log(response.data);
  };

  const onClickDetails = async (malId) => {
    console.log("Ahora debo pedir los datos del anime con id:", malId);
    const anime = await $anime.getAnimeById(malId);
    console.log(anime);
    setSelectedAnime(anime);
    console.log(selectedAnime);
    console.log("cuando tenga los datos del anime abro el modal");
    setShowModal(true);
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
      <AnimeTable onClickDetails={onClickDetails} items={list} />
      {selectedAnime && (
        <AnimeModal
          anime={selectedAnime}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default App;
