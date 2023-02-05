import React, {useContext, useEffect, useState} from 'react'
import Blogs from '../components/Blogs'
import BlogServices from '../service/BlogServices'
import styles from '../css/homepage.module.css'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [blogList,setBlogList] = useState()
  const navigate = useNavigate()
  const blogService = new BlogServices()
  const {loggedUserID} = useContext(AuthContext)
  useEffect(() => {
    getBlogs()
  },[])
  const getBlogs = () => {
    loggedUserID ? 
    blogService.getListOfblogs().then(response => {
      if(response && response.status === 200) {
        setBlogList(response.data && response.data.articles)
      }
    }) : navigate('/')
  }
  return (
    <div className={styles.blogsContainer}>
      {
        blogList && blogList.length > 0 ? (
          blogList.map(blogdata => (
            <React.Fragment key={blogdata.url} >
            <Blogs bloglist = {blogdata} />
            <hr className={styles.divider}/>
            </React.Fragment>
          ))
        ) : (
          <h2>Loading</h2>
        )
      }
    </div>
  )
}

export default HomePage