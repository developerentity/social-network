import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import wallpaper from './../../img/wall.jpg'
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    const {
        isOwner,
        savePhoto,
        saveProfile,
        profile,
        userStatus,
        getUpdateStatus
    } = props;

    const [editMode, setEditMode] = useState(false)

    const onSubmit = async data => {
        const res = await saveProfile(data)
        if (res) {
            return res
        }
        setEditMode(false)
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    if (!profile) {
        return (
            <Preloader />
        )
    }
    return (
        <>
            <div
                className={style.wallpaper}
                style={{
                    backgroundImage: `url(${profile.photos.large || wallpaper})`
                }}>
                <div className={style.infoWrap}>
                    <div className={style.wrap}>
                        <div className={style.contentWrap}>
                            <div className={style.imgWrap}>
                                <img src={profile.photos.large || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png'} alt="..." />
                                {isOwner && <div>
                                    <input
                                        type='file'
                                        name='file'
                                        id='file'
                                        onChange={onMainPhotoSelected}
                                        className={style.inputFile} />
                                    <label htmlFor="file"><div>Choose a photo</div></label>
                                </div>}
                            </div>
                            <div>
                                <ProfileStatus
                                    userStatus={userStatus}
                                    getUpdateStatus={getUpdateStatus}
                                />
                            </div>
                            {editMode
                                ? <ProfileDataForm profile={profile} onSubmit={onSubmit} />
                                : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

const ProfileData = ({ profile, goToEditMode, isOwner }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <h3>{profile.fullName}</h3>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts</b>:
                <div className={style.contacts}>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;