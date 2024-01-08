import {default as Contract} from "../Contracts/Services/ObjectUtility.js";
class ObjectUtility implements Contract {
    toArray<ObjectType extends Object >(input: ObjectType): (ObjectType[keyof ObjectType])[] {
        const result : (ObjectType[keyof ObjectType])[] = [];
        const keys: (keyof ObjectType)[] = <(keyof ObjectType)[]> Object.keys(input);
        let key : keyof ObjectType;
        for (key of keys) {
            result.push(input[key]);
        }
        return result;
    }
}
export default ObjectUtility;


