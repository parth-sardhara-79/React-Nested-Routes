import React from 'react';
import data from './students_data.json';
import { Table, Button } from 'react-bootstrap';
import StudentMarks from './student-marks';
import StudentDetails from './student-details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class ListStudents extends React.Component {
    render() {

        return (<div><BrowserRouter>
            <Table striped bordered hover responsive >
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Standard</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    data.map(u => {
                        return (
                            <tr>
                                <td>{u.first_name}</td>
                                <td>{u.last_name}</td>
                                <td>{u.standard}</td>
                                <td>
                                    <Button id={u.id} variant="success" onClick={() =>
                                        this.props.history.push(`/students-list/${u.id}/student-details`)
                                    }>View Details</Button> | <Button id={u.id} variant="success" onClick={() =>
                                        this.props.history.push(`/students-list/${u.id}/student-marks`)
                                    }>View Marks</Button></td>
                            </tr>
                        )
                    })
                }
            </Table>
            <Switch>
                <Route path="/students-list/:id/student-marks" component={StudentMarks} />
                <Route path="/students-list/:id/student-details" component={StudentDetails} />
            </Switch>
            </BrowserRouter>
        </div>);
    }
}

export default ListStudents;