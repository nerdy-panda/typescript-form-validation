interface Rule {
    validate(value:string):boolean;
    message():string;
}
export default Rule ;