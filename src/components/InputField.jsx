import './InputField.css'

function InputField({ 
  id, 
  label, 
  value, 
  onChange, 
  placeholder, 
  type = "number", 
  step 
}) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        step={step}
      />
    </div>
  )
}

export default InputField
