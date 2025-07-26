import email from "/email.svg";
import phone from "/phone.svg";
import mapMarker from "/map-marker.svg";

export function PersonalDetailsCV({ personalDetails }) {
  return (
    <section className="personalDetailsCV">
      <h1 key="name">{personalDetails.fullName}</h1>
      <div>
        <span>
          <img src={email} alt="Email icon" />
          <p key="email">{personalDetails.email}</p>
        </span>
        <span>
          <img src={phone} alt="phone icon" />
          <p key="phoneNumber">{personalDetails.phoneNumber}</p>
        </span>
        <span>
          <img src={mapMarker} alt="location icon" />
          <p key="location">{personalDetails.location}</p>
        </span>
      </div>
    </section>
  );
}
