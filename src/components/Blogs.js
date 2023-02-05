import React from 'react'
import PropTypes from 'prop-types'
import styles from '../css/blog.module.css'
import avatar from '../avatar_nick.png'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Blogs = (props) => {
  const {bloglist} = props
  return (
        <>
        {
           bloglist && (
            <div className={styles.blog}>
                <div className={styles.textSection}>
                    <div className={styles.authorHolder}>
                        <img alt='aut' src={avatar} className={styles.avatar}></img>
                        <div className={styles.publishDetails}>
                            <h6 className={styles.authorName}>{bloglist.author}</h6>
                            <h6 className={styles.publishTime}>{moment(bloglist.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                        </div>
                    </div>
                    <div className={styles.blogTitle}>
                        <h5 ><Link to={bloglist.url} target='_blank'>{bloglist.title}</Link></h5>
                        <h6>{bloglist.description}</h6>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <img alt='title' src={bloglist.urlToImage} className={styles.image}></img>
                </div>
            </div>
            )
        }
    </>
  )
}

Blogs.propTypes = {
    bloglist: PropTypes.object
}

export default Blogs