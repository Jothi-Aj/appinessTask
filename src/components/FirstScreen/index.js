
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import H1 from '../common/Typos/h1';
import TextInput from '../common/FormElements/TextBox';
import Button from '../common/FormElements/Button';
import { styles } from './styles';
import { config } from '../../theme/config';
import validateLoginScreen from '../common/validation';

class FirstScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick() {
    if (this.isValid()) {
      this.setState({errors:{}});
      Actions.SecondScreen();
    }
  }
  isValid() {
    const { errors, isValid } = validateLoginScreen(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  render() {
    const { email, password, errors } = this.state;
    return (
      <View style={styles.container}>
          <View style={styles.formContainer}>
            <H1 style={{paddingBottom:49}}>Log In</H1>
            <TextInput 
              label='Email' 
              name='email'
              value={email}
              error={errors.email}
              returnType='done'
              onChange={(e)=>this.setState({email:e.toLowerCase()})} />
            <TextInput 
              label='Password' 
              name='password'
              value={password}
              secureTextEntry={true}
              error={errors.password}
              lastchild
              visibleIcon
              onChange={(value) => this.setState({password: value.toLowerCase()})} />
              <Button onPress={this.buttonClick} uppercase bgColor={config.linkColor} width='100%' label='SIGN IN' shadow bigButton/>
          </View>
      </View>
    );
  }
}

export default FirstScreen;
