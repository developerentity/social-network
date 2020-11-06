import React, { useState } from 'react';


const ProfileStatus = () => {

    const [editMode, setEditMode] = useState(false)
    const [tempStatus, setTempStatus] = useState('some text')

    return (
        <>
            {!editMode &&
                <div>
                    <span
                        style={{ cursor: 'pointer' }}
                        onDoubleClick={() => setEditMode(true)}
                    >
                        {tempStatus}
                    </span>
                </div>}
            {editMode &&
                <div>
                    <input
                        onBlur={() => setEditMode(false)}
                        autoFocus={true}
                        value={tempStatus}
                        onChange={(e) => setTempStatus(e.target.value)}
                    />
                </div>}
        </>
    )
}


export default ProfileStatus;