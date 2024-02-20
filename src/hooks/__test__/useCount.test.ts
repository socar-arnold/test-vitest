import { describe , expect, it} from "vitest";
import { renderHook, act } from '@testing-library/react';
import useCount from "../useCount";


describe("useCount > 카운터 훅 테스트", ()=> {
  const setup = () => {
    const result = renderHook(()=> useCount());
    return result;
  }

  it("test" , ()=> {
    const result = setup();
    expect(result.result.current.count).toBe(0)
  })
})