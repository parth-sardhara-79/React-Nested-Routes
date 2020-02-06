import React from 'react';
import data from './students_data.json';
import { Card, Container, Row, Col } from 'react-bootstrap';
class StudentDetails extends React.Component {
 
    render() {

        var { id } = this.props.match.params;
        let student = data.filter(d => {
            if (d.id == id)
                return d
        })
        let { first_name, last_name, DOB, father, mother, email, standard, gender } = student[0];
        return (<div className="mx-auto w-50">
            <Card>
                <Card.Title>
                    Student Details
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
                            <Col>DOB:</Col>
                            <Col>{DOB}</Col>
                        </Row>
                        <Row>
                            <Col>Father:</Col>
                            <Col>{father}</Col>
                        </Row>
                        <Row>
                            <Col>Mother:</Col>
                            <Col>{mother}</Col>
                        </Row>
                        <Row>
                            <Col>Email:</Col>
                            <Col>{email}</Col>
                        </Row>
                        <Row>
                            <Col>Standard:</Col>
                            <Col>{standard}</Col>
                        </Row>
                        <Row>
                            <Col>Gender:</Col>
                            <Col>{gender}</Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>);
    }
}
export default StudentDetails;