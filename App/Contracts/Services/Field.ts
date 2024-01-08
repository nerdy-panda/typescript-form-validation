import Rule from "./Rule";

interface Field {
    row : HTMLElement , errorContainer : HTMLElement ,
    element : HTMLInputElement , rules : Rule[]
}

export default Field;