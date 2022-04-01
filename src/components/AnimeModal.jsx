import { Modal, Row, Col } from "react-bootstrap";

const AnimeModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.anime.title}</Modal.Title>
        <p className="ml-3">{props.anime.score} ⭐</p>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={6}>
            <img
              height="300px"
              width="200px"
              src={props.anime.images.jpg.image_url}
              alt=""
            />
          </Col>
          <Col xs={6}></Col>
          <Col className="mt-3" xs={12}>
            <p>{props.anime.synopsis}</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AnimeModal;
