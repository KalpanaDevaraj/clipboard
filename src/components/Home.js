import React from 'react';
import Paper from 'material-ui/Paper';
import globalStyles from './styles';

export default () => (

<div>
<span style={globalStyles.navigation}></span>
<Paper style={globalStyles.paperHome}>
<h1 style={{ textAlign: 'center'}}>Welcome to CLIPBOARD</h1>
<p style={{textAlign: 'justify', margin: '0px 20px'}}> 
The objective of this new software application is to enable NGC Logistic employees to record, store and query any recruitment information in an agnostic manner. 
Currently NGC Logistics self-employed contractors several hundred drivers who carry out any type of delivery jobs for them, and as the company scales it has become difficult both logistically and manually to capture essential, fundamental information about the:
</p>
<br />
<p style={{textAlign: 'justify', margin: '0px 20px'}}> 
• Recruitment Leads – Received from recruitment portals (Indeed, Reed, etc..)
<br />
• Lead to workforce conversion rates – Successful candidates after the screenings 
<br />
• Logistics Site level workforce growth
<br />
• Self-employed contractor’s details
<br />
• Onboarding information – KYC details, DVLA checks etc
<br />
• Document Compliance check – DVLA, Insurance documents, Passport, Work permit
<br />
• External Recruits information 
</p>
<br />
<p style={{textAlign: 'justify', margin: '0px 20px'}}>
Open the Drawer and click on links to see them in action.
</p>
<br />
</Paper>
</div>
)
