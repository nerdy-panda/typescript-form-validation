class Patterns  {
    static firstName : RegExp = /^[a-z]+(\s[a-z]+)*$/i;
    static lastName : RegExp = Patterns.firstName ; 
    static email :RegExp = /^\w+@\w+\.\w+$/;
    static url :RegExp = /^(https?:\/\/)?(www\.)?\w+\.\w+(\.\w+)*$/ ; 
}
export default Patterns;