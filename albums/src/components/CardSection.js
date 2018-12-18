import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={ styles.containerStyles }>
            {props.children}
            {/* props.children = supaya di dalem view ini, dapat didefine view lain nya */}
            {/* props.children = children */}
            {/* kalo parameter define props, maka di bawah define nya {props.children} */}
            {/* kalo parameter define {children}, maka di bawah define nya {children} aja */}
        </View>
    );
};

const styles = {
    containerStyles: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;