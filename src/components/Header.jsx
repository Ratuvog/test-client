import React, {PropTypes, Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {toggleDrawer} from '../actions/ui';
import {connect} from 'react-redux';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  render() {
    return (
      <header className="header">
        <AppBar onLeftIconButtonTouchTap={this.props.toggle}/>
        <h1 style={defaultStyle}>{this.props.title}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  toggle: React.PropTypes.func,
  title: React.PropTypes.string
};

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleDrawer())
});

const mapStateToProps = (state) => ({
  title: state.ui.pageTitle
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);