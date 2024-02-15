/* eslint-disable react/prop-types */
export default function Header(props) {
  return (
    <header>
      <img className="header-img" src={props.image} alt="Header Code image" />
    </header>
  );
}
