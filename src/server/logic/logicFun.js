export function checkIfEmailisValid(email) {
    if(email.includes("@")){
        console.log("Es hat ein @", email)
        return true;
    }else{
        console.log("Es hat kein @", email)
        return false;
    }
}
