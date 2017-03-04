import React from 'react';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    padding: 20
  }
};

export default class EditForm extends React.Component {
  render() {
    return (<div style={styles.root}>
      <RaisedButton label="Back" onTouchTap={() => browserHistory.goBack()}/>
      <RaisedButton label="Save" primary={true} onTouchTap={() => this.props.onSave()}/>
      {this.props.children}
    </div>);
  }
}
