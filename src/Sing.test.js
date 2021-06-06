import { render, fireEvent } from "@testing-library/react";
import Sing from "./Components/Sing/Sing";

const testImport = () => {
    const mock = jest.fn();
    const sing = render(<Sing onMock={mock}/>);
    const form = sing.getByLabelText("singForm");
    const inputUserName = sing.getByPlaceholderText("Enter your username");
    const inputPassword = sing.getByPlaceholderText("Enter your password");
    return {sing,form,inputUserName,inputPassword,mock};
}

describe("Form value sing", () => {
    
    test("username must not have numbers", () => {
        const {inputUserName,inputPassword,mock,form} = testImport();
        fireEvent.change(inputUserName,{target:{value:"12santiago"}});
        fireEvent.change(inputPassword, {target:{value:"Avemaria123@ee"}});
        fireEvent.submit(form);
        expect(mock).toHaveBeenCalledWith("Please enter a user without numbers");
    })

    test("password must meet security conditions", () => {
        const {inputUserName,inputPassword,mock,form} = testImport();
        fireEvent.change(inputUserName,{target:{value:"santiagogui"}});
        fireEvent.change(inputPassword, {target:{value:"Ave"}});
        fireEvent.submit(form);
        expect(mock).toHaveBeenCalledWith("Incorrect password!");
    })

    test("input check", () => {
        const {form,mock,inputUserName,inputPassword} = testImport();
        fireEvent.change(inputUserName, {target:{value:"santiagoGui"}});
        fireEvent.change(inputPassword, {target:{value:"Avemaria123@ee"}});
        fireEvent.submit(form);
        expect(mock).toHaveBeenCalledWith("wellcome");
    })

    test("correct user login", () => {
        const {inputUserName} = testImport();
        fireEvent.change(inputUserName, {target:{value:"santiagoGui"}});
        expect(inputUserName.value).toBe("santiagoGui");
    })

    test("correct password", () => {
        const {inputPassword} = testImport();
        fireEvent.change(inputPassword, {target:{value:"Santigo13/dd"}});
        expect(inputPassword.value).toBe("Santigo13/dd");
    })
})