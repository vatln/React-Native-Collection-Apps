import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={style.headerStyle}>
            <Text style={style.textStyle}>{props.headerTitle}</Text>
        </View>
    );
};

const style = {
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        backgroundColor: '#F3F3F8',
        position: 'relative',
        height: 60,
        shadowColor: '#000',
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
};

export { Header };
