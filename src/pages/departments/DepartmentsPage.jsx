import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ImageEdit from 'material-ui/svg-icons/image/edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import actionCreators from '../../actions/departments';
import { REMOVE } from '../../constants/actionConstants';

class DepartmentsPage extends React.Component {
  render() {
    return <div>
      <Link to={`departments/new`}>
        <RaisedButton label="Add new" primary={true} style={{marginLeft: 20}}/>
      </Link>
      <Table allRowsSelected={false} selectable={false}>
        <TableHeader displaySelectAll={false}
                     adjustForCheckbox={false}
                     enableSelectAll={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Action</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.data.map((dep) =>
            <TableRow key={dep.id}>
              <TableRowColumn>{dep.id}</TableRowColumn>
              <TableRowColumn>{dep.name}</TableRowColumn>
              <TableRowColumn>
                <Link to={`/departments/${dep.id}/edit`}>
                  <FloatingActionButton mini={true} style={{marginRight: 5}}>
                    <ImageEdit />
                  </FloatingActionButton>
                </Link>
                <FloatingActionButton mini={true} secondary={true} onClick={() => this.props.remove(dep.id)}>
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

DepartmentsPage.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  remove: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  data: state.departments
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(actionCreators[REMOVE](id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsPage)