import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Form from './form.component';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const pinkStyle = {background:'#fce4ec', color:'#5C5C5C'};

class App extends Component {

  render() {
    return (
      <div>
        <AppBar position="static" style={pinkStyle}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              KimbyArting Giveaway!
            </Typography>
          </Toolbar>
        </AppBar>

        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
