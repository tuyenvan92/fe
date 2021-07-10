import React from 'react'

function UserInfo({ name, avatarUrl }) {
  return (
    <div className="UserInfo">
      <img className="Avatar" src={avatarUrl} alt={name} />
      <div className="UserInfo-name">{name}</div>
    </div> 
  )
}

export default UserInfo
