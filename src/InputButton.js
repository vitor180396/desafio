// InputButton.js

import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight
} from 'react-native';

import styles from './styles.js';

export default class InputButton extends Component {
    
    render() {
        return (
            <TouchableHighlight style={[styles.inputButton, this.props.highlight ? styles.inputButtonHighlighted : null]}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={styles.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
    
}