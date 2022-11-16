import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

function CardsCatalogo(props) {
  console.log(props)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`src/img${props.item.fotos.foto1}`} />
      <Card.Body>
        <Card.Title>Novidade {props.item.nome}</Card.Title>
        <Card.Text>
          {props.item.descricao}
        </Card.Text>
        <Link to={"/detail" + props.item.id} className="text-decoration-none" style={{ color: "inherit" }}>
          <Button variant="primary">Acessar Página</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardsCatalogo;