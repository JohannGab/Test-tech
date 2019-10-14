import React from 'react'
import './style.scss'

const Notification = ({ Notification }) => {
    return (
        <div className="containerNotification">
            <div className={ Notification ? "notificationOpen" : "notificationClose"}>
                <p>Hey ! Voila votre café</p>
            </div>
        </div>
    )
}

export default Notification