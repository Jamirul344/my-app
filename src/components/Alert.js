import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'50px', margin:'5px 0 5px 0'}}>
   {props.alert && <div className={`alert alert-${(props.alert.alerttype)} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.alerttype}</strong> {props.alert.message}
</div>}
</div>
  )
}

export default Alert
