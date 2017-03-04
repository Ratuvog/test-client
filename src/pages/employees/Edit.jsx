import React from 'react';
import {connect} from 'react-redux';
import EditForm from '../../components/EditForm';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import actionCreator from '../../actions/employees';
import { UPSERT } from '../../constants/actionConstants';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      emp: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({emp: nextProps.employee || {}});
  }

  render() {
    if (!this.state.emp && !this.props.params)
      return null;

    let emp = this.state.emp;

    let update = (key, x, value) => {
      this.state.emp[key] = value;
      this.setState({emp: this.state.emp});
    };

    return (<EditForm onSave={() => this.props.upsert(emp)}>
      <TextField
        fullWidth={true}
        floatingLabelText="First Name"
        value={emp.firstName}
        onChange={update.bind(this, 'firstName')}
      />

      <TextField
        fullWidth={true}
        floatingLabelText="Last Name"
        value={emp.lastName}
        onChange={update.bind(this, 'lastName')}
      />

      <SelectField
        fullWidth={true}
        floatingLabelText="Department"
        value={emp.departmentId}
        onChange={(event, index, value) => {
          this.state.emp.departmentId = value;
          this.setState({emp: this.state.emp});
        }}
      >
        {this.props.departments.map((dep, i) => {
          return (<MenuItem key={i} value={dep.id} primaryText={dep.name}/>);
        })}
      </SelectField>
    </EditForm>);
  }
}

Edit.propTypes = {
  employee: React.PropTypes.object,
  departments: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  upsert: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  employee: state.employees.find((emp) => emp.active),
  departments: state.departments
});

const mapDispatchToProps = (dispatch) => ({
  upsert: (employee) => dispatch(actionCreator[UPSERT](employee))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit)