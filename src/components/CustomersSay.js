import { Card, Row, Col } from "react-bootstrap";

function CustomersSay() {
  const cardData = [
    {
      title: "John Doe",
      text: "Amazing food and great service! Will definitely come again.",
      text2:"⭐⭐⭐⭐⭐"
    },
    {
      title: "Jane Smith",
      text: "The ambiance was perfect, and the pancaked was the best I've ever had.",
      text2:"⭐⭐⭐⭐⭐"
    },
    {
      title: "Alex Johnson",
      text: "A fantastic dining experience with a great selection of flavors.",
      text2:"⭐⭐⭐⭐⭐"
    },
    {
      title: "Emily Davis",
      text: "Top-notch service and delicious food. Highly recommended!",
      text2:"⭐⭐⭐⭐⭐"
    },
  ];

  return (
    <div className="justify-center bg-orange-400 mb-0" id="ratings">
      <h1 className="p-2 flex justify-center">Our Ratings</h1>
      <div className="flex justify-center p-4">
        <Row xs={1} md={2} className="g-4">
          {cardData.map((card, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Card.Text>{card.text2}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default CustomersSay;
