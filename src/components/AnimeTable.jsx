import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const AnimeTable = (props) => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Table striped bordered variant="white">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.loading && !props.items.length && <tr> No items found </tr>}
          {props.items.map((item) => (
            <tr key={item.mal_id}>
              <td>{item.mal_id}</td>
              <td>{item.title}</td>
              <td>{item.score}</td>
              <td>
                <Button
                  onClick={() => props.onClickDetails(item.mal_id)}
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default AnimeTable;
