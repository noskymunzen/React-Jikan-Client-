import {
  Modal,
  Row,
  Col,
  Badge,
  Accordion,
  Container,
  Carousel,
} from "react-bootstrap";

const AnimeModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header className="bg-light" closeButton>
        <Modal.Title>{props.anime.title}</Modal.Title>
        <span className="fw-bold m-3">{props.anime.score}⭐</span>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="mb-3" xs={6}>
            <img
              height="300px"
              width="200px"
              src={props.anime.images.jpg.image_url}
              alt=""
            />
          </Col>

          <Container className="bg-light">
            <Row>
              <Col sm={2} className="mb-2">
                <span>Year:</span>
              </Col>
              <Col sm={10}>
                <Badge bg="warning">{props.anime.year || "-"}</Badge>
              </Col>
            </Row>

            <Row>
              <Col sm={2} className="mb-2">
                <span>Episodes:</span>
              </Col>
              <Col sm={10}>
                <Badge bg="danger">{props.anime.episodes || "-"}</Badge>
              </Col>
            </Row>

            <Row>
              <Col sm={2} className="mb-2">
                <span>Genres:</span>
              </Col>
              <Col sm={10}>
                {props.anime.genres.map((genre) => (
                  <Badge bg="info" key={genre.mal_id}>
                    {genre.name}
                  </Badge>
                ))}
              </Col>
            </Row>

            <Row>
              {props.anime.trailer.url && (
                <>
                  <Col sm={2}>
                    <span>Trailer:</span>
                  </Col>
                  <Col sm={10}>
                    <a href={props.anime.trailer.url}>Ver</a>
                  </Col>
                </>
              )}
            </Row>
          </Container>

          <Accordion className="mt-3" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Synopsis</Accordion.Header>
              <Accordion.Body>
                <Col>
                  <p className="fst-italic">{props.anime.synopsis}</p>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AnimeModal;
