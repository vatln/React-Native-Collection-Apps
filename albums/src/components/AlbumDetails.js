import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ albumContainer }) => {    //mempermudah dari (props)
    const { thumbnail_image, title, artist, image, url } = albumContainer;   //mempermudah dari props.album.title
    const { thumbnailStyle, containerTextStyle, containerThumbnailStyle, titleStyle, imageStyle } = style;    //memperudah dari style.text 
// const AlbumDetails = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={containerThumbnailStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={containerTextStyle} >
                    <Text style={titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPressBtn={() => Linking.openURL(url)}>Buy Now</Button> 
                {/* linking untuk pindah ke apps lain */}
            </CardSection>
        </Card>
    );
};

const style = {
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    containerTextStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    containerThumbnailStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    titleStyle: {
        fontSize: 18
    },
    imageStyle: {
        flex: 1,        //supaya width nya sepanjang device
        width: null,    //supaya width nya sepanjang device
        height: 300
    }
};

export default AlbumDetails;
