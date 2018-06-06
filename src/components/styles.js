import {typography} from 'material-ui/styles';
import {grey600} from 'material-ui/styles/colors';
import {grey400} from 'material-ui/styles/colors';

const styles = {
  navigation: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    color: grey600,
    paddingLeft: 5,
    display: 'block'
  },
  title: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    marginBottom: 20
  },
  paper: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 15,
    background: 'darkgrey',
    marginLeft: '200',
    marginRight: '400',
    height: 'auto',
    width: '750',
  },
  paperHome: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 15,
    background: 'darkgrey',
    marginLeft: '200',
    marginRight: '400',
    marginTop: 30,
    height: 'auto',
    width: '750',
  },

  clear: {
    clear: 'both'
  },

  toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    },
    floatingLabelStyle: {
      color: 'darkGreen'
    },

    labelStyle:{
      marginTop: 10,
      padding: 50
    }

};

export default styles;