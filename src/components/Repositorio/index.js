import React from "react"
import {Card, Row, ListGroup, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import {Badge} from "./styles"

const Repo = ({ usuario, repo }) => {
  return(
    <Card>
      <Card.Body>
      {repo && repo.map(item => (
        <ListGroup variant="flush" key={item.name}>
            <ListGroup.Item>
              <Row>
                <Col sm={12} md={6} lg={6} xl={6}>
                    <Link to={`/detalhes/${usuario}/${item.name}`}>
                      <span className="text-white">{item.name}</span>
                    </Link>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6}>
                  <div className="d-flex justify-content-end">
                    <Badge>
                      Starts: {item.stargazers_count}
                    </Badge>
                    <Badge>
                      Watch: {item.watchers_count}
                    </Badge>
                    <Badge>
                      Forks: {item.forks_count}
                    </Badge>     
                  </div>  
                </Col>
              </Row>
            </ListGroup.Item>
        </ListGroup>       
      ))}
      </Card.Body>
    </Card>
  )
}
  
export default Repo;