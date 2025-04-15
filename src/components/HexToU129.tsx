import { useMemo, useState } from "preact/compat";

export default function HexToU128() {
  const [valueIn, setValueIn] = useState("");
  const valueOut = useMemo(() => {
    if (!valueIn) return "";
    try {
      return BigInt("0x" + valueIn).toString(10);
    } catch (err) {
      return "Error: " + err;
    }
  }, [valueIn]);

  function onFocusSelectAll(e: any) {
    (e.target as HTMLInputElement).select();
  }
  return (
    <>
      <h2>Hex String to Numeric</h2>
      <label>
        <span>Enter hex string of u128 value</span>
        <input
          type="text"
          value={valueIn}
          placeholder="1963ba52c955024ed54938fa46b978a"
          onChange={(e: any) => setValueIn(e.target.value)}
          onFocus={onFocusSelectAll}
        />
      </label>
      <br />
      <label>
        <span>Result numeric value of u128</span>
        <input
          placeholder="2109282273176419169118732258504316810"
          type="text"
          value={valueOut}
          onFocus={onFocusSelectAll}
          readonly
        />
      </label>
    </>
  );
}
