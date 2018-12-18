import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPressBtn, children }) => {
    const { buttonStyle, textStyle } = style;

    return (
        <TouchableOpacity onPress={onPressBtn} style={buttonStyle} > 
            <Text style={textStyle} >
                { children }
                {/* props.children = supaya di dalem view ini, dapat didefine view lain nya */}
                {/* props.children = children */}
                {/* kalo parameter define props, maka di bawah define nya {props.children} */}
                {/* kalo parameter define {children}, maka di bawah define nya {children} aja */}
            </Text>
        </TouchableOpacity>
    );
};
//TouchableOpactiy = button => click => opacity
const style = {
    buttonStyle: {
        borderColor: '#007aff',
        borderWidth: 2,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        flex: 1,   //semacam math_parent
        alignSelf: 'stretch',  
        borderRadius: 5
    },
    textStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
