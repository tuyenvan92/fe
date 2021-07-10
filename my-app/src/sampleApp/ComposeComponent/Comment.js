import React from 'react'

import UserInfo from './UserInfo';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment({ date, text, author }) {
  console.log(author)
  return (
    <div className="Comment">
        <UserInfo 
          name={author.name}
          avatarUrl={author.avatarUrl}
        />
        <div className="Comment-text">{text}</div>
        <div className="Comment-date">{formatDate(date)}</div>
    </div>
  )
}

export default Comment
