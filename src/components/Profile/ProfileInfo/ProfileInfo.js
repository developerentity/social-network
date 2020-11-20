import React from 'react';
import style from './ProfileInfo.module.css';
import wallpaper from './../../img/wall.jpg'
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    const {
        profile,
        userStatus,
        getUpdateStatus
    } = props;

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
                            <div>
                                <img src={profile.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png'} alt="..." />
                            </div>
                            <div>
                                <ProfileStatus
                                    userStatus={userStatus}
                                    getUpdateStatus={getUpdateStatus}
                                />
                            </div>

                            <div>
                                <h3>{profile.fullName}</h3>
                                {profile.aboutMe ? <p>About me: {profile.aboutMe}</p> : null}
                                {profile.contacts.facebook ? <p>Fb: {profile.contacts.facebook}</p> : null}
                                {profile.contacts.instagram ? <p>Inst: {profile.contacts.instagram}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;