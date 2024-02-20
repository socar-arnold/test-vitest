import { describe, expect, it } from "vitest";
import calculateEndTime from "./calculateTime";

describe("utils > calculateTime", ()=>{
    describe('calculateEndTime > 현재시간과 종료시간을 비교하여 적합한 문자열을 반환하여야 한다.', () => { 
        it("만료일이 +2일 뒤인 경우, YYYY년 M월 D일 형태로 나타나야 한다.", ()=>{
            const [currTime, endTime] = ["2024-05-25T12:00:00.000+00:00", "2024-06-01T17:30:00.000+00:00"];
            const expectedResult = '2024년 06월 01일까지';
            expect(calculateEndTime(currTime, endTime)).toBe(expectedResult)
        })

        it("만료일이 +2일 뒤인 경우, YYYY년 M월 D일 형태로 나타나야 한다.", ()=>{
            const [currTime, endTime] = ["2024-05-25T12:00:00.000+00:00", "2024-06-11T17:30:00.000+00:00"];
            const expectedResult = '2024년 06월 11일까지';
            expect(calculateEndTime(currTime, endTime)).toBe(expectedResult)
        })
        
        it("만료일이 +2일 뒤인 경우, YYYY년 MM월 DD일 형태로 나타나야 한다.", ()=>{
            const [currTime, endTime] = ["2024-05-25T12:00:00.000+00:00", "2024-10-01T17:30:00.000+00:00"];
            const expectedResult = '2024년 10월 01일까지';
            expect(calculateEndTime(currTime, endTime)).toBe(expectedResult)
        })

        it("만료일이 +2일 뒤인 경우, YYYY년 M월 DD일 형태로 나타나야 한다.", ()=>{
            const [currTime, endTime] = ["2024-05-25T12:00:00.000+00:00", "2024-11-12T17:30:00.000+00:00"];
            const expectedResult = '2024년 11월 12일까지';
            expect(calculateEndTime(currTime, endTime)).toBe(expectedResult)
        })

        it("만료일이 오늘 자정인 경우, '오늘까지'로 나타나야 한다.", ()=>{
            const [currTime, endTime] = ["2024-05-25T12:00:00.000+00:00", "2024-05-25T23:59:59.000+00:00"];
            const expectedResult = '오늘까지';
            expect(calculateEndTime(currTime, endTime)).toBe(expectedResult)
        })

        it("만료일이 내일 자정인 경우, '내일까지'로 나타나야 한다.", ()=>{
            const [currTime, endTime] = ["2024-05-25T12:00:00.000+00:00", "2024-05-26T23:59:59.000+00:00"];
            const expectedResult = '내일까지';
            expect(calculateEndTime(currTime, endTime)).toBe(expectedResult)
        })

        it("만료일이 오늘 특정 시간인 경우, '오늘 xx까지'로 나타나야 한다.", ()=>{
            const [currTime, endTime] = ["2024-05-25T12:00:00.000+00:00", "2024-05-25T22:30:00.000+00:00"];
            const expectedResult = '오늘 22:30까지';
            expect(calculateEndTime(currTime, endTime)).toBe(expectedResult)
        })

        it("만료일이 내일 특정 시간인 경우, '내일 xx까지'로 나타나야 한다.", ()=>{
            const [currTime, endTime] = ["2024-05-25T12:00:00.000+00:00", "2024-05-26T22:30:00.000+00:00"];
            const expectedResult = '내일 22:30까지';
            expect(calculateEndTime(currTime, endTime)).toBe(expectedResult)
        })
     })
})