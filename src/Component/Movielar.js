import Movie from "./Movie";
export default function Movielar(props){  // bunga main.js dan props qilib olish uchun ma'lumotlar yuborilopti ushani olish uchun bu parametriga props yozib qoyilad
  const {movielar = []} = props; // props.movielar qilib yozmay movielar qilib qisqartirib yozish uchun bunay yoziladi
  return(
    <div className="movies"> 
       {/* 1-usul */}
         {/* {props.movielar.map(movie =>(  // props.movielar.map---maindan bunga yuborilayotgan movielar nomli ma'lumotlni map hammasini alohida olib hammasini movie deb nomlanopti
           <Movie key={movie.imdbId} {...movie} />  // Movie usha statedagi movielar xossasiga joylangan json ma'lumotlar ichidan imdbID degan xossani olib ularni har key deb nomlab va keyin movielarni hammasini olib Movie.js ga yuboropti u propss qilib oladi
         ))} */}

         {/* 2-usul qidirilgan narsa topilmasa nima chiqishi */}
         {movielar.length ? movielar.map(movie => (  // props qilib olinayotga movielarning length yani qqiymati bo'lsa  props.movielar.map---maindan bunga yuborilayotgan movielar nomli ma'lumotlni map hammasini alohida olib hammasini movie deb nomlanopti
           <Movie key={movie.imdbID} {...movie} />  // Movie usha statedagi movielar xossasiga joylangan json ma'lumotlar ichidan imdbID degan xossani olib ularni har key deb nomlab va keyin movielarni hammasini olib Movie.js ga yuboropti u propss qilib oladi
         )) : 
              (<div>  {/* agar movielar length qiymati qo'lmasa yani api linkdan hech narsa olib kelinmasa bu yozuv chiqadi */}
                <h1>siz qidirgan ma'lumotlar topilmadi</h1>
                </div>)}
    </div>
  )
}