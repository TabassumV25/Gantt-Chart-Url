export interface User{
    id?:string,
    role?:string,
    userName?:string,
    department?:string,
    initiatedBy?:string,
    date:string | Date,
    
}
export interface RegUser{
    userName?:string;
    userId?:string,
    role?:string,
    category?:string,
    department?:string,
    employeeId?:string,
    email?:string

}
export interface newUserActivation{
    userName?:string;
    id?:string,
    role?:string,
   
}