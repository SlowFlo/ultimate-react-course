export default function Service({ service, onServiceSelected, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={service} onChange={onServiceSelected}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
