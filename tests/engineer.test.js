const engineer = require("../public/engineer")

describe("engineer", () => {
    it("can set a github account", () =>{
        const testVal = "Placeholder"
        const emp = new engineer("Greyson", 1, "greyson@gmail.com", testVal);
        expect(emp.github).toBe(testVal);
    });
    it("can use getRole().", () => {
        const testVal = "engineer";
        const emp = new engineer("Greyson", 1, "greyson@gmail.com", "gitHubPlaceHolder");
        expect(emp.getRole()).toBe(testVal);
    });
    it("can get a github account.", () => {
        const testVal = "Placeholder";
        const emp = new engineer("Greyson", 1, "greyson@gmail.com", testVal);
        expect(emp.getGithub()).toBe(testVal);
    });
});