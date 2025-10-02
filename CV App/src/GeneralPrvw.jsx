import { General } from "./General";
import { App } from "./App";

export function GeneralPrvw({general}){
    return(
        <>

        <div className="name-prvw">
            <h1>Nome: {general.name}</h1>
        </div>

        <div className="general-details">
            <p>Email: {general.email}</p>
            <p>Phone: {general.phone}</p>
            <p>Location: {general.location}</p>
        </div>
        </>
    )
}