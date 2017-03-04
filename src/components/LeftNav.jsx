import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {cyan500} from 'material-ui/styles/colors';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import {browserHistory} from 'react-router';
import { toggleDrawer } from '../actions/ui';

class LeftNav extends React.Component {
  onChangeList(event, value) {
    browserHistory.push(value);
  }

  render() {
    const SelectableList = makeSelectable(List);
    const styles = {
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan500,
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8
      },
      version: {
        paddingLeft: spacing.desktopGutterLess,
        fontSize: 16
      }
    };
    return (
      <div>
        <Drawer docked={false} open={this.props.drawerIsOpened} onRequestChange={this.props.toggleDrawer}>
          <div style={styles.logo}>Menu</div>
          <SelectableList onChange={this.onChangeList} >
            <ListItem primaryText="Employees" value="/employees" />
            <ListItem primaryText="Departments" value="/departments" />
          </SelectableList>
        </Drawer>
      </div>
    );
  }
}

LeftNav.propTypes = {
  drawerIsOpened: React.PropTypes.bool,
  toggleDrawer: React.PropTypes.func
};

const mapStateToProps = (state) => ({
  drawerIsOpened: state.ui.drawerIsOpened
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);