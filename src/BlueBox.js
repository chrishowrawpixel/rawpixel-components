import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const BlueBox = ({ children }) => (
  <div className={styles.blueBox}>{children}</div>
)

BlueBox.propTypes = {
  children: PropTypes.node
}

export default BlueBox
