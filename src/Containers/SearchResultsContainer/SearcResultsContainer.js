import React from 'react'

import SearchResultImage from './SearchResultsPanel/SearchResultImage/SearchResultImage'
import SearchResultText from './SearchResultText/SearchResultText'
import SearchResultsGoogleMap 
    from './SearchResultsGoogleMap/SearchResultsGoogleMap'
import SearchResultsGallery
    from '../../Containers/SearchResultsContainer/SearchResultsGallery/SearchResultsGallery'
import FloorPlanContainer
    from '../../Containers/FloorPlanContainer/FloorPlanContainer'

import searchresult_image_bethnal_green
    from './SearchResultsPanel/purpose-group-searchresult-bethnal-green.png'
import searchresult_image_london_bridge
    from './SearchResultsPanel/purpose-group-searchresult-london-bridge.png'
import searchresult_image_bermondsey
    from './SearchResultsPanel/purpose-group-searchresult-bermondsey.png'


import purpose_group_googlemapresult_bethnal_green
    from './purpose-group-googlemapresult-bethnal-green.png'
import purpose_group_googlemapresult_london_bridge
    from './purpose-group-googlemapresult-london-bridge.png'
import purpose_group_googlemapresult_bermondsey
    from './purpose-group-googlemapresult-bermondsey.png'

import sr_gallery_bethnal_green_001
    from './SearchResultsGallery/img/sr-gallery-bethnal-green-001.png'
import sr_gallery_bethnal_green_002
    from './SearchResultsGallery/img/sr-gallery-bethnal-green-002.png'
import sr_gallery_bethnal_green_003
    from './SearchResultsGallery/img/sr-gallery-bethnal-green-003.png'
import sr_gallery_bethnal_green_004
    from './SearchResultsGallery/img/sr-gallery-bethnal-green-004.png'
import sr_gallery_bethnal_green_005
    from './SearchResultsGallery/img/sr-gallery-bethnal-green-005.png'
import sr_gallery_bethnal_green_006
    from './SearchResultsGallery/img/sr-gallery-bethnal-green-006.png'

import sr_gallery_london_bridge_001
    from './SearchResultsGallery/img/sr-gallery-london-bridge-001.png'
import sr_gallery_london_bridge_002
    from './SearchResultsGallery/img/sr-gallery-london-bridge-002.png'
import sr_gallery_london_bridge_003
    from './SearchResultsGallery/img/sr-gallery-london-bridge-003.png'
import sr_gallery_london_bridge_004
    from './SearchResultsGallery/img/sr-gallery-london-bridge-004.png'
import sr_gallery_london_bridge_005
    from './SearchResultsGallery/img/sr-gallery-london-bridge-005.png'
import sr_gallery_london_bridge_006
    from './SearchResultsGallery/img/sr-gallery-london-bridge-006.png'

import sr_gallery_bermondsey_001
    from './SearchResultsGallery/img/sr-gallery-bermondsey-001.png'
import sr_gallery_bermondsey_002
    from './SearchResultsGallery/img/sr-gallery-bermondsey-002.png'
import sr_gallery_bermondsey_003
    from './SearchResultsGallery/img/sr-gallery-bermondsey-003.png'
import sr_gallery_bermondsey_004
    from './SearchResultsGallery/img/sr-gallery-bermondsey-004.png'
import sr_gallery_bermondsey_005
    from './SearchResultsGallery/img/sr-gallery-bermondsey-005.png'
import sr_gallery_bermondsey_006
    from './SearchResultsGallery/img/sr-gallery-bermondsey-006.png'




class SearchResultsContainer extends React.Component {
    constructor(){
        super();
        this.state = {
          Button_1: true,
          googlemapresult_image: purpose_group_googlemapresult_bethnal_green,
          Button_2: false,
          Button_3: false,
          image_001: sr_gallery_bethnal_green_001,
          image_002: sr_gallery_bethnal_green_002,
          image_003: sr_gallery_bethnal_green_003,
          image_004: sr_gallery_bethnal_green_004,
          image_005: sr_gallery_bethnal_green_005,
          image_006: sr_gallery_bethnal_green_006,
        }
    }
      
