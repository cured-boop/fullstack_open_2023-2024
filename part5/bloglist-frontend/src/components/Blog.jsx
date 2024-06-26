import { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, addLike, removeBlog, user }) => {
  const [visible, setVisible] = useState(false)

  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const handleLike = () => {
    const newBlog = {
      user: blog.user._id,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url
    }
    addLike(blog.id, newBlog)
  }
  const handleRemove = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      removeBlog(blog.id)
    }
  }

  return(
    <div style={blogStyle} className='blog'>
      <div className='off'>
        {blog.title} {blog.author}
        <button onClick={toggleVisibility}>{visible ? 'hide' : 'view' }</button>
      </div>
      <div style={showWhenVisible} className='on'>
        <p>{blog.url}</p>
        <p>
          <>likes </>
          {blog.likes}
          <button className='like-button' id="like-button" onClick={handleLike}>like</button>
        </p>
        <p>{blog.user !== null && blog.user.name}</p>
        {blog.user.name === user.name && <button className='remove-button' id="remove-button" onClick={handleRemove}>remove</button>}

      </div>

    </div>
  )}
  Blog.propTypes = {
    addLike: PropTypes.func.isRequired,
    removeBlog: PropTypes.func.isRequired,
  }
export default Blog