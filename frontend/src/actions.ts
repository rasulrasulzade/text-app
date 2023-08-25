import {TextsResponseType} from "./types";

const baseURL = "http://localhost:8080"

const url: URL = new URL(baseURL + "/texts");


export const saveText = async (text: String) => {
    const data: { text: String } = {text}
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export const getTexts = async (): Promise<TextsResponseType> => {
    const response = await fetch(url);
    return await response.json();
}

export const deleteText = async (id: number) => {
    await fetch(url + "/" + id, {
        method: "DELETE",
    });
}