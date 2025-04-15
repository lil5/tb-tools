import { useEffect, useState } from "preact/compat";
import { id } from "../utils/tigerbeetle_id";

export default function TbID() {
  const [valueHex, setValueHex] = useState("");
  const [valueN, setValueN] = useState("");

  useEffect(() => {
    onClickGenerate();
  }, []);

  function onClickGenerate() {
    const n = id();
    setValueHex(n.toString(16));
    setValueN(n.toString(10));
  }

  function onFocusSelectAll(e: any) {
    (e.target as HTMLInputElement).select();
  }
  return (
    <>
      <h2>Generate new random tigerbeetle id</h2>
      <button onClick={onClickGenerate}>Generate</button>
      <br />
      <label>
        <span>Result hex string</span>
        <input
          type="text"
          value={valueHex}
          onFocus={onFocusSelectAll}
          readonly
        />
      </label>
      <br />
      <label>
        <span>Result numeric u128 value</span>
        <input type="text" value={valueN} onFocus={onFocusSelectAll} readonly />
      </label>
    </>
  );
}
