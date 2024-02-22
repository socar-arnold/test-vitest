import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../about";
describe("About 페이지", () => {
  const setup = () => {
    return render(<About />);
  };
  it("초기 렌더하는 경우, about텍스트가 렌더되어야 한다.", () => {
    const result = setup();
    const h1 = result.getByText("About");
    screen.debug();
    expect(h1).toBeInTheDocument();
  });
});
