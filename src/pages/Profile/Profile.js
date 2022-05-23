import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import "./Profile.css"

/**
 * Страница "Профиль".
 * @returns Возвращает html-сомпонент.
 */
function Profile() {
    return (
        <div className='profile'>
            <ProfileCard/>
        </div>
    );


}
export default Profile;