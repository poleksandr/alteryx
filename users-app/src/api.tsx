import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const url = "http://localhost:3000/users";

export const findAll = async () => {
    try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
    } catch (error) {
    console.log("error", error);
    }
};

export const create = async (firstName: string, lastName: string, email: string, password: string) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })
    };
    const response = await fetch('http://localhost:3000/users/', requestOptions);
    const data = await response.json();
}

export const remove = async (id: string) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    };
    const response = await fetch('http://localhost:3000/users/' + id, requestOptions);
    const data = await response.json();
}
