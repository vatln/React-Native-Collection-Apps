import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        const { errorMessage, errorMessageContainer } = styles;

        if (this.props.error) {
            return (
                <View style={errorMessageContainer}>
                    <Text style={errorMessage}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
            return (
                <Button btnOnPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
            );    
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolderVar="email@gmail.com"
                        onChangeTextVar={this.onEmailChange.bind(this)}
                        valueVar={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntryVar
                        label="Password"
                        placeHolderVar="password"
                        onChangeTextVar={this.onPasswordChange.bind(this)}
                        valueVar={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorMessage: {
        color: 'red',
        fontSize: 18
    },
    errorMessageContainer: {
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, {
     emailChanged, 
     passwordChanged, 
     loginUser 
    })(LoginForm);
