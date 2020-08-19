const{ add, subtract, multiply, divide, clearAllfields } = require("./calculator");

// Three Tests for Addition.
describe("valid additions",() => {
    test ("1 + 1 = 2", () => {
        expect(add(1, 1)).toEqual(2);
    });

    test("10 + 20 = 30", () => {
        expect(add(10, 20)).toEqual(30);
    });

});

 test("9 +9 =18", () =>{
     expect(add(9,9)).not.toBe(20);
 })

 // Three tests for Subtraction.

describe("valid subtraction",() => {
    test ("1 - 1 = 0", () => {
        expect(subtract(1, 1)).toEqual(0);
    });

    test("10 - 20 = -0", () => {
        expect(subtract(10, 20)).toEqual(-10);
    });

    test("99 - 199 =-100", ()=>{
        expect(subtract(99,199)).toBe(-100);
    });
   

});

 
// Two tests for Division.
describe("valid division",() => {
    test ("6 / 3 = 2", () => {
        expect(divide(6, 3)).toEqual(2);
    });

    test("5 /2 = 2.5", () => {
        expect(divide(5, 2)).toBe(2.5);
    });

});
// Two tests for Multiplication
describe("valid multiplication",() => {
    test ("19 * 3 = 57", () => {
        expect(multiply(19, 3)).toEqual(57);
    });

    test("5.25 * 3.98 = 20.895", () => {
        expect(multiply(5.25, 3.98)).toBe(20.895);
    });

});
// Two tests for clearAllfields.
describe("valid clearAllfield",() => {
    test ("21 - 21 = 0", () => {
        expect(subtract(21, 21)).toBe(0);
    });

    test("9-9 = 0", () => {
        expect(subtract(9, 9)).toEqual(0);
    });

});

// Two tests for decimals.
describe("valid decimals",() => {
    test ("0.95 * 1.3 = 1.2349999999999999", () => {
        expect(multiply(0.95, 1.3)).toEqual(1.2349999999999999);
    });

    test("1.25/2 = 0.625", () => {
        expect(divide(1.25, 2)).toEqual(0.625);
    });

});
// Two test for decimals( floating point numbers) using matchers 
describe("valid decimals",() => {
    test ("0.99 * 1.3 = 1.287", () => {
        expect(multiply(0.99, 1.3)).toBeCloseTo(1.287);
    });

    test("1.9/2.1 = 0.9047", () => {
        expect(divide(1.9, 2.1)).toBeCloseTo(0.9047);
    });
});

 // To match strings
test('there is no O in apple', () => {
    expect('apple').not.toMatch(/O/);
  });
  
  test('but there is a "strange" in Stranger', () => {
    expect('stranger').toMatch(/strange/);
  });