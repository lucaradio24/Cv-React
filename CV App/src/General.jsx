import { useState } from "react";

export function General({ general, setGeneral }) {
  return (
    <div className="card personal">
      <h2><i class="fa-solid fa-user"></i> Personal details</h2>
      <label for="fullName">Full name</label>
      <input
        type="text"
        name="fullName"
        value={general.name}
        onChange={(e) => setGeneral({ ...general, name: e.target.value })}
      />

      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        value={general.email}
        onChange={(e) => setGeneral({ ...general, email: e.target.value })}
      />

      <label for="phone">Phone</label>
      <input
        type="phone"
        name="phone"
        value={general.phone}
        onChange={(e) => setGeneral({ ...general, phone: e.target.value })}
      />

      <label for="location">Location</label>
      <input
        type="text"
        name="location"
        value={general.location}
        onChange={(e) => setGeneral({ ...general, location: e.target.value })}
      />
    </div>
  );
}
