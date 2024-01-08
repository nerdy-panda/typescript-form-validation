class ObjectUtility {
    toArray(input) {
        const result = [];
        const keys = Object.keys(input);
        let key;
        for (key of keys) {
            result.push(input[key]);
        }
        return result;
    }
}
export default ObjectUtility;
//# sourceMappingURL=ObjectUtility.js.map