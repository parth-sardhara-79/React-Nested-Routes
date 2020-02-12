import React from 'react';
import data from './students_data.json';
import { Table, Button } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import StudentMarks from './student-marks';
import StudentDetails from './student-details';
import PageNotFound from './page-not-found.js';

class ListStudents extends React.Component {

  render() {
    console.log(this.props.match.url);

    return (<div className="studentList">
      <Table bordered responsive>
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
                    onClick={(event) => {
                      this.props.history.push(`/students-list/${u.id}/student-details`)
                      event.target.style.color="red"
                    }}
                  >View Details
                  </Button>
                </td>
                <td className="btnCenter">
                  <Button id={u.id} variant="outline-dark"
                    onClick={(event) =>{
                      this.props.history.push(`/students-list/${u.id}/student-marks`)
                      event.target.style.color="red"
                    }
                    }>View Marks
                  </Button>
                </td>
              </tr>
            )
          })
        }
      </Table>
      <hr />
      {/* <Route path={`${this.props.match.path}/:id/student-marks`} component={StudentMarks} /> */}
      <Switch>
      <Route exact path={`${this.props.match.path}`} render={() => {}}/>  
      <Route path={`${this.props.match.path}student-marks`} component={StudentMarks} />
      <Route path="/students-list/:id/student-details" component={StudentDetails} />
      <Route component={PageNotFound} />
      </Switch>
    </div>);
  }
}
export default ListStudents;