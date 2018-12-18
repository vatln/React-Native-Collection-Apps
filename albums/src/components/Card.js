import React from 'react';
import { View } from 'react-native';

const card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
            {/* props.children = supaya di dalem view ini, dapat didefine view lain nya */}
            {/* props.children = children */}
            {/* kalo parameter define props, maka di bawah define nya {props.children} */}
            {/* kalo parameter define {children}, maka di bawah define nya {children} aja */}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginTop: 10,
        marginRight: 5

    }
};

export default card;
