// import
import React from 'react';
import { Text, View } from 'react-native';

// component
const Header = (props) => {
    const { textStyles, viewStyles } = styles;
    return (
        <View style={viewStyles}>
            <Text style={textStyles}>{props.headerTitle}</Text>
        </View>
    );
};

const styles = {
    viewStyles: {
        backgroundColor: '#F3F3F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyles: {
        fontSize: 20
    }
};

// export
export default Header;
