import React from 'react'

function CheckBox({type,name,id,value,onChange,checked}) {
  return (
<label  className="container">
 
  <input checked={checked} type={type} id={id} name={name} value={value} onChange={onChange}/>
  
  <div className="checkmark"></div>
</label>  )
}

export default CheckBox