import Bill from "./Bill";
import Service from "./Service";
import Total from "./Total";
import Reset from "./Reset";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [userService, setUserService] = useState(0);
  const [friendService, setFriendService] = useState(0);
  const tip = bill * ((userService + friendService) / 2) / 100;
  const total = bill + tip;

  function handleReset() {
    setBill(0);
    setUserService(0);
    setFriendService(0);
  }

  return (
    <>
      <Bill bill={bill} onBillChange={(e) => setBill(Number(e.target.value))}>
        How much was the bill?
      </Bill>
      <Service
        service={userService}
        onServiceSelected={(e) => setUserService(Number(e.target.value))}
      >
        How did you like the service?
      </Service>
      <Service
        service={friendService}
        onServiceSelected={(e) => setFriendService(Number(e.target.value))}
      >
        How did your friend like the service?
      </Service>
      <Total>
        You pay ${total} (${bill} + ${tip} tip)
      </Total>
      <Reset onReset={handleReset} />
    </>
  );
}
