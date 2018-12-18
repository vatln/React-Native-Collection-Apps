import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Mon' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeHolderVar="Jane"
                        valueVar={this.props.name}
                        onChangeTextVar={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                        // onChangeTextVar={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeHolderVar="555-5555-5555"
                        valueVar={this.props.phone}
                        onChangeTextVar={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                        // onChangeTextVar={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        // style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                        // onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Mon" />
                        <Picker.Item label="Tuesday" value="Tue" />
                        <Picker.Item label="Wednesday" value="Wed" />
                        <Picker.Item label="Thursday" value="Thu" />
                        <Picker.Item label="Friday" value="Fri" />
                        <Picker.Item label="Saturday" value="Sat" />
                        <Picker.Item label="Sunday" value="Sun" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button btnOnPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextSTyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm; //berasal dari reducers employeeForm

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
