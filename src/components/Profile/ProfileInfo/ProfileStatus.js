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
        if (this.props.userStatus !== this.state.localStatus) {
            this.props.getUpdateStatus(this.state.localStatus)
        }
    }
    onStatusChange = (text) => {
        this.setState({
            localStatus: text
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                localStatus: this.props.userStatus
            })
        }
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
                            {this.props.userStatus || "enter status there"}
                        </span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                            onBlur={() => { this.deactivateEditMode() }}
                            autoFocus={true}
                            value={this.state.localStatus}
                            onChange={(e) => this.onStatusChange(e.target.value)}
                        />
                    </div>}
            </>
        )
    }
}

export default ProfileStatus;