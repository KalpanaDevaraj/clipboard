import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ClipBoard from '../public/clipboard.png';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  
  toggleDrawer = () => this.setState({ open: !this.state.open })
  
  render() {
    const img = <img style={{padding:10}} src={ClipBoard} alt="CLIPBOARD"/>
    return (
      <div>
        <AppBar
          title={img}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.toggleDrawer}
        />
        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
        >
        <AppBar title="CLIPBOARD" onLeftIconButtonClick={this.toggleDrawer} />
        <MenuItem
          primaryText="Home"
          containerElement={<Link to="/" />}
          onTouchTap={() => {
          this.toggleDrawer()
          }}
        />
        <MenuItem
          primaryText="DA Personal Details"
          containerElement={<Link to="/DAPersonalDetails" />}
          onTouchTap={() => {
          this.toggleDrawer()
          }}
        />

        <MenuItem
          primaryText="Employee OnBoarding"
          containerElement={<Link to="/EmployeeOnBoarding" />}
          onTouchTap={() => {
          this.toggleDrawer()
          }}
        />

        <MenuItem
          primaryText="Employee OnBoarding Compliance"
          containerElement={<Link to="/EmployeeOnBoardingCompliance" />}
          onTouchTap={() => {
          this.toggleDrawer()
          }}
        />

        <MenuItem
          primaryText="Employee Insurance"
          containerElement={<Link to="/EmployeeInsurance" />}
          onTouchTap={() => {
          this.toggleDrawer()
          }}
        />
         
       
        <MenuItem
          primaryText="Employee Recruitment"
          containerElement={<Link to="/EmployeeRecruitment" />}
          onTouchTap={() => {
          this.toggleDrawer()
          }}
        />
        </Drawer>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
