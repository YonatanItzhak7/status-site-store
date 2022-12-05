import Card from 'react-bootstrap/Card';

function CoffieeCard() {
  return (
    <Card style={{ width: '12vw'}}>
      <Card.Img variant="top" src="coffiee.png" />
      <Card.Body>
        <Card.Text>
          Numbers Of Orders : 300,897,78
        </Card.Text>
        <Card.Text>
          Income,Percentage : 78%
        </Card.Text>
        <Card.Text>
          Total Profit : 785,878,89$
        </Card.Text>
        <Card.Link href="#">View Full Report</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CoffieeCard;