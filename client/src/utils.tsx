interface IValidateError {
    message: string;
}

class ValidateForm {
    pass(str: string): IValidateError[] {
        const errorsList: IValidateError[] = [];
        if (str.length < 6) errorsList.push({ message: "pass too short" });
        return errorsList;
    }

    login(str: string): IValidateError[] {
        const errorsList: IValidateError[] = [];
        if (str.length < 4) errorsList.push({ message: "login too short" });
        return errorsList;
    }
}

export const validateForm = new ValidateForm();
