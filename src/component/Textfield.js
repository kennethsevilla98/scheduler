
function Textfield({ value, label, name, placeholder, type, onChange }) {
    return (
        <div className="form-group">
        {label && <label htmlFor="input-field"><span className="text-gray-700">{label}</span></label>}
        <input
          type='text'
          value={value}
          className="p-2 mt-1 block w-full border border-gray-400 focus:ring-2 focus:ring-green-400 focus: border-transparent focus: outline-none rounded-xl"
          onChange={onChange}
        />
      </div>
    )
}

Textfield.defaultProps = {
    value: '',

}


export default Textfield;
