export interface todolist {
   item:string,
   completed:string,
}
export interface Notes {
    note:string,
    link:string,
    filename:string,
    todos:todolist[],
    type:string,
    status:string,
    createddate:Date,
    createdby:string,
}

