import React, { Component } from 'react';
import {  StyleSheet,  View, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import Header from '../common/Header';
import H2 from '../common/Typos/h2';
import H3 from '../common/Typos/h3';
import { getEmployeeList } from '../../actions/employeeData';
import EmployeeData from '../../../data.json';

class EmployeeList extends Component {

  componentDidMount() {
    this.props.getEmployeeList(EmployeeData);
  }
    _keyExtractor = (item, index) => item.id;
    _renderItem = ({item, index}) => (
        <TouchableOpacity
            style={styles.slideRow}
            activeOpacity={1}
            key={index}>
            <View style={{width:'100%'}}>
              <H2>{item.name}</H2>
              <View style={styles.itemList}>
                <View style={styles.top}>
                  <H3>{item.age}</H3>
                  <H3 style={styles.top}>{item.gender}</H3>
                </View>
                <View style={styles.top}>
                  <H3>{item.email}</H3>
                  <H3 style={{paddingTop: 10}}>${item.phoneNo}</H3>
                </View>
            </View>
          </View>
        </TouchableOpacity>
    );
  render() {
    const { List } = this.props;
    console.log(List);
    return (
      <View style={styles.container}>
        <Header label='Employee List' />
        <View style={{top: 10, paddingBottom: 20}}>
              <FlatList
                horizontal={false} 
                data={List.user}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 10
  },
  itemList: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems:'center'
  },
  slideRow: {
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'gray',
    paddingHorizontal: 10,
     paddingBottom: 20,
  },
  view:  {
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.8,
     shadowRadius: 2,
     elevation: 1,
     alignItems:'center',
     justifyContent:'center',
     paddingBottom: 20
  },
});

EmployeeList.propTypes = {
    getEmployeeList: PropTypes.func,
    List: PropTypes.any
}


function mapStateToProps(state, props) {
    return {
        List: state.employeeList
    }
}



export default connect(mapStateToProps, {getEmployeeList})(EmployeeList);