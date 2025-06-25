// components/Entrada.jsx
const Entrada = ({ label, type, value, onChange, name }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

export default Entrada;
