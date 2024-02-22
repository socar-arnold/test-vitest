import { describe, expect, it } from "vitest";
import removeLeadingZeros from "./removeLeadingZero";

describe("utils > removeLeadingZero", () => {
  describe("removeLeadingZero > 시간 표현에서 앞에 나오는 0을 제거해야 한다.", () => {
    it("YYYY년 0M월 0D일 형태인 경우, YYYY년 M월 D일 형태를 반환해야 한다", () => {
      const current = "2024년 06월 01일까지";
      const result = "2024년 6월 1일까지";
      expect(removeLeadingZeros(current)).toBe(result);
    });

    it("YYYY년 0M월 DD일 형태인 경우, YYYY년 M월 D일 형태를 반환해야 한다", () => {
      const current = "2024년 06월 11일까지";
      const result = "2024년 6월 11일까지";
      expect(removeLeadingZeros(current)).toBe(result);
    });

    it("YYYY년 MM월 0D일 형태인 경우, YYYY년 MM월 D일 형태를 반환해야 한다", () => {
      const current = "2024년 12월 02일까지";
      const result = "2024년 12월 2일까지";
      expect(removeLeadingZeros(current)).toBe(result);
    });

    it("YYYY년 MM월 DD일 형태인 경우, YYYY년 MM월 DD일 형태를 반환해야 한다", () => {
      const current = "2024년 12월 11일까지";
      const result = "2024년 12월 11일까지";
      expect(removeLeadingZeros(current)).toBe(result);
    });

    it("AA 0H:MM까지 인 경우, 오늘 H:MM형태를 반환해야 한다.", () => {
      const current = "오늘 03:30까지";
      const result = "오늘 3:30까지";
      expect(removeLeadingZeros(current)).toBe(result);
    });

    it("AA HH:OM까지 인 경우, 오늘 HH:M형태를 반환해야 한다.", () => {
      const current = "오늘 12:05까지";
      const result = "오늘 12:5까지";
      expect(removeLeadingZeros(current)).toBe(result);
    });

    it("AA HH:MM까지 인 경우, 오늘 HH:M형태를 반환해야 한다.", () => {
      const current = "오늘 12:15까지";
      const result = "오늘 12:15까지";
      expect(removeLeadingZeros(current)).toBe(result);
    });
  });
});
