import jwt_decode from "jwt-decode";

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

interface ITokenPayload {
    isAuth: boolean;
    username: string;
    exp?: number;
    iss?: string;
    iat?: number;
}

export const jwtDecod = (token: string): ITokenPayload => {
    const { isAuth, username }: ITokenPayload = jwt_decode(token);
    return { isAuth, username };
};

export const getUserDataLocal = (): ITokenPayload => {
    return JSON.parse(localStorage.getItem("user") || "{}");
};
