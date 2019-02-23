import React from 'react';

import SearchResultText from '../SearchResultText/SearchResultText'
import searchresult_image from './purpose-group-searchresult.png'


// export default function SearchResultPanel() {
//     return (
//         <div className='SearchResultPanel'>
//             <SearchResult />
//             <SearchResult />
//             <SearchResult />
//         </div>
//     )
// }


class SearchResultsPanel extends React.Component {
    constructor(){
        super();
        this.state = {
          Button_1: true,
          Button_2: false,
          Button_3: false,
        }
    }
  
    changeColor_1(){
       this.setState({
         Button_1: true,
         Button_2: false,
         Button_3: false,
        })
    }
    changeColor_2(){
      this.setState({
        Button_1: false,
        Button_2: true,
        Button_3: false,
       })
    }
    changeColor_3(){
      this.setState({
        Button_1: false,
        Button_2: false,
        Button_3: true,
       })
    }
   
  
    
    render(){
        let Button_1_class = this.state.Button_1 ?
            "SearchResultActive" :
            "SearchResultPassive"
        ;
        let Button_2_class = this.state.Button_2 ?
            "SearchResultActive" :
            "SearchResultPassive"
        ;
        let Button_3_class = this.state.Button_3 ?
            "SearchResultActive" :
            "SearchResultPassive"
        ;
  
        return (
          <div className='SearchResultPanel'>

            <div className={Button_1_class} onClick={this.changeColor_1.bind(this)}>
                <img src={searchresult_image}
                    className="purpose-group-searchresult-image"
                    alt="purpose-group-searchresult" />
                <SearchResultText
                    title='Bethnal Green'
                    type='Office'
                    short_description='Short description'
                    long_description='Long Description long long long long long long 
                    long long long long long long long long long long long' />
            </div>
            <div className={Button_2_class} onClick={this.changeColor_2.bind(this)}>
                <img src={searchresult_image}
                    className="purpose-group-searchresult-image"
                    alt="purpose-group-searchresult" />
                <SearchResultText
                    title='London Bridge'
                    type='Office'
                    short_description='Short description'
                    long_description='Long Description long long long long long long 
                    long long long long long long long long long long long' />
            </div>
            <div className={Button_3_class} onClick={this.changeColor_3.bind(this)}>
                <img src={searchresult_image}
                    className="purpose-group-searchresult-image"
                    alt="purpose-group-searchresult" />
                <SearchResultText
                    title='Bermondsey'
                    type='Studio'
                    short_description='Short description'
                    long_description='Long Description long long long long long long 
                    long long long long long long long long long long long' />
             </div>
  
          </div>
        )
    }
  }
  
  export default SearchResultsPanel;