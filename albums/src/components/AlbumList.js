import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

/*FUNCTIONAL COMPONENT*/ 
/*Functional digunakan hanya untuk menampilkan saja tanpa get data*/ 
// const AlbumList = () => {
//     return (
//         <View>
//             <Text>AlbumList</Text>
//         </View>
//     ); 
// };

/*CLASS COMPONENT ==> should have at least 1 method*/ 
/*Class digunakan saat dibutuhkan proses pengambilan data untuk ditampilkan*/
class AlbumList extends Component {
    // debugging() {
    //     console.log('hallo');
    //     debugger;
    // }

    state = { albums: [] };   //penampung data sementara untuk http
    componentWillMount() {    //function bawaan dari component, berfungsi sebagai lifecycle sebelum rendering dan reader
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); //isi data state dengan setState
    }

    renderAlbums() {
        return this.state.albums.map(album =>           //map => mgebongkar isi2 dalem arraynya, looping sebanyak isinya
        <AlbumDetails key={album.title} albumContainer={album} />); //key digunakan sebagai unique id nya, untuk pembeda
                                                          //result album di line 31, dimasukin ke variable albumContainer which is defined di AlbumDetails
    }

    render() {      //function bawaan dari component, berfungsi untuk rendering jsx ke page
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}
export default AlbumList;
