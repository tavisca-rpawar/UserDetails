import React from "react";
import UserData from "./UserData.jsx";
import ReactDOM from "react-dom";
class UserList extends React.Component {
    render() {
        const { usersList } = this.props;
        return (
            <div className="Lists">
                <h3>User Initials</h3>
                <ul>
                    {usersList.map((data) => {
                        return (
                            <li id={`${data.id}`} onClick={() => this.props.funcSelectedList(data.id)}>{data.firstName.charAt(0)}{data.lastName.charAt(0)}</li>
                        )
                    })}
                </ul>
            </div>);
    }
}
module.exports = UserList;