import React from 'react';
import Profile from "./Profile";
import connect from "react-redux/lib/connect/connect";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {useParams} from "react-router";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()}
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userID;
        if(!userId ){
            userId = 28909;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);