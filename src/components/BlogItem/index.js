// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogItem} = this.props
    const {id, imageUrl, topic, title, avatarUrl, author} = blogItem
    return (
      <Link to={`/blogs/${id}`}>
        <li className="blog-item">
          <div>
            <img alt="avatar" className="image" src={imageUrl} />
          </div>
          <div>
            <div>
              <h1 className="topic">{topic}</h1>
              <h1 className="title">{title}</h1>
            </div>
            <div className="avatar-container">
              <img alt="hlo" className="avatar-image" src={avatarUrl} />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
