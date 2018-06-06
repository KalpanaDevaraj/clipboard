import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import PageBase from '../components/PageBase';
import globalStyles from './styles';
import Moment from 'moment';

class EmployeeOnBoarding extends React.Component {

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
              <PageBase title="Employee OnBoarding Details"
                        navigation="Employee OnBoarding Details Page">
                <form>
                  <TextField
                    hintText="Organisational Unit"
                    floatingLabelText="Organisational Unit" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <DatePicker
                    hintText="Commencement Date"
                    floatingLabelText="Commencement Date" 
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

                  <DatePicker
                    hintText="Onboarding Date"
                    floatingLabelText="Onboarding Date" 
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

                  <DatePicker
                    hintText="Probation Period EndDate"
                    floatingLabelText="Probation Period EndDate" 
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

                  <DatePicker
                    hintText="End-date"
                    floatingLabelText="End-date" 
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
                    hintText="EndDate Notes"
                    floatingLabelText="EndDate Notes" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                    multiLine={true}
                    id="multiline-flexible"
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
 
export default EmployeeOnBoarding;
