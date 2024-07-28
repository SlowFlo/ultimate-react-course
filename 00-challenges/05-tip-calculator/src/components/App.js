import Bill from "./Bill";
import Service from "./Service";
import Total from "./Total";
import Reset from "./Reset";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [userService, setUserService] = useState(0);
  const [friendService, setFriendService] = useState(0);
  const tip = bill * ((userService + friendService) / 2 / 100);

  function handleReset() {
    setBill("");
    setUserService(0);
    setFriendService(0);
  }

  return (
    <>
      <Bill bill={bill} onSetBill={setBill} />
      <Service service={userService} onServiceSelected={setUserService}>
        How did you like the service?
      </Service>
      <Service service={friendService} onServiceSelected={setFriendService}>
        How did your friend like the service?
      </Service>
      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}
