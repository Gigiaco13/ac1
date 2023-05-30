import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Queen of Seduction</Card.Title>
          <Card.Text>
          Queen of Seduction é uma fragrância atraente e sensual inspirada no poder da atração, para uma mulher sofisticada, feminina e com forte personalidade
         
          R$139.90
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/10200708/pexels-photo-10200708.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <Card.Body>
          <Card.Title>Versace Bright Crystal</Card.Title>
          <Card.Text>
          Versace Bright Crystal é uma jóia preciosa e de rara beleza caracterizada por uma essência fresca, e floral.
          R$349.90{' '}
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/12538232/pexels-photo-12538232.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <Card.Body>
          <Card.Title>Boss Napoleon</Card.Title>
          <Card.Text>
          Napoleon Boss For Men é uma fragrância para quem nunca se contenta com menos do que o melhor.
          R$499.00
          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>
  );
}

export default Cards;