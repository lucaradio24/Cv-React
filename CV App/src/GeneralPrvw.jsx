import { General } from "./General";
import { App } from "./App";

export function GeneralPrvw({general}){
    return(
        <>
        <p>Nome: {general.name}</p>
        <p>Email: {general.email}</p>
        <p>Phone: {general.phone}</p>
        </>
    )
}