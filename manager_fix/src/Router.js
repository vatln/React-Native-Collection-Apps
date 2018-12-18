import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar> 
            {/* hideNavBar untuk ilangin navbar kosong di atas */}
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add" //untuk nambah sub judul sebelah kanan
                        onRight={() => Actions.employeeCreate()} //memberi function saat sub judul dipencet
                        key="employeeList" 
                        component={EmployeeList} 
                        title="List Of Employee" 
                        initial 
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
