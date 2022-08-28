export interface op_config{
    x?:number;
    y?:number;
    w?:number;
    h?:number;
    c?:string;
}

export type fn_type = (options?: any)=>any;


export type event_type = (fn_type)[]