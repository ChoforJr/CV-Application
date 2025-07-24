export function PersonalDetailsInput({ personalDetails, onChangePD }) {
  return (
    <section className="personalDetailsInput">
      <h1>Personal Details</h1>
      <label>
        Full Name{" "}
        <input
          id="fullName"
          type="text"
          placeholder="Full Name"
          value={personalDetails.fullName}
          onChange={onChangePD}
        />
      </label>
      <label>
        Email{" "}
        <input
          id="email"
          type="email"
          placeholder="E-mail"
          value={personalDetails.email}
          onChange={onChangePD}
        />
      </label>
      <label>
        phoneNumber{" "}
        <input
          id="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          value={personalDetails.phoneNumber}
          onChange={onChangePD}
        />
      </label>
      <label>
        location{" "}
        <input
          id="location"
          type="text"
          placeholder="Location"
          value={personalDetails.location}
          onChange={onChangePD}
        />
      </label>
    </section>
  );
}
