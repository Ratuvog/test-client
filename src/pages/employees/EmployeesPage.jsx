import React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ImageEdit from 'material-ui/svg-icons/image/edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import actionCreators from '../../actions/employees';
import { REMOVE } from '../../constants/actionConstants';

class EmployeesPage extends React.Component {
  render() {
    let depNames = {};
    this.props.departments.forEach((dep) => depNames[dep.id] = dep.name);
    this.props.data.forEach((emp) => {
      emp.depName = depNames[emp.departmentId] || 'Not found';
    });

    return <div>
      <Link to={`${browserHistory.getCurrentLocation().pathname}/new`}>
        <RaisedButton label="Add new" primary={true} style={{marginLeft: 20}}/>
      </Link>
      <Table allRowsSelected={false} selectable={false}>
        <TableHeader displaySelectAll={false}
                     adjustForCheckbox={false}
                     enableSelectAll={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
            <TableHeaderColumn>Department</TableHeaderColumn>
            <TableHeaderColumn>Action</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.data.map((emp) =>
            <TableRow key={emp.id}>
              <TableRowColumn>{emp.id}</TableRowColumn>
              <TableRowColumn>{emp.firstName}</TableRowColumn>
              <TableRowColumn>{emp.lastName}</TableRowColumn>
              <TableRowColumn>{emp.depName}</TableRowColumn>
              <TableRowColumn>
                <Link to={`/employees/${emp.id}/edit`}>
                  <FloatingActionButton mini={true} style={{marginRight: 5}}>
                    <ImageEdit />
                  </FloatingActionButton>
                </Link>
                <FloatingActionButton mini={true} secondary={true} onClick={() => this.props.remove(emp.id)}>
                  <ActionDelete/>
                </FloatingActionButton>
              </TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  }
}

EmployeesPage.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  departments: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  remove: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  data: state.employees,
  departments: state.departments
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(actionCreators[REMOVE](id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesPage)