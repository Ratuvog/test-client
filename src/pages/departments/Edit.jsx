import React from 'react';
import {connect} from 'react-redux';
import EditForm from '../../components/EditForm';
import {upsertDepartment} from '../../actions/departments';
import TextField from 'material-ui/TextField';
import actionCreator from '../../actions/departments';
import {UPSERT} from '../../constants/actionConstants';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      dep: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({dep: nextProps.department});
  }

  render() {
    if (!this.state.dep && !this.props.params)
      return null;

    let dep = this.state.dep;

    let update = (key, x, value) => {
      this.state.dep[key] = value;
      this.setState({dep: this.state.dep});
    };

    return <EditForm onSave={() => this.props.upsert(dep)}>
      <TextField
        fullWidth={true}
        floatingLabelText="Name"
        value={dep.name}
        onChange={update.bind(this, 'name')}
      />
    </EditForm>;
  }
}

Edit.propTypes = {
  department: React.PropTypes.object,
  upsert: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  department: state.departments.find((dep) => dep.active)
});

const mapDispatchToProps = (dispatch) => ({
  upsert: (department) => dispatch(actionCreator[UPSERT](department))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit)