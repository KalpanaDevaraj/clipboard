import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import PageBase from '../components/PageBase';
import globalStyles from './styles';
import Moment from 'moment';

class EmployeeInsurance extends React.Component {

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
              <PageBase title="Employee Insurance Details "
                        navigation="Employee Insurance Details Page">
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
                    hintText="Insurance Starting Date"
                    floatingLabelText="Insurance Starting Date" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle} 
                    mode="landscape" 
                    fullWidth={true}
                    minDate={this.state.minDate}
                    maxDate={this.state.maxDate}
                    formatDate={this.formatDate}
                    onChange={this.handleChange}
                  />
                  
                  <DatePicker
                    hintText="Insurance Expiry Date"
                    floatingLabelText="Insurance Expiry Date" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle} 
                    mode="landscape" 
                    fullWidth={true}
                    minDate={this.state.minDate}
                    maxDate={this.state.maxDate}
                    formatDate={this.formatDate}
                    onChange={this.handleChange}
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
 
export default EmployeeInsurance;
