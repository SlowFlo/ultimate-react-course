export default function Total({ bill, tip }) {
  return <h3>You pay ${bill + tip} (${bill} + ${tip} tip)</h3>;
}
