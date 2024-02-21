import { describe , expect, it} from "vitest";
import { renderHook, act } from '@testing-library/react';
import useCount from "../useCount";


describe("useCount > 카운터 훅 테스트", ()=> {
  const setup = (initialCount: number = 0) => {
    const result = renderHook(()=> useCount({initialCount}));
    return result;
  }

  it("초기값을 그대로 반환해야 한다." , ()=> {
    const result = setup(1);
    expect(result.result.current.count).toBe(1)
  })

  it("plus 메서드를 사용하는 경우, count가 1 상승해야한다.." , ()=> {
    const result = setup(1);
    act(() => {
      result.result.current.plus();
    })
    expect(result.result.current.count).toBe(2)
  })

  it("minus 메서드를 사용하는 경우, count가 1 상승해야한다.." , ()=> {
    const result = setup(2);
    act(() => {
      result.result.current.minus();
    })
    expect(result.result.current.count).toBe(1)
  })
})