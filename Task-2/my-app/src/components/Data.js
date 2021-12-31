import React, { Component } from 'react'

export default class Data extends Component {

    render() {
        const usrData = this.props.usrData.map((user) => {
            return (
                <div style={{marginTop: '20px' }} key={user.id}  className="row col-lg-4 col-md-4 col-sm-4 col-xs-6" >
                    <div style={{background: '#023047' }} className="profile-template col-lg-3 col-md-3 col-sm-3 col-xs-6" >
                        <div className="profile-img ">
                            <img src={user.avatar} alt="images" />
                        </div>
                        <div className="details">
                            <h2>{user.first_name + " " + user.last_name}<br /><span>{user.email}</span></h2>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row" style={{marginTop: '20px' }}>
                    {usrData}
                </div>
            </div>
        );
    }
}
