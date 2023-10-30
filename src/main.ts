import "./style.css";
import { setupCounter } from "./counter.ts";
import test from "./test.toml";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  ${test.testKey}
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
