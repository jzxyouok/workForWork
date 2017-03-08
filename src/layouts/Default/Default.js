import React from 'react'

export const Default = ({ children }) => (
  <div>
    {children}
  </div>
)

Default.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default Default
