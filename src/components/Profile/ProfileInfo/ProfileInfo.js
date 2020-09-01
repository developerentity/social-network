import React from 'react';
import style from './ProfileInfo.module.css';
import wallpaper from './../../img/wall.jpg'
import avatar from './../../img/images.png';

const ProfileInfo = () => {
    return (
        <>
            <div className={style.wallpaper}>
                <img src={wallpaper} alt="..." />
            </div>

            <div className={style.avatar}>
                <img src={avatar} alt="..." />
            </div>

            <h3>Article</h3>
            loremLorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla quis felis
            consequat odio accumsan finibus in sed nibh.Nam iaculis lectus quis auctor euismod.
            Vestibulum finibus semper leo at porta.Sed purus nulla, efficitur quis nulla vel,
            auctor molestie odio.Donec et rhoncus eros.Nam luctus varius ex nec fermentum.Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Fusce in imperdiet libero.Integer iaculis velit a dui hendrerit, at pellentesque
            ligula porta.Quisque a magna arcu.Aliquam porta dui et felis mattis lobortis.Vivamus
            tincidunt ante massa, et aliquet dui dapibus lobortis.Nulla et hendrerit magna, id
            rutrum purus.Duis porttitor luctus mauris, eget porta nisi accumsan vitae.Quisq
            bibendum tortor in turpis luctus, nec convallis nulla placerat.Phasellus eu hendrerit
            sapien.Phasellus eu augue enim.Sed sit amet elit in nisl faucibus placerat.Curabitur
            blandit gravida nibh, pharetra consectetur nibh scelerisque in.Nullam pretium, nulla
            eu facilisis rutrum, nisl justo bibendum orci, et posuere libero magna nec lectus.
        </>
    )
}

export default ProfileInfo;