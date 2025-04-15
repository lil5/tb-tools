import { useMemo, useState } from "preact/compat";

export default function U129ToHex() {
  const [valueIn, setValueIn] = useState("");
  const valueOut = useMemo(() => {
    if (!valueIn) return "";
    try {
      return BigInt(valueIn).toString(16);
    } catch (err) {
      return "Error: " + err;
    }
  }, [valueIn]);

  function onFocusSelectAll(e: any) {
    (e.target as HTMLInputElement).select();
  }
  return (
    <>
      <h2>Numeric to Hex String</h2>
      <label>
        <span>Enter numeric u128 value</span>
        <input
          type="text"
          placeholder="2109282273176419169118732258504316810"
          value={valueIn}
          onChange={(e: any) => setValueIn(e.target.value)}
          onFocus={onFocusSelectAll}
        />
      </label>
      <br />
      <label>
        <span>Result hex string of u128</span>
        <input
          type="text"
          placeholder="1963ba52c955024ed54938fa46b978a"
          value={valueOut}
          onFocus={onFocusSelectAll}
          readonly
        />
      </label>
    </>
  );
}
