import React, {Component, PropTypes} from "react";
import { connect } from 'react-redux'
import Loader from 'react-loader-advanced';
import LeftNav from '../components/LeftNav';
import Header from '../components/Header';

// For Customization Options, edit  or use
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../material_ui_raw_theme_file'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider styles={theme}>
        <div>
          <Loader show={this.props.loading} message={'Loading'}>
          <Header/>
          <LeftNav />
          {this.props.children}
          </Loader>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children : React.PropTypes.element.isRequired,
  loading: React.PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.location.get('loading')
});

export default connect(mapStateToProps)(App)
