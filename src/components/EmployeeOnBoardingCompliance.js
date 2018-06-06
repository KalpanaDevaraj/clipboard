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


class EmployeeOnBoardingCompliance extends React.Component {

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
      open: false,
      workingEligibility: null,
      workPermitDetails:null,
      idvDocument: null
    };
}

formatDate(date) {
      return Moment(date).format('DD/MM/YYYY');
}

handleChange = (event, index, value) => 
  this.setState({workingEligibility:value,open:true});

handleOnChangeWorkPermitDetails = (event, index, value) => 
  this.setState({workPermitDetails:value});

handleOnChangeIDVDetails = (event, index, value) => 
  this.setState({idvDocument:value});

renderInputField() {
    let isOpen = this.state.open && (this.state.workingEligibility !== null && 
                 this.state.workingEligibility !== 'undefined' && this.state.workingEligibility) ;
    if(isOpen) {
      return (<div>
        <TextField
          hintText="Work Eligibility Details"
          floatingLabelText="Work Eligibility Details" 
          floatingLabelStyle={globalStyles.floatingLabelStyle}
          fullWidth={true}
        />
      </div>);
    }
}

renderWorkPermitDetailsInputFieldsIfOtherCountries() {
    let isWorkPermitDetails =this.state.workPermitDetails !== null && 
      this.state.workPermitDetails !== 'undefined' && 
      this.state.workPermitDetails === 'Other Countries';
    if(isWorkPermitDetails) {
      return (<div>
        <TextField
          hintText="Work Permit Capture Details"
          floatingLabelText="Work Permit Capture Details" 
          floatingLabelStyle={globalStyles.floatingLabelStyle}
          fullWidth={true}
        />
      </div>);
    }
}

render() {
    return (
        <MuiThemeProvider>
              <PageBase title="Employee OnBoarding Compliance Details"
                        navigation="Employee OnBoarding Compliance Details Form Page">
                
                <form autoComplete="off">
                  
                  <TextField
                    hintText="ID&V documents"
                    floatingLabelText="ID&V documents" 
                    floatingLabelStyle={globalStyles.floatingLabelStyle}
                    fullWidth={true}
                  />
                  
                  <SelectField
                      floatingLabelText="Working Eligibility"
                      value={this.state.workingEligibility}
                      onChange={this.handleChange}
                      fullWidth={true}
                      floatingLabelStyle={globalStyles.floatingLabelStyle}
                    >
                    <MenuItem value={false} primaryText="No" />
                    <MenuItem value={true} primaryText="Yes" />
                  </SelectField>
                  
                  {this.renderInputField()}

                  <SelectField
                      floatingLabelText="Work Permit Details"
                      value={this.state.workPermitDetails}
                      onChange={this.handleOnChangeWorkPermitDetails}
                      fullWidth={true}
                      floatingLabelStyle={globalStyles.floatingLabelStyle}>
                    <MenuItem value={"Europe"} primaryText="Europe" />
                    <MenuItem value={"Other Countries"} primaryText="Other Countries" />
                  </SelectField>

                  {this.renderWorkPermitDetailsInputFieldsIfOtherCountries()}
                 
                  <SelectField
                      floatingLabelText="IDV"
                      value={this.state.idvDocument}
                      onChange={this.handleOnChangeIDVDetails}
                      fullWidth={true}
                      floatingLabelStyle={globalStyles.floatingLabelStyle}>
                    <MenuItem value={"License"}  primaryText="License" />
                    <MenuItem value={"Passport"} primaryText="Passport" />
                  </SelectField>


                  <DatePicker
                    hintText="GIT Renewal date"
                    floatingLabelText="GIT Renewal date" 
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
                    hintText="PL Renewal Date"
                    floatingLabelText="PL Renewal date" 
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
                    hintText="VI Renewal Date"
                    floatingLabelText="VI Renewal Date" 
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
 
export default EmployeeOnBoardingCompliance;
