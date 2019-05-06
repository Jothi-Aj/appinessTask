import React, { Component } from 'react';
import { StyleSheet, View, NetInfo, BackHandler, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import Main from './home';

class Home extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (
			<View style={{flex:1}}>
				<Main />
			</View>
		);
	}
}

export default Home;