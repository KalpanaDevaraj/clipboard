import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import PageBase from '../components/PageBase';
import globalStyles from './styles';
import Moment from 'moment';

class DAPersonalDetails extends React.Component {

constructor(props){
    super(props);
    const minDate = new Date();
    const maxDate = new Date();
    const defaultDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 50);
    minDate.setMonth(0);
    minDate.setDate(1);
    maxDate.setFullYear(maxDate.getFullYear()- 10);
    maxDate.setMonth(11);
    maxDate.setDate(31);
    defaultDate.setFullYear(maxDate.getFullYear()- 20);
    defaultDate.setMonth(11);
    defaultDate.setDate(31);
    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      defaultDate: defaultDate,
      controlledDate:defaultDate
    };
}

formatDate(date) {
      return Moment(date).format('DD/MM/YYYY');
}

handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
};

render() {
    return (
        <MuiThemeProvider>
              <PageBase title="DA Personal Details"
                        navigation="DA Personal Details Form Page">
                <form>
                  <TextField
                    hintText="First Name"
                    floatingLabelText="First Name" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Middle Name"
                    floatingLabelText="Middle Name" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                 <TextField
                    hintText="Last Name"
                    floatingLabelText="Last Name" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <DatePicker
                    hintText="DOB"
                    floatingLabelText="DOB" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle} 
                    mode="landscape" 
                    fullWidth={true}
                    defaultDate={this.state.defaultDate}
                    minDate={this.state.minDate}
                    maxDate={this.state.maxDate}
                    value={this.state.controlledDate}
                    formatDate={this.formatDate}
                    onChange={this.handleChange}
                  />
                  <TextField
                    hintText="Email Address"
                    floatingLabelText="Email Address" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Address Line1"
                    floatingLabelText="Address Line1" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Address Line2"
                    floatingLabelText="Address Line2" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Address Line3"
                    floatingLabelText="Address Line3" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Address Line4"
                    floatingLabelText="Address Line4" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Staff Id"
                    floatingLabelText="Staff Id" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Linked Headoffice"
                    floatingLabelText="Linked Headoffice" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <div style={globalStyles.buttons}>
                    <Link to="/">
                      <RaisedButton label="Cancel"/>
                    </Link>
                    <RaisedButton
                     label="Save"
                     style={globalStyles.saveButton}
                     type="submit"
                     primary={true}/>
                  </div>
                </form>
              </PageBase>
        </MuiThemeProvider>
    );
  }
}
 
export default DAPersonalDetails;
