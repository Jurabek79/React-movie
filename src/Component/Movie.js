/* eslint-disable jsx-a11y/alt-text */
export default function Movie(props) {
  // const {Title, Year, imdbID, Type, Poster} = props;  // {} ichidagilarni hammasini oldiga props qoyib chiqopti endi ularni oldiga props.title ....... qpyish shartmas Titleni uzini qoysa buldi
  return(
    <div key={props.imdbID} className="card movie">  {/* key ni qoymasa ham ishlaydi */}
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={props.Poster} /> { /* json fayllarning Poster degan xossalarida rasmlarning linklari bor bu o'sha linklarni olopti */}
     </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.Title}<i   /* json faylning titlesida qanday ma'lumot yozilgan bulsa shu spanning kattaligida chiqaradi */
       className="material-icons right">more_vert</i></span>
      <p>{props.Year} <span className="right">{props.Type}</span></p>  {/* p ni ichiga jsonning Year xosasi malumoti billan spanni ichiga Type xossasini ihidagi ma'lumotni chiqad=radi */}
    </div>
  </div>
            
  )
}