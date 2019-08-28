import React from "react";
import ReactDOM from "react-dom";
import UserList from "./userList.jsx";
import UserData from "./userData.jsx";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: [{
                id: '1',
                firstName: 'Rupika',
                lastName: 'Pawar'
            }, {
                id: '2',
                firstName: 'Steven',
                lastName: 'Rogers'
            }, {
                id: '3',
                firstName: 'Tony',
                lastName: 'Stark'
            }, {
                id: '4',
                firstName: 'Thor',
                lastName: 'Odinson'
            }],
            selected: {
                id: null,
                firstName: null,
                lastName: null
            }
        };
    }
    selectedList(id) {
        this.setState({
            selected: this.state.arr[id - 1]
        });
    }
    updateUserDetails(fname, lname) {
        let updated = this.state.arr;
        let selected = this.state.selected.id -1;
        updated[selected].firstName = fname;
        updated[selected].lastName = lname;
        this.setState({
            arr: updated
        })
    }
    render() {
        return (<div className="main">
            <UserList usersList={this.state.arr} funcSelectedList={this.selectedList.bind(this)} />
            <UserData user={this.state.selected} funcUpdateDetail={this.updateUserDetails.bind(this)} />
        </div>);
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('content')
);