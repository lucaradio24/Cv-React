import { useState } from "react";

export function General({ general, setGeneral }){
    return (
        <div className="card">
        <input
        type='text'
        value={general.name}
        onChange={e => setGeneral({...general, name: e.target.value})}
        />
        
        <input
        type="email"
        value={general.email}
        onChange={e => setGeneral({...general, email: e.target.value})}
        />

        <input
        type="phone"
        value={general.phone}
        onChange={e => setGeneral({...general, phone:e.target.value})}
        />
        </div>
    )
}