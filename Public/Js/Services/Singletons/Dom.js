import { default as DomService } from "../Dom.js";
class Dom {
    static instance() {
        if (Dom.serviceIsNotNull())
            return Dom.service;
        Dom.service = new DomService();
        return Dom.service;
    }
    static serviceIsNull() {
        return Dom.service == null;
    }
    static serviceIsNotNull() {
        return !Dom.serviceIsNull();
    }
}
Dom.service = null;
export default Dom;
//# sourceMappingURL=Dom.js.map