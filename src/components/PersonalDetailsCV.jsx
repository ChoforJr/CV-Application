export function PersonalDetailsCV({ personalDetails }) {
  return (
    <section className="personalDetailsCV">
      <h1>{personalDetails.fullName}</h1>
      <div>
        <p key="email">{personalDetails.email}</p>
        <p key="phoneNumber">{personalDetails.phoneNumber}</p>
        <p key="location">{personalDetails.location}</p>
      </div>
    </section>
  );
}
