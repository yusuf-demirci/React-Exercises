import React from "react";

function UserCard(props) {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">
                    Alex Tancredi
                </div>
                <div className="description">
                    {props.children}
                </div>
            </div>
            <div className="ui bottom button">
                <i className="add icon">
                    Add Friend
                </i>
            </div>
        </div>
    );
}

export default UserCard;