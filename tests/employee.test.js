const employee = require("../public/employee")

describe("employee", () => {
    it("can create an employee instance", () =>{
        const emp = new employee();
        expect(typeof(emp)).toBe("object");
    });
    it("can set a name based on constructor.", () => {
        const name = "Greyson";
        const emp = new employee(name);
        expect(emp.name).toBe(name);
    });
    it("can set a id based on constructor.", () => {
        const testVal = 10;
        const emp = new employee("Greyson", testVal);
        expect(emp.id).toBe(testVal);
    });
    it("can set a email based on constructor.", () => {
        const testVal = "greyson@gmail.com";
        const emp = new employee("Greyson", 1, testVal);
        expect(emp.email).toBe(testVal);
    });
});

describe("getName", () => {
    it("can get name from getName()", () =>{
        const name = "Greyson";
        const emp = new employee(name);
        expect(emp.getName()).toBe(name);
    });
});

describe("getId", () => {
    it("can get id from getId()", () =>{
        const testVal = 10;
        const emp = new employee("Greyson",testVal);
        expect(emp.getId()).toBe(testVal);
    });
});

describe("getEmail", () => {
    it("can get email from getEmail()", () =>{
        const testVal = "greyson@gmail.com";
        const emp = new employee("Greyson", 1, testVal);
        expect(emp.getEmail()).toBe(testVal);
    });
});

describe("getRole", () => {
    it("can get role from getRole()", () =>{
        const testVal = "employee";
        const emp = new employee("Greyson", 1, "greyson@gmail.com");
        expect(emp.getRole()).toBe(testVal);
    });
});