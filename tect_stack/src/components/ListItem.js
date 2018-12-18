import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; //* untuk ambil semua yg diexport

/*supaya layoutanimation.spring nya berfungsi*/
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental(true);
/* end */

class ListItem extends Component { 
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {   //helper function (buatan sendiri)
        // START version 1
        // const { library2, selectedLibraryId } = this.props;

        // if(library2.id === selectedLibraryId) {
        //     return (
        //         <Text>{library2.description}</Text>
        //     );
        // }
        // END version 1

        // START version 2 
        const { library2, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        { library2.description}
                    </Text>
                </CardSection>
            );
        }
        // END version 2
    }

    render() {
        const { titleStyle } = styles;
        // console.log(this.props); --> isinya data2 object list of library
        const { id, title } = this.props.library2;   //maka dari itu data nya bisa diakses di sini

        return (
            //touchable ini supaya dipencet tapi ga memberi feedback ke user
            //onPress ini bisa mengakses selectLibrary karena actions di bawah mereturn function isinya
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)} >  
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
// START version 1
// const mapStateToProps = state => {
//     return { selectedLibraryId: state.selectedLibraryId };
// };
// END version 1

// START version 2
const mapStateToProps = (state, ownProps) => {    
    //state = variable global dari store
    //ownProps = variable yg sedang berjalan di component ini
    const expanded = state.selectedLibraryId === ownProps.library2.id;  //selectedLibraryId => mengecek isi dari state reducer sekarang
    return { expanded };    //aslinya return { expanded: expanded }  => sama aja
};
// END version 2

export default connect(mapStateToProps, actions)(ListItem);  
//null -> first arg -> harusnya mapStateToProps

//actions -> melakukan 2 actions
//  -mutate function yg ada di index.js supaya mereturn dispatch the redux-store
//  -ambil semua return object yg ada di action, ke component class ListItem

