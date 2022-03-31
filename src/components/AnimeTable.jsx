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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button variant="outline-secondary" id="button-addon2">
                Details
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default AnimeTable;
