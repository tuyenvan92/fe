import React from 'react'


import Comment from './Comment';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};


function ComposeComponent() {
  return (
    <div>
      <h2>Sample App: Compose Component</h2>
      <Comment 
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  )
}

export default ComposeComponent
