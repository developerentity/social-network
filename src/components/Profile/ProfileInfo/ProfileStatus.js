import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.userStatus);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        if (props.userStatus !== status) {
            props.getUpdateStatus(status)
        }
    }
    const onStatusChange = (text) => {
        setStatus(text)
    }

    useEffect(() => {
        setStatus(props.userStatus)
    }, [props.userStatus])


    return (
        <>
            {!editMode &&
                <div>
                    <span
                        style={{ cursor: 'pointer' }}
                        onDoubleClick={() => activateEditMode()}
                    >
                        {props.userStatus || "enter status there"}
                    </span>
                </div>}
            {editMode &&
                <div>
                    <input
                        onBlur={() => { deactivateEditMode() }}
                        autoFocus={true}
                        value={status}
                        onChange={(e) => onStatusChange(e.target.value)}
                    />
                </div>}
        </>
    )

}

export default ProfileStatus;