import { General } from "./General";
import { App } from "./App";

export function GeneralPrvw({general}){
    return(
        <>

        <div className="name-prvw">
            <h1>{general.name}</h1>
        </div>

        <div className="general-details">
            <p> <i class="fa-solid fa-envelope"></i> {general.email}</p>
            <p><i class="fa-solid fa-phone"></i> {general.phone}</p>
            <p><i class="fa-solid fa-location-dot"></i> {general.location}</p>
        </div>
        </>
    )
}