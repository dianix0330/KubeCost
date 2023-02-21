import * as React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render App Component", () => {
    const table = document.createElement("div");
    const { container } = render(<App />, {
      container: document.body.appendChild(table),
    });
    console.log(container.innerHTML);
  });
});
