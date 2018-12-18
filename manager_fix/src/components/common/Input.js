import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, valueVar, onChangeTextVar, placeHolderVar, secureTextEntryVar }) => {
    //({label}) = (props.label)
    const { inputStyle, containerStyle, labelStyle } = style;
    return (
        <View style={containerStyle} >
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                //untuk props boolean, ga perlu ngisi, nulis nama propsnya dianggep true, 0 / undefined (ga diisi) dianggep false
                secureTextEntry={secureTextEntryVar}
                placeholder={placeHolderVar}
                autoCorrect={false}
                style={inputStyle}
                value={valueVar}
                onChangeText={onChangeTextVar}
            />
        </View>
    );
};

const style = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,         //jarak antar kata
        flex: 2              /*karena input dan label adalah children dari View,
                               kalo flex input 2 dan label 1, artinya
                               panjang input 2/3 dari view, dan label 1/3 nya
                               alias 2 : 1*/
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
};

export { Input };
