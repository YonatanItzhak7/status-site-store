import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BarChart } from "../featurs/barchart";
import { PieChart } from "../featurs/piechart";
import { useContext } from "react";
import { productsContext } from "../../context/products-contexts";

function Home() {
 

  return (
    <Container>
      <Row>
        <Col>
          <div className="Card">
            <BarChart />
          </div>
        </Col>
        <Col>
          <div className="Card">
            <PieChart />
          </div>
        </Col>
        <Col>
          <div className="Card">
            <PieChart />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="CardRow2">
            4<PieChart />
          </div>
        </Col>
        <Col className="big">
          <div className="small">
            <div className="circle">388</div>
          </div>
          <div className="small">
            <div className="circle">323</div>
          </div>
          <div className="small">
            <div className="circle">432</div>
          </div>
          <div className="small">
            <div className="circle">324</div>
          </div>
        </Col>
        <Col>
          <div className="CardRow2">6</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Graph">7</div>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <div className="Graph">8</div>
        </Col>
        <Col>
          <Col xs={4}>
            <div className="GraphAndCard">9</div>
          </Col>
          <Col xs={4}>
            <div className="GraphAndCard">10</div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
