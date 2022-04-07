import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useEffect, useState, useRef } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import $anime from "./services/anime";
import animeImg from "./anime.jpg";
import AnimeTable from "./components/AnimeTable";
import AnimeModal from "./components/AnimeModal";
import Footer from "./components/Footer";

function App() {
  const [list, setList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [input, setInput] = useState("");
  const [animeSearch, setAnimeSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);
  const titleRef = useRef(null);

  const getAnimeList = async () => {
    setLoading(true);
    const response = await $anime.getAnime(animeSearch, page);
    setList(response.data);
    window.scrollTo({ behavior: "smooth", top: titleRef.current.offsetTop });
    setHasNext(response.pagination.has_next_page);
    console.log(response.pagination.has_next_page);
    setLoading(false);
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
    setAnimeSearch(input);
  };

  const handlePrevious = () => {
    setPage(page - 1);
    console.log(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
    console.log(page + 1);
  };

  useEffect(() => {
    getAnimeList();
  }, [page, animeSearch]);

  return (
    <>
      <h1
        ref={titleRef}
        className="d-flex justify-content-center mt-5 mb-3 text-white fw-bold"
      >
        MyAnimeList API Simple Client
      </h1>

      <Container className="d-flex justify-content-center">
        <img className="d-flex justify-content-center" src={animeImg} />
      </Container>

      <Container className="d-flex justify-content-center mt-5">
        <InputGroup size="lg" className="mb-3">
          <FormControl
            value={input}
            type="text"
            placeholder="Type anime name"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="outline-light"
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
      <Container className="d-flex justify-content-center mb-2">
        <Row>
          {page > 1 && (
            <Col>
              <Button
                onClick={handlePrevious}
                variant="btn btn-secondary"
                id="button-addon2"
              >
                Previous
              </Button>
            </Col>
          )}
          {hasNext && (
            <Col>
              <Button
                onClick={handleNext}
                variant="btn btn-secondary"
                id="button-addon2"
              >
                Next
              </Button>
            </Col>
          )}
        </Row>
      </Container>
      <span className="h6 d-flex justify-content-center fw-bold mb-4">
        Page {page}
      </span>

      {selectedAnime && (
        <AnimeModal
          anime={selectedAnime}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
