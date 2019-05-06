import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './style';

const Header = ({ label, style, arrow, onPress }) =>
    <View style={[styles.headerStyle, style]}>
        <Text style={styles.heading}>{label}</Text>
    </View>;

Header.propTypes = {
    label: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array,PropTypes.any]),
};

export default Header;