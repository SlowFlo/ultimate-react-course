export default function Bill({ bill, onBillChange, children }) {
  return (
    <div>
      <span>{children}</span>
      <input type="text" value={bill} onChange={onBillChange}/>
    </div>
  );
}
