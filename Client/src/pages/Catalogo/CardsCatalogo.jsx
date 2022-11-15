import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardsCatalogo({titulo, desc, imagem}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">Acessar Página</Button>
      </Card.Body>
    </Card>
  );
}

export default CardsCatalogo;