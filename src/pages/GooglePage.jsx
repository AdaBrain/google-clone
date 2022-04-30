import "../static/css/googlePage.css"

// Simple loop in React
const MyLoop = () => {
  let data = [1, 2, 3, 4, 5]
  return data.map( (d, idx) => (
    <ul>
      {
        idx % 2 === 0
        ? <li className="green" key={d}>{d}. Ada</li>
        : <li className="red" key={d}>{d}. Ada</li>
      } 
    </ul>  
  ))
};

const movies = [
  {'name': 'The Matrix', 'rating': 5},
  {'name': 'Starwars III', 'rating': 5},
  {'name': 'The Social Network', 'rating': 4.5},
  {'name': 'Faster', 'rating': 2},
  {'name': 'SourceCode', 'rating': 3.5},
]

const MovieRender = props => {
  return props.data.map( d => (
    <div className="movie-items" key={d.name}>
      <h1>Movie name: {d.name}</h1>
      { 
        d.rating >= 4
        ? <h2 className="green" >Rating: {d.rating}</h2>
        : <h2 className="red" >Rating: BAD! {d.rating}</h2>
      }
    </div>
  ))
}

const GooglePage = (props) => {
  let modTitle = "Ada: " + props.title;

  return (
    <div className="google-page">
      <h1>AdaBrain.tv</h1>
      <h2>{props.title}</h2>
      <h2>{modTitle}</h2>

      <MyLoop />
      <br />
      <MovieRender data={movies} />
    </div>
  );
};

export default GooglePage;
