import React from 'react'

class StudentMarks extends React.Component{
    
  render() {
    let { id } = this.props.match.params;
      return(<>
        {id}
      </>);
  }
}

export default StudentMarks;