import React from "react";
import Loader from "../Component/Loader";
import Movielar from "../Component/Movielar";
import Search from "../Component/Search";

export default class Main extends React.Component {
  state = {
    movielar: [],  // statega movielar degan xossali bo'sh massiv yaratildi va uni ichiga keyin SetState bilan elementlar joylanadi
    loading: true   //loading deb ochib uni true deymiz boshida tru bulib ishlab turishi uchun keyin sahifa yuklanib bugandan keyin false ga uzgaradi
  }
    
    componentDidMount() {  // saytga kirishimiz bilan 1- ishga tushadgon funcsiya bu
      fetch('http://www.omdbapi.com/?apikey=329ffa13&s=panda')  // manashu api linkdan json formatdagi elementlarni olib keladi
      .then(response => response.json())  // tepadagiga response deb nom berilib undan json olinopti agar json olinsa pastdagi ishga tushadi
      .then(data => this.setState({movielar: data.Search, loading: false}))  // tepadagi olingan narsa data deb nomlanopti va setState bilan statedagi movielar ga manashu dataning ichidagi Search deganini olopti bu Search massiv bulib uning ichida bir qancha jsonlar bor ushalani movielarga joylayopti u jsonlarga rasmlar va textlar ma'lumotlar bor  //tepadagi linkdan narsa olib bulingandan keyin loading o'chirib qo'yiladi false qilib
    }

    searchMovies = (str, type = 'all') => {  // funcsiya ochilib unga 2 parametr berilopti bu funsiyani search.js isshlatib bunga statedagi search qiymati bilan type qiymati beriladi va pastdagi linkga shu qiymatlar qo'shiladi
    this.setState({loading: true}) // bu funcsiya ishga tushishi bilan loading true bulib ishga tushadi va pastdagi linkdan ma'lumotlar olib kelingandan keyin loading false qilib o'chiriladi
     fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)   // str parametri qiymati berilopti keyn agar type all ga teng bo'lmasa type ga nima bo'lsa o'shani qo'shadi all ga teng bo'lsa esa hech narsani qo'shmaydi
      .then(response => response.json())  // tepadagiga response deb nom berilib undan json olinopti agar json olinsa pastdagi ishga tushadi
      .then(data => this.setState({movielar: data.Search, loading: false}))  // tepadagi olingan narsa data deb nomlanopti va setState bilan statedagi movielar ga manashu dataning ichidagi Search deganini olopti bu Search massiv bulib uning ichida bir qancha jsonlar bor ushalani movielarga joylayopti u jsonlarga rasmlar va textlar ma'lumotlar bor //tepadagi linkdan narsa olib bulingandan keyin loading o'chirib qo'yiladi false qilib
     }
    
//   render() {    // 1-usuli
//     return (
//       <div className="container content">
//         <Search searchMovies={this.searchMovies} />  {/* Search.js ga searchMovie funcsiyasini yuboropti u search.js esa bu funcsiyani props orqali olib ishlatadi */}
//         {this.state.movielar.length ?  /* agar state dagi movielar ni ichidagilarga length yani bror element bo'lsa pastdagini chiqaradi */
//          (<Movielar movielar={this.state.movielar} />) :   /*movielar deb nomlanib Movielar.js ga statedagi movielar xossasidagi json narsa yuborilopti buni Movielar.js dan props qilib olinadi
//          /* movielarga bror element json api linkdan olib kelinib qo'shilishi bilan ishga tushadi bu */
//           <h1>Loading....</h1>}    agar statedagi movielar ga hali bror narsa bo'lmasa bror narsa qo'shilgancha bu ichga tushadi
//       </div>
//     )
//    }
// }
  render() {
    return (
      <div className="container content">
        <Search searchMovies={this.searchMovies} />  {/* Search.js ga searchMovie funcsiyasini yuboropti u search.js esa bu funcsiyani props orqali olib ishlatadi */}
           {this.state.loading ? <Loader /> : (<Movielar movielar={this.state.movielar} />)}  {/* agar loading true bo'lsa h1 da */}
        </div>
    )
   }
}