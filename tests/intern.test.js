const intern = require("../public/intern")

describe("intern", () => {
    it("can set a school", () =>{
        const testVal = "Placeholder"
        const emp = new intern("Greyson", 1, "greyson@gmail.com", testVal);
        expect(emp.school).toBe(testVal);
    });
    it("can use getRole().", () => {
        const testVal = "intern";
        const emp = new intern("Greyson", 1, "greyson@gmail.com", "school");
        expect(emp.getRole()).toBe(testVal);
    });
    it("can get a school.", () => {
        const testVal = "Placeholder";
        const emp = new intern("Greyson", 1, "greyson@gmail.com", testVal);
        expect(emp.getSchool()).toBe(testVal);
    });
});