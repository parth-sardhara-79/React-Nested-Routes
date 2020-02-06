import React from 'react';
import data from './students_data.json';
import { Table, Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import StudentMarks from './student-marks';
import StudentDetails from './student-details';
import PageNotFound from './page-not-found';
class ListStudents extends React.Component {
    render() {

        return (
            <div className="studentList">
                <Table  bordered responsive>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Standard</th>
                            <th>Gender</th>
                            <th colSpan="2" className="btnCenter">Action</th>
                        </tr>
                    </thead>
                    {
                        data.map(u => {
                            return (
                                <tr>
                                    <td>{u.first_name}</td>
                                    <td>{u.last_name}</td>
                                    <td>{u.standard}</td>
                                    <td>{u.gender}</td>
                                    <td className="btnCenter">
                                        <Button id={u.id} variant="outline-dark"
                                            onClick={() =>
                                                this.props.history.push(`/students-list/${u.id}/student-details`)
                                            }>View Details
                                        </Button>
                                    </td>
                                    <td className="btnCenter">
                                        <Button id={u.id} variant="outline-dark"
                                            onClick={() =>
                                                this.props.history.push(`/students-list/${u.id}/student-marks`)
                                            }>View Marks
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </Table>
                <hr />
                <Route  path="/students-list/:id/student-marks" component={StudentMarks} />
                <Route  path="/students-list/:id/student-details" component={StudentDetails} />
                <Route path="*" component={PageNotFound}/>
            </div>);
    }
}

export default ListStudents;