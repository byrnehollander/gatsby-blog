// @flow strict
import React from 'react'
import { getContactHref } from '../../../utils'
import styles from './Author.module.scss'
import { useSiteMetadata } from '../../../hooks'

const Author = () => {
  const { author } = useSiteMetadata()

  return (
    <div className={styles.author}>
      <p className={styles.author__bio}>
        Byrne is a {author.bio}
      </p>
    </div>
  )
};

export default Author
