export function PersonalDetailsCV({ personalDetails }) {
  return (
    <section className="personalDetailsCV">
      <h1 key="name">{personalDetails.fullName}</h1>
      <div>
        <span>
          <img src="public/email.svg" alt="Email icon" />
          <p key="email">{personalDetails.email}</p>
        </span>
        <span>
          <img src="public/phone.svg" alt="Email icon" />
          <p key="phoneNumber">{personalDetails.phoneNumber}</p>
        </span>
        <span>
          <img src="public/map-marker.svg" alt="Email icon" />
          <p key="location">{personalDetails.location}</p>
        </span>
      </div>
    </section>
  );
}
