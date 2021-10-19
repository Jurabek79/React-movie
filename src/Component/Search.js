import React from "react";

export default class Search extends React.Component{
  state = { // uzgaruvchi ma'lumotlarni saqlash uchun state yaratlopti
    Search: 'panda',  // poisk berilgan so'z shunga tushadi va maindagi linkni oxiriga qoyiladi shu so'z
    type: 'all'  // checkboxning typi bu
  }
  handlekey = (e) => {    // buni inputga onKeyDown bilan beriladi
    if(e.key === 'Enter') { // search inputga bror nima yozilib keyin Enter bosilsa ishlaydi 
      this.props.searchMovies(this.state.Search, this.state.type);  //  props bilan olinotgan searchMovie funcsiyasiga Search bilan type parametr qilib berilopti bu parametr qilib berotgan ma'lumotlarni searchMovie usha api linkni oxirida qoyib ulaydi
    }
  }
  handleFilter = (e) => {  // buni checkbox ga onChange bilan beriladi 
    this.setState( () => ({type: e.target.dataset.type}), () => {   // statedagi type ga chexboxni data-type deganidagi qiymatini olib joylayopti va 2-funcsiya
     this.props.searchMovies(this.state.Search, this.state.type)    // props bilan olinotgan searchMovies ga stateni searchi bilan type sidagilani olib qiymat qilib beropti
    })
  }
  render() {
    return(
      <div className="row">
      <div className="col s12">
          <div className="input-field inline">
            <input type="search"  
             placeholder="Search"
              className="validate" 
              value={this.state.Search}  // bu yozilmasa ham ishlayveradi
               onChange={(e) => this.setState({Search: e.target.value})}  // bu statedagi Searchga shu inputga yozilgan textni yani qiymatini joylayopti va statedagi searchda bu ma'lumotlar olinib usha api linkini oxiriga qushib qoyiladi
               onKeyDown={this.handlekey}  // onKeyDown bu inputga bror nima yozib Enter bosilganda shu onKeyDown ni ichidagi ishlaydi
            />
              <button onClick={()=> this.props.searchMovies(this.state.Search, this.state.type)}>  {/* btn onClick busa props qilib olinotgan searchMovie funcsiyasiga statedagi Search bilan type ni ma'lumotlarni parametr qilib beropti  va u funcsiya bu ma'lumotlarni api linkga qo'shib kyn usha linkga kiradi*/}
                Search
              </button>
              {/* ------- */}
              <div>
              <label>
            <input className="width-gap"
             name="type" type="radio"  // ismi statedagi type bn 1 xil bulishi kk kyn typesi buni radio
              data-type="all"   // bu all statedagi type ga beriladi va u api linkka qushishi kk lekin faqat buni qoshmaydi chunki qushmasa ham hammasini ko'rsatadi qolganllarnini linkini oldiga qo'shadi
              onChange={this.handleFilter} // onChange bu bosilganganda on changeni ichidagi funcsiyani uziga ishga tushiradi
              checked={this.state.type === 'all'} />  {/* agar statedagi type all ga teng bulsa bu shart tug'ri buladi va true qaytaradi keyin bu checkbox yonadi hozir statedagi all boshlang'ich holati all ga tenglab qoyilgan shu uchun bu yoniq turadi keyin uzgartrsa buladi */}
              <span>All</span>
              </label>
              <label>
                 <input className="width-gap" name="type" type="radio" data-type="movie"  //shu data-type dagi movie statedagi typega qo'shiladi va u ma'lumot api linkka qushiladi va poisk bergan bladi
                  onChange={this.handleFilter} checked={this.state.type === 'movie'} />  {/* state type movie ga teng bo'lsa bu shart rost bo'ladi va bu checkbox yonadi */}
                 <span>movies</span>
              </label>
              <label>
                 <input className="width-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'} />
                 <span>series only</span>
              </label>
              </div>
        </div>
      </div>
    </div>
    )
  }
}