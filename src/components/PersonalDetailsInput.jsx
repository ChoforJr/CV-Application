export function PersonalDetailsInput({ personalDetails, setpersonalDetails }) {
  function handlePDChange(event) {
    if (event.target.id === "fullName") {
      setpersonalDetails({ ...personalDetails, fullName: event.target.value });
    } else if (event.target.id === "email") {
      setpersonalDetails({ ...personalDetails, email: event.target.value });
    } else if (event.target.id === "phoneNumber") {
      setpersonalDetails({
        ...personalDetails,
        phoneNumber: event.target.value,
      });
    } else if (event.target.id === "location") {
      setpersonalDetails({ ...personalDetails, location: event.target.value });
    }
  }
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
          onChange={handlePDChange}
        />
      </label>
      <label>
        Email{" "}
        <input
          id="email"
          type="email"
          placeholder="E-mail"
          value={personalDetails.email}
          onChange={handlePDChange}
        />
      </label>
      <label>
        phoneNumber{" "}
        <input
          id="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          value={personalDetails.phoneNumber}
          onChange={handlePDChange}
        />
      </label>
      <label>
        location{" "}
        <input
          id="location"
          type="text"
          placeholder="Location"
          value={personalDetails.location}
          onChange={handlePDChange}
        />
      </label>
    </section>
  );
}
