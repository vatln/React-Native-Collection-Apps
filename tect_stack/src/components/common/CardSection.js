import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={style.cardSectionStyle} >
            {props.children}
        </View>
    );
};

const style = {
    cardSectionStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
