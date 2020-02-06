import React from 'react'
import data from './students_data.json';
import { Card, Container, Row, Col } from 'react-bootstrap';

class StudentMarks extends React.Component{
    
  render() {

    var { id } = this.props.match.params;
    let student = data.filter(d => {
        if (d.id == id)
            return d
    })
    let { first_name, last_name,maths, science, history, english  } = student[0];
    return (<div className="mx-auto w-50">
        <Card>
            <Card.Title>
                Student Marks
            </Card.Title>
            <hr />
            <Card.Body>
                <Container>
                    <Row>
                        <Col>First Name: </Col>
                        <Col>{first_name}</Col>
                    </Row>
                    <Row>
                        <Col>Last Name: </Col>
                        <Col>{last_name}</Col>
                    </Row>
                    <Row>
                        <Col>Maths:</Col>
                        <Col>{maths}</Col>
                    </Row>
                    <Row>
                        <Col>Science:</Col>
                        <Col>{science}</Col>
                    </Row>
                    <Row>
                        <Col>History:</Col>
                        <Col>{history}</Col>
                    </Row>
                    <Row>
                        <Col>English:</Col>
                        <Col>{english}</Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    </div>);
  }
}

export default StudentMarks;