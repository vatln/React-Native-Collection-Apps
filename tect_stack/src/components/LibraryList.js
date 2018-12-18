import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() { //lifecycle method before render
        /*copy paste-able dari documentation (konfigurasi awal listview)*/
        const ds = new ListView.DataSource({   //konfigurasi awal, banyak method di dalem DataSource
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries); //masukin datasource ke var untuk dirender
        /*copy paste-able*/
    }

    /*method helper*/
    //tapi karena ini ada di dalam renderRow di render() ListView, maka arg nya sudah ditentukan
    renderRow1(library) { //arg library = data  yg ada di dalam dataSource di atas. Kalo ada 8 data, maka akan ngerender 9x. ini penyebab bisa ada 9 item judul 
        return <ListItem library2={library} />;
    }

    render() {
        // console.log(this.props);
        return (
            <ListView
                dataSource={this.dataSource}    //list of item
                renderRow={this.renderRow1}      //to tell listview how to render list of item
            />
        );
    }
}

const mapStateToProps = state => { //state sebagai penampung variable state global yg ada di store
    return { libraries: state.libraries2 };  //dengan mereturn object di sini, maka hasil datanya akan jadi props di component LibraryList (render()) (accessable)
    // console.log(state);
};
//variable state itu dilempar di connect() supaya bisa terbaca
export default connect(mapStateToProps)(LibraryList); 
//dengan di-connect, mapStateToProps bakal manggil state yg ada di provider, which is memanggil reducer libraries2 dari provider, dimasukin ke dalem key 'libraries'
//sehingga 'libraries' bisa dipake di component ini dalam bentuk 'props'
