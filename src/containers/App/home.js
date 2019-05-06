import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Platform, AsyncStorage, BackHandler } from 'react-native';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FirstScreen from '../../routes/FirstScreen';
import SecondScreen from '../../routes/SecondScreen';

class App extends React.Component {
	render() {
        return(
        	<Router sceneStyle={{shadowOpacity: 0}}>
        		<Stack key='root' hideNavBar={true} panHandlers={null} swipeEnabled={false}>
        		    <scene key='FirstScreen' component={FirstScreen} initial/>
        			<Scene key='SecondScreen' component={SecondScreen} />
				</Stack>
			</Router>
        );
    }
}


export default App;