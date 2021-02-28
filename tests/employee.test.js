const employee = require("../public/employee")

describe("employee", () => {
    it("can create an employee instance", () =>{
        const emp = new employee();
        expect(typeof(emp)).toBe("object");
    });

    it("can set a name based off of input.", () => {
        const name = "Greyson";
        const emp = new employee(name);
        expect(emp.name).toBe(name);
    })

    it
})