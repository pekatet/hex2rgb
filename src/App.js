import './index.css';
import React, {useState} from 'react'
import HexForm from './HexForm'

function App() {
  const [form, setForm] = useState({
    hex: '',
    rgb: ''
  })

  const hexToRGB = (hex) => {
    if (!hex.match(/^#[a-fA-F\d]{6}$/))
      return "Ошибка!!"
    hex = '0x' + hex.slice(1)
    let r = (hex >> 16) & 0xFF
    let g = (hex >> 8) & 0xFF
    let b = hex & 0xFF
    return `rgb(${r}, ${g}, ${b})`
  }

  const handleHexChange = e => {
    const hex = e.target.value
    setForm(prevForm => ({...prevForm,
      hex: hex,
      rgb: hex.length === 7 ? hexToRGB(hex) : prevForm.rgb
    }));
  }
  return (
    <div className="app" style={{background:form.rgb}}>
      <HexForm onHexChange={handleHexChange} form={form}/>
    </div>
  )
}

export default App;
