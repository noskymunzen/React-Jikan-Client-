import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import $anime from "../services/anime";
import AnimeTable from "./AnimeTable";
import AnimeModal from "./AnimeModal";

function App() {
  const [list, setList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animeSearch, setAnimeSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAnimeList = async () => {
    const response = await $anime.getAnime(animeSearch, page);
    setList(response.data);
    setHasNext(response.pagination.has_next_page);
    setLoading(true);
    console.log(response.data);
  };

  const onClickDetails = async (malId) => {
    const anime = await $anime.getAnimeById(malId);
    console.log(anime);
    setSelectedAnime(anime);
    setShowModal(true);
  };

  const onClickSearch = async () => {
    setPage(1);
    getAnimeList();
  };

  const handlePrevious = () => {
    setPage(page - 1);
    getAnimeList();
  };

  const handleNext = () => {
    setPage(page + 1);
    getAnimeList();
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
          <FormControl
            type="text"
            placeholder="Type anime name"
            onChange={(e) => setAnimeSearch(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={onClickSearch}
          >
            Search
          </Button>
        </InputGroup>
      </Container>

      <AnimeTable
        onClickDetails={onClickDetails}
        items={list}
        loading={loading}
      />

      <Container className="d-flex justify-content-center mb-5">
        {page > 1 && (
          <Button
            onClick={handlePrevious}
            variant="outline-secondary"
            id="button-addon2"
          >
            Previous
          </Button>
        )}
        {hasNext && (
          <Button
            onClick={handleNext}
            variant="outline-secondary"
            id="button-addon2"
          >
            Next
          </Button>
        )}
      </Container>
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
