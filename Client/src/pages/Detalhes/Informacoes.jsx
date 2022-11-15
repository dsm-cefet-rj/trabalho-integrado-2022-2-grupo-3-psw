import Accordion from 'react-bootstrap/Accordion';

function BasicExample({medidas, material, fabricante}) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Detalhes</Accordion.Header>
        <Accordion.Body>
          <p>{medidas}</p>
          <p>{material}</p>
          <p>{fabricante}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;