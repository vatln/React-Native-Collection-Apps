// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}> 
    {/*flex: 1 agar tingginya sepanjang isinya, agar bisa discroll*/}
        <Header headerTitle={'Albums'} /> 
            {/* kirim string='albums' ke Header.js dalam variable headerTitle */}
        <AlbumList />
    </View>    
    );

// Render it to the device 
AppRegistry.registerComponent('albums', () => App);
