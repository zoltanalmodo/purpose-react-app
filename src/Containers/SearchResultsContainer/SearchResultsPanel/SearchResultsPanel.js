import React from 'react';

import SearchResultImage from './SearchResultImage/SearchResultImage'
import SearchResultText from '../SearchResultText/SearchResultText'
import searchresult_image_bethnal_green
    from './purpose-group-searchresult-bethnal-green.png'
import searchresult_image_london_bridge
    from './purpose-group-searchresult-london-bridge.png'
import searchresult_image_bermondsey
    from './purpose-group-searchresult-bermondsey.png'


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
   
    render() {
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

                <SearchResultImage 
                    searchresult_image = {searchresult_image_bethnal_green}/>
                <SearchResultText
                    title='BETHNAL GREEN'
                    short_description='CAMBRIDGE HEATH ROAD'
                    long_description='Our newest site 5 mins walk from Bethnal Green
                    station, featuring 12000 sq. ft of affordable workspace, cafe,
                    cultural space, courtyard & workshops.' />
            </div>

            <div className={Button_2_class} onClick={this.changeColor_2.bind(this)}>

                <SearchResultImage 
                    searchresult_image = {searchresult_image_london_bridge}/> 
                <SearchResultText
                    title='LONDON BRIDGE'
                    short_description='CAPITAL HOUSE'
                    long_description='Located immediately adjacent to the newly
                    redeveloped London Bridge Station and overlooking The Shard.' />
            </div>

            <div className={Button_3_class} onClick={this.changeColor_3.bind(this)}>

                <SearchResultImage 
                    searchresult_image = {searchresult_image_bermondsey}/>
                <SearchResultText
                    title='BERMONDSEY'
                    short_description='MANY HANDS'
                    long_description='Our Many Hands creative workspace in Bermondsey
                     provides a huge array of studios for freelancers, artists,
                     makers and start-ups as well as exhibition space.' />
             </div>
  
          </div>
        )
    }
  }
  
  export default SearchResultsPanel;


