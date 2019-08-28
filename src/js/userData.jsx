import React from "react";
import ReactDOM from "react-dom";
class UserData extends React.Component {
    render() {
        const userInfo = this.props.user;
        return (
            <div className="Details">
                <label>First Name </label><br />
                <input type="text" id="firstName" defaultValue={userInfo.firstName} onChange={event => this.setState({ firstName: event.target.value })} /><br /> <br />
                <label>Last Name </label><br />
                <input type="text" id="lastName" defaultValue={userInfo.lastName} onChange={event => this.setState({ lastName: event.target.value })} /><br /> <br />
                <button onClick={()=>this.props.funcUpdateDetail(this.state.firstName,this.state.lastName)}>Update</button>
            </div>
        )
    }
}
// defaultValue={userInfo.firstName} onChange={this.updateFirstName.bind(this)} 
// updateFirstName(event) {
//     // console.log(this);
//     this.setState ({
//         firstName: event.target.value
//     });
//     console.log(this.state.firstName);
// }

// updateLastName(event){
//     // console.log(this);

//     this.setState({
//         lastName: event.target.value
//     });
// }

module.exports = UserData;