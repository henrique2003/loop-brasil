import './style.css'

function Input({ name, onChange, label, type }) {
  return (
    <div className="root">
      <input
        type={type}
        name={name}
        onChange={e => onChange(e)}
        placeholder="."
        required
      />
      <label>{label}</label>
    </div>
  )
}

export default Input
