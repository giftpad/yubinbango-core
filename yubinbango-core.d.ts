declare module YubinBango {
    class Core {
        URL: string;
        REGION: string[];
        constructor(inputVal?: string, callback?: any);
        chk7(val: string): string;
        addrDic(region_id?: string, region?: string, locality?: string, street?: string, extended?: string): {
            [key: string]: string;
        };
        selectAddr(addr: string[]): {
            [key: string]: string;
        };
        jsonp(url: string, fn: any): void;
        getAddr(yubin7: string, fn: any): {
            [key: string]: string;
        };
    }
}
export = YubinBango;
