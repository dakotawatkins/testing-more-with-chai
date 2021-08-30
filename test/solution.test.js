const expect = require("chai").expect;
const findStudentByName = require("../src/solution");

describe("findStudentByName", () => {
    it("should return the given students object", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
        ];
        const actual = findStudentByName(students, "Natalee Vargas")
        const expected = { name: "Natalee Vargas", score: 9.2 };
        expect(actual).to.eql(expected);
    });

    it("should return null if incorrect student name is given", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
        ];
        const name = undefined;
        const actual = findStudentByName(students, name);
        expect(actual).to.be.null;
      });
})