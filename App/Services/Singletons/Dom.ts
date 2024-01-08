import { default as ServiceContract } from "../../Contracts/Services/Dom.js"
import {default as DomService } from "../Dom.js";
class Dom {
    protected static service : null | ServiceContract = null ;
    public static instance():ServiceContract {
        if(Dom.serviceIsNotNull())
            return (Dom.service as ServiceContract);
        Dom.service = new DomService();
        return Dom.service;
    }
    protected static serviceIsNull():boolean {
        return Dom.service==null;
    }
    protected static serviceIsNotNull():boolean {
        return !Dom.serviceIsNull();
    }
}
export default Dom;