    changeColor_1(){
        this.setState({
            Button_1: true,
            googlemapresult_image: purpose_group_googlemapresult_bethnal_green,
            Button_2: false,
            Button_3: false,
            image_001: sr_gallery_bethnal_green_001,
            image_002: sr_gallery_bethnal_green_002,
            image_003: sr_gallery_bethnal_green_003,
            image_004: sr_gallery_bethnal_green_004,
            image_005: sr_gallery_bethnal_green_005,
            image_006: sr_gallery_bethnal_green_006,
        })
    }
    changeColor_2(){
        this.setState({
            Button_1: false,
            Button_2: true,
            googlemapresult_image: purpose_group_googlemapresult_london_bridge,
            Button_3: false,
            image_001: sr_gallery_london_bridge_001,
            image_002: sr_gallery_london_bridge_002,
            image_003: sr_gallery_london_bridge_003,
            image_004: sr_gallery_london_bridge_004,
            image_005: sr_gallery_london_bridge_005,
            image_006: sr_gallery_london_bridge_006,
            
        })
    }
    changeColor_3(){
        this.setState({
            Button_1: false,
            Button_2: false,
            Button_3: true,
            googlemapresult_image: purpose_group_googlemapresult_bermondsey,
            image_001: sr_gallery_bermondsey_001,
            image_002: sr_gallery_bermondsey_002,
            image_003: sr_gallery_bermondsey_003,
            image_004: sr_gallery_bermondsey_004,
            image_005: sr_gallery_bermondsey_005,
            image_006: sr_gallery_bermondsey_006,
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
            <div>
            <div className='SearchResultsContainer'>
                <div className='SearchResultPanel'>

                    <div className={Button_1_class}
                        onClick={this.changeColor_1.bind(this)}>

                        <SearchResultImage 
                            searchresult_image = {searchresult_image_bethnal_green}/>
                        <SearchResultText
                            title='BETHNAL GREEN'
                            short_description='CAMBRIDGE HEATH ROAD'
                            long_description='Our newest site 5 mins walk from
                            Bethnal Green station, featuring 12000 sq. ft of
                            affordable workspace, cafe, cultural space, courtyard &
                            workshops.' />
                    </div>

                    <div className={Button_2_class}
                        onClick={this.changeColor_2.bind(this)}>

                        <SearchResultImage 
                            searchresult_image = {searchresult_image_london_bridge}/> 
                        <SearchResultText
                            title='LONDON BRIDGE'
                            short_description='CAPITAL HOUSE'
                            long_description='Located immediately adjacent to the
                            newly redeveloped London Bridge Station and overlooking
                            The Shard.' />
                    </div>

                    <div className={Button_3_class}
                        onClick={this.changeColor_3.bind(this)}>

                        <SearchResultImage 
                            searchresult_image = {searchresult_image_bermondsey}/>
                        <SearchResultText
                            title='BERMONDSEY'
                            short_description='MANY HANDS'
                            long_description='Our Many Hands creative workspace in
                            Bermondsey provides a huge array of studios for
                            freelancers, artists, makers and start-ups as well as
                            exhibition space.' />
                    </div>

                </div>
                <SearchResultsGoogleMap
                    googlemapresult_image =
                        {this.state.googlemapresult_image} />
                
                
                
            </div>
            
                <SearchResultsGallery
                    image_001={this.state.image_001}
                    image_002={this.state.image_002}
                    image_003={this.state.image_003}
                    image_004={this.state.image_004}
                    image_005={this.state.image_005}
                    image_006={this.state.image_006}/>

                <FloorPlanContainer />
            </div>
            
            
        )
    }
}

export default SearchResultsContainer;