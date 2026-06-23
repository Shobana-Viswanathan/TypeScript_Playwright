function showDetails(id:number,name:string,email_id?:string){
    console.log("ID:",id,"Name:",name)
    if(email_id!=undefined)
console.log("Email-id:",email_id);

}
showDetails(101,"Virat kohli");
showDetails(103,"Dhoni","dhoni@gmail.com")