import React, { useState } from 'react';


const ProfileStatus = (props) => {

    const { userStatus, getUpdateStatus } = props;
    const [editMode, setEditMode] = useState(false)
    const [tempStatus, setTempStatus] = useState(userStatus)

    return (
        <>
            {!editMode &&
                <div>
                    <span
                        style={{ cursor: 'pointer' }}
                        onDoubleClick={() => setEditMode(true)}
                    >
                        {userStatus || 'There mey be your status'}
                    </span>
                </div>}
            {editMode &&
                <div>
                    <input
                        onBlur={() => {
                            setEditMode(false)
                            getUpdateStatus(tempStatus)

                        }}
                        autoFocus={true}
                        value={tempStatus}
                        onChange={(e) => setTempStatus(e.target.value)}
                    />
                </div>}
        </>
    )
}


export default ProfileStatus;