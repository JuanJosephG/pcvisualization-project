import { Container, Col, Row, Navbar } from "react-bootstrap";
import ChartWrapper from "../charts/chartWrapper";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

class App extends React.Component {
    state = {
      cluster: "kmeans"
    };

    onSelectCluster = cluster => this.setState({ cluster });
    render() {
      return (
        <div className="App">
          <Navbar bg="light">
            <Navbar.Brand>Proyecto de Consumo Energético en la Ciudad de Guayaquil</Navbar.Brand>
          </Navbar>
          <Container>
            <Row>
              <Col xs={12}>
                <br />
                <h2>Select your Cluster</h2>
                <label>
                  <input
                    type="radio"
                    name="cluster"
                    value="kmeans"
                    onClick={() => this.onSelectCluster("kmeans")}
                  />{" "}
                  K-MEANS
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="cluster"
                    value="dbscan"
                    onClick={() => this.onSelectCluster("dbscan")}
                  />{" "}
                  DBSCAN
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="cluster"
                    value="kmediods"
                    onClick={() => this.onSelectCluster("kmediods")}
                  />{" "}
                  K-MEDIODS
                </label>
                <br />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ChartWrapper cluster={this.state.cluster} />
              </Col>
            </Row>
          </Container>
        </div>
    )
    }

}

export default App