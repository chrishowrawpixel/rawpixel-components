import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const RedBox = ({ children }) => (
  <div className={styles.redBox}>{children}</div>
)

RedBox.propTypes = {
  children: PropTypes.node
}

export default RedBox
