/* eslint-disable react/prop-types */
export default function Main(props) {
  return (
    <main>
      <p className="label-main">{props.label}</p>
      <p className="date-main">{props.date}</p>
      <h2 className="title-main">{props.title}</h2>
      <p className="description-main">{props.description}</p>
    </main>
  );
}
