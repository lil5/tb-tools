import HexToU128 from "./components/HexToU129";
import TbID from "./components/TbID";
import U129ToHex from "./components/U129ToHex";

export function App() {
  return (
    <>
      <h1>TigerBeetle u128 Tools</h1>
      <hr />
      <HexToU128 />
      <hr />
      <U129ToHex />
      <hr />
      <TbID />
    </>
  );
}
