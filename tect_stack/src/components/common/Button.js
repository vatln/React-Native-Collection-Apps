import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ btnOnPress, children }) => (
        <TouchableOpacity onPress={btnOnPress} style={style.buttonStyle} >
            <Text style={style.textStyle} >{children}</Text>
        </TouchableOpacity> 
    ); 

const style = {
    buttonStyle: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 100,
        borderWidth: 2,
        borderColor: '#007aff',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5
    },
    textStyle: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        fontWeight: '600',
        color: '#007aff'
    }
};

export { Button };
