// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.id,
      title: data.title,
      author: data.author,
      content: data.content,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogData = () => {
    const {blogData} = this.state
    const {imageUrl, topic, title, avatarUrl} = blogData
    return (
      <div>
        <h1>{title}</h1>
        <img alt="hello" className="blog-image" src={imageUrl} />
        <p>{topic}</p>
        <img alt="hi" src={avatarUrl} />
      </div>
    )
  }

  render() {
    const {isLoading} = this.State
    return (
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
