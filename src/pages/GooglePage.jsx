const MyLoop = () => {
  let data = [1, 2, 3, 4, 5]
  return data.map( d => <li key={d}>{d}. Ada</li>)
};

const GooglePage = (props) => {
  let modTitle = "Ada: " + props.title;

  return (
    <div className="google-page">
      <h1>AdaBrain.tv</h1>
      <h2>{props.title}</h2>
      <h2>{modTitle}</h2>

      <MyLoop />

    </div>
  );
};

export default GooglePage;
