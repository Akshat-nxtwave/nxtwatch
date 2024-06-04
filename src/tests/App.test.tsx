import { GetJWT } from "../utils/GetJWT";

describe('test', ()=>{

    it('should test for jwt',()=>{
        expect(GetJWT()).toBe("");
    })

})

