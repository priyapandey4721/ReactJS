import React from 'react'
import  ReactDOM  from 'react-dom'
function PortalRoot() {
  return ReactDOM.createPortal (
     
    <h1>PortalRoot</h1>,
    document.getElementById("portal-root")
   
  )
}

export default PortalRoot