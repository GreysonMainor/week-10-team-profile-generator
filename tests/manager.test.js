const manager = require("../public/manager")

describe("manager", () => {
    it("can set an office number", () =>{
        const testVal = 10;
        const emp = new manager("Greyson", 1, "greyson@gmail.com", testVal);
        expect(emp.officeNumber).toBe(testVal);
    });
    it("can use getRole().", () => {
        const testVal = "manager";
        const emp = new manager("Greyson", 1, "greyson@gmail.com", "officeNumber");
        expect(emp.getRole()).toBe(testVal);
    });
    it("can get an office number.", () => {
        const testVal = 10;
        const emp = new manager("Greyson", 1, "greyson@gmail.com", testVal);
        expect(emp.getOfficeNumber()).toBe(testVal);
    });
});