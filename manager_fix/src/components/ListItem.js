import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { name } = this.props.employee;

        return (
            <CardSection>
                <Text style={style.titleStyle}>
                    {name}
                </Text>
            </CardSection>
        );
    }
}

const style = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
