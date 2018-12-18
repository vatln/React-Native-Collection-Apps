import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (//style[] supaya bisa niban. normalnya pake yg sebelah kiri, kalo ada tambahan khusus ditaro di kanan, akan niban yg kiri
        <View style={[style.cardSectionStyle, props.style]} > 

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
