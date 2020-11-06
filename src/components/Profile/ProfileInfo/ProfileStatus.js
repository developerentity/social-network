import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        localStatus: this.props.userStatus
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if (this.state.localStatus) {
            this.props.getUpdateStatus(this.state.localStatus)
        }
    }
    onStatusChange = (text) => {
        this.setState({
            localStatus: text
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span
                            style={{ cursor: 'pointer' }}
                            onDoubleClick={() => this.activateEditMode()}
                        >
                            {this.props.userStatus || "Status did't update"}
                        </span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                            onBlur={() => {
                                this.deactivateEditMode()
                            }}
                            autoFocus={true}
                            value={this.localStatus}
                            onChange={(e) => this.onStatusChange(e.target.value)}
                        />
                    </div>}
            </>
        )
    }
}

export default ProfileStatus;