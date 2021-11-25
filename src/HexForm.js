import './index.css';
import React from 'react'

function HexForm({onHexChange, form}) {
  return (
    <React.Fragment>
    <form className="form" onSubmit={e => e.preventDefault()}>
      <input className="input" id="hex" name="hex" value={form.hex} maxLength="7" onChange={onHexChange}/>
    </form>
    <span className="label rgb" hidden={form.rgb===''}>{form.rgb}</span>
    </React.Fragment>
  )
}

export default HexForm;