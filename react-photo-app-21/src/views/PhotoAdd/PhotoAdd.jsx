import React from 'react'

function PhotoAdd() {

  return (
    <div className="photo-add">
        <form class="a-center">
          <div className="photo-add-title">Add New Post</div>
          <input placeholder="Enter Name"/>
          <input placeholder="Enter Image"/>
          <input placeholder="Enter Description"/>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default PhotoAdd
