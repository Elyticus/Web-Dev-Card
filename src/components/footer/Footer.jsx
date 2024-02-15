/* eslint-disable react/prop-types */
export default function Footer(props) {
  return (
    <footer className="flex-items">
      <img className="image-main" src={props.avatar} alt="profile image" />
      <p>{props.name}</p>
    </footer>
  );
}
