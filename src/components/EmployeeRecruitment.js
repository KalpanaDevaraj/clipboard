import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import PageBase from '../components/PageBase';
import globalStyles from './styles';
import Moment from 'moment';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class EmployeeRecruitment extends React.Component {

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
      controlledDate:defaultDate,
      accepted:null
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

handleChangeForAccepted = (event, index, value) => 
  this.setState({accepted:value});

render() {
    return (
        <MuiThemeProvider>
              <PageBase title="Employee Recruitment Details"
                        navigation="Employee Recruitment Form Page">
                <form>
                  <TextField
                    hintText="Hiring Manager"
                    floatingLabelText="Hiring Manager" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <DatePicker
                    hintText="Interview date"
                    floatingLabelText="Interview date" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle} 
                    mode="landscape" 
                    fullWidth={true}
                    onChange={this.handleChange}
                  />

                  <DatePicker
                    hintText="Interview End Date"
                    floatingLabelText="Interview End Date" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle} 
                    mode="landscape" 
                    fullWidth={true}
                    onChange={this.handleChange}
                  />

                  <TextField
                    hintText="Interview Lead"
                    floatingLabelText="Interview Lead" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Vacancy Location"
                    floatingLabelText="Vacancy Location" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  <SelectField
                      floatingLabelText="Accepted"
                      value={this.state.accepted}
                      onChange={this.handleChangeForAccepted}
                      fullWidth={true}
                      floatingLabelStyle={globalStyles.floatingLabelStyle}
                    >
                    <MenuItem value={false} primaryText="No" />
                    <MenuItem value={true} primaryText="Yes" />
                  </SelectField>

                <DatePicker
                    hintText="Position Start date"
                    floatingLabelText="Position Start date" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle} 
                    mode="landscape" 
                    fullWidth={true}
                    onChange={this.handleChange}
                  />

                  <DatePicker
                    hintText="Position End date"
                    floatingLabelText="Position End date" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle} 
                    mode="landscape" 
                    fullWidth={true}
                    onChange={this.handleChange}
                  />
                  <TextField
                    hintText="Notes"
                    floatingLabelText="Notes" 
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
 
export default EmployeeRecruitment;
