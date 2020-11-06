import React from 'react';
import style from './ProfileInfo.module.css';
// import wallpaper from './../../img/wall.jpg'
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    const { profile } = props;

    console.log(profile)
    
    if (!profile) {
        return (
            <Preloader />
        )
    }
    return (
        <>
            {/* <div className={style.wallpaper}>
                <img src={wallpaper} alt="..." />
            </div> */}

            <div className={style.wrap}>
                <div className={style.avatar}>
                    <img src={profile.photos.large} alt="..." />
                </div>
                <ProfileStatus />

                <div>
                    <h3>{profile.fullName}</h3>
                    {profile.aboutMe ? <p>About me: {profile.aboutMe}</p> : null}
                    {profile.contacts.facebook ? <p>Fb: {profile.contacts.facebook}</p> : null}
                    {profile.contacts.instagram ? <p>Inst: {profile.contacts.instagram}</p> : null}
                </div>

            </div>
        </>
    )
}

export default ProfileInfo;