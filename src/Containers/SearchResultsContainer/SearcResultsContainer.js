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


import FloorPlanDrawing_bethnal_green_media
    from '../FloorPlanContainer/FloorPlanDrawing/FPDrawing-bethnal-green-media.png'
import FloorPlanDrawing_bethnal_green_office
    from '../FloorPlanContainer/FloorPlanDrawing/FPDrawing-bethnal-green-office.png'
import FloorPlanDrawing_bethnal_green_open
    from '../FloorPlanContainer/FloorPlanDrawing/FPDrawing-bethnal-green-open.png'

import FloorPlanDrawing_london_bridge_media
    from '../FloorPlanContainer/FloorPlanDrawing/FPDrawing-london-bridge-media.png'
import FloorPlanDrawing_london_bridge_office
    from '../FloorPlanContainer/FloorPlanDrawing/FPDrawing-london-bridge-office.png'
import FloorPlanDrawing_london_bridge_open
    from '../FloorPlanContainer/FloorPlanDrawing/FPDrawing-london-bridge-open.png'

import FloorPlanDrawing_bermondsey_media
    from '../FloorPlanContainer/FloorPlanDrawing/FPDrawing-bermondsey-media.png'
import FloorPlanDrawing_bermondsey_office
    from '../FloorPlanContainer/FloorPlanDrawing/FPDrawing-bermondsey-office.png'
import FloorPlanDrawing_bermondsey_open
    from '../FloorPlanContainer/FloorPlanDrawing/FPDrawing-bermondsey-open.png'

class SearchResultsContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            // activeButtonTitle: '', // this is the active button
            title: 'Bethnal Green',
            Button_1: true,
            Button_2: false,
            Button_3: false,
            googlemapresult_image: purpose_group_googlemapresult_bethnal_green,
            image_001: sr_gallery_bethnal_green_001,
            image_002: sr_gallery_bethnal_green_002,
            image_003: sr_gallery_bethnal_green_003,
            image_004: sr_gallery_bethnal_green_004,
            image_005: sr_gallery_bethnal_green_005,
            image_006: sr_gallery_bethnal_green_006,
//_media
            floor_plan_description_title_media:
                `Bethnal Green MEDIA description title`,
            floor_plan_description_media:
                `Bethnal Green MEDIA text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text
                text text.`,
            floor_plan_more_description_title_media:
                `Bethnal Green MEDIA more description title`,
            floor_plan_more_description_media:
                `Bethnal Green MEDIA more more more more more more
                more more more more more more more
                more more more more more more more
                more more more more more more more
                more more more.`,
            floor_plan_price_media: `£ 18.500 / month MEDIA`,
            drawing_media: FloorPlanDrawing_bethnal_green_media,
//_office
            floor_plan_description_title_office:
                `Bethnal Green OFFICE description title`,
            floor_plan_description_office:
                `Bethnal Green OFFICE text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text
                text text.`,
            floor_plan_more_description_title_office:
                `Bethnal Green OFFICE more description title`,
            floor_plan_more_description_office:
                `Bethnal Green OFFICE more more more more more more
                more more more more more more more
                more more more more more more more
                more more more more more more more
                more more more.`,
            floor_plan_price_office: `£ 13.250 / month OFFICE`,
            drawing_office: FloorPlanDrawing_bethnal_green_office,

//_open
            floor_plan_description_title_open:
                `Bethnal Green OPEN description title`,
            floor_plan_description_open:
                `Bethnal Green OPEN text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text
                text text.`,
            floor_plan_more_description_title_open:
                `Bethnal Green OPEN more description title`,
            floor_plan_more_description_open:
                `Bethnal Green OPEN more more more more more more
                more more more more more more more
                more more more more more more more
                more more more more more more more
                more more more.`,
            floor_plan_price_open: `£ 9.750 / month OPEN`,
            drawing_open: FloorPlanDrawing_bethnal_green_open,

        }
        // this.buttons = dummyData // array of button object data
    }
      
    changeColor_1(){
        this.setState({
            title: 'Bethnal Green',
            Button_1: true,
            Button_2: false,
            Button_3: false,
            googlemapresult_image: purpose_group_googlemapresult_bethnal_green,
            image_001: sr_gallery_bethnal_green_001,
            image_002: sr_gallery_bethnal_green_002,
            image_003: sr_gallery_bethnal_green_003,
            image_004: sr_gallery_bethnal_green_004,
            image_005: sr_gallery_bethnal_green_005,
            image_006: sr_gallery_bethnal_green_006,
//_media
            floor_plan_description_title_media:
                `Bethnal Green MEDIA description title`,
            floor_plan_description_media:
                `Bethnal Green MEDIA text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text
                text text.`,
            floor_plan_more_description_title_media:
                `Bethnal Green MEDIA more description title`,
            floor_plan_more_description_media:
                `Bethnal Green MEDIA more more more more more more
                more more more more more more more
                more more more more more more more
                more more more more more more more
                more more more.`,
            floor_plan_price_media: `£ 18.500 / month MEDIA`,
            drawing_media: FloorPlanDrawing_bethnal_green_media,
//_office
            floor_plan_description_title_office:
            `Bethnal Green OFFICE description title`,
            floor_plan_description_office:
            `Bethnal Green OFFICE text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text
            text text.`,
            floor_plan_more_description_title_office:
            `Bethnal Green OFFICE more description title`,
            floor_plan_more_description_office:
            `Bethnal Green OFFICE more more more more more more
            more more more more more more more
            more more more more more more more
            more more more more more more more
            more more more.`,
            floor_plan_price_office: `£ 13.250 / month OFFICE`,
            drawing_office: FloorPlanDrawing_bethnal_green_office,

//_open
            floor_plan_description_title_open:
                `Bethnal Green OPEN description title`,
            floor_plan_description_open:
                `Bethnal Green OPEN text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text
                text text.`,
            floor_plan_more_description_title_open:
                `Bethnal Green OPEN more description title`,
            floor_plan_more_description_open:
                `Bethnal Green OPEN more more more more more more
                more more more more more more more
                more more more more more more more
                more more more more more more more
                more more more.`,
            floor_plan_price_open: `£ 9.750 / month OPEN`,
            drawing_open: FloorPlanDrawing_bethnal_green_open,

        })
    }
    changeColor_2(){
        this.setState({
            title: 'London Bridge',
            Button_1: false,
            Button_2: true,
            Button_3: false,
            googlemapresult_image: purpose_group_googlemapresult_london_bridge,
            image_001: sr_gallery_london_bridge_001,
            image_002: sr_gallery_london_bridge_002,
            image_003: sr_gallery_london_bridge_003,
            image_004: sr_gallery_london_bridge_004,
            image_005: sr_gallery_london_bridge_005,
            image_006: sr_gallery_london_bridge_006,
//_media
            floor_plan_description_title_media:
                `London Bridge MEDIA description title`,
            floor_plan_description_media:
                `London Bridge MEDIA text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text
                text text.`,
            floor_plan_more_description_title_media:
                `London Bridge MEDIA more description title`,
            floor_plan_more_description_media:
                `London Bridge MEDIA more more more more more more
                more more more more more more more
                more more more more more more more
                more more more more more more more
                more more more.`,
            floor_plan_price_media: `£ 14.000 / month MEDIA`,
            drawing_media: FloorPlanDrawing_london_bridge_media,
//_office
            floor_plan_description_title_office:
            `London Bridge OFFICE description title`,
            floor_plan_description_office:
            `London Bridge OFFICE text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text
            text text.`,
            floor_plan_more_description_title_office:
            `London Bridge OFFICE more description title`,
            floor_plan_more_description_office:
            `London Bridge OFFICE more more more more more more
            more more more more more more more
            more more more more more more more
            more more more more more more more
            more more more.`,
            floor_plan_price_office: `£ 12.500 / month OFFICE`,
            drawing_office: FloorPlanDrawing_london_bridge_office,
//_open
            floor_plan_description_title_open:
            `London Bridge OPEN description title`,
            floor_plan_description_open:
            `London Bridge OPEN text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text 
            text text text text text text
            text text.`,
            floor_plan_more_description_title_open:
            `London Bridge OPEN more description title`,
            floor_plan_more_description_open:
            `London Bridge OPEN more more more more more more
            more more more more more more more
            more more more more more more more
            more more more more more more more
            more more more.`,
            floor_plan_price_open: `£ 11.200 / month OPEN`,
            drawing_open: FloorPlanDrawing_london_bridge_open,
            
        })
    }
    changeColor_3(){
        this.setState({
            title: 'Bermondsey',
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
//_media
            floor_plan_description_title_media:
                `Bermondsey MEDIA description title`,
            floor_plan_description_media:
                `Bermondsey MEDIA text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text
                text text.`,
            floor_plan_more_description_title_media:
                `Bermondsey MEDIA more description title`,
            floor_plan_more_description_media:
                `Bermondsey MEDIA more more more more more more
                more more more more more more more
                more more more more more more more
                more more more more more more more
                more more more.`,
            floor_plan_price_media: `£ 3.300 / month MEDIA`,
            drawing_media: FloorPlanDrawing_bermondsey_media,
//_office
            floor_plan_description_title_office:
                `Bermondsey OFFICE description title`,
            floor_plan_description_office:
                `Bermondsey OFFICE text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text
                text text.`,
            floor_plan_more_description_title_office:
                `Bermondsey OFFICE more description title`,
            floor_plan_more_description_office:
                `Bermondsey OFFICE more more more more more more
                more more more more more more more
                more more more more more more more
                more more more more more more more
                more more more.`,
            floor_plan_price_office: `£ 2.750 / month OFFICE`,
            drawing_office: FloorPlanDrawing_bermondsey_office,
//_open
            floor_plan_description_title_open:
                `Bermondsey OPEN description title`,
            floor_plan_description_open:
                `Bermondsey OPEN text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text 
                text text text text text text
                text text.`,
            floor_plan_more_description_title_open:
                `Bermondsey OPEN more description title`,
            floor_plan_more_description_open:
                `Bermondsey OPEN more more more more more more
                more more more more more more more
                more more more more more more more
                more more more more more more more
                more more more.`,
            floor_plan_price_open: `£ 1.500 / month OPEN`,
            drawing_open: FloorPlanDrawing_bermondsey_open,


        })
    }

    setActiveButton(activeButtonTitle) {
        this.setState({activeButtonTitle})
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
                    {/* {this.buttons.map(button =>
                        <Button
                            {...props}
                            buttonIsActive={this.state.activeButtonTitle}
                            handleClick{() => setActiveButton(button.title)}
                        />)} */}
                    <div className={Button_1_class}
                        // onClick={props.handleClick}
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

                <FloorPlanContainer
                    title = {this.state.title}
                    floor_plan_description_title_media =
                        {this.state.floor_plan_description_title_media}
                    floor_plan_description_title_office =
                        {this.state.floor_plan_description_title_office}
                    floor_plan_description_title_open =
                        {this.state.floor_plan_description_title_open}

                    floor_plan_description = {this.state.floor_plan_description}
                    floor_plan_more_description_title =
                        {this.state.floor_plan_more_description_title}
                    floor_plan_more_description =
                        {this.state.floor_plan_more_description}
                    floor_plan_price = {this.state.floor_plan_price}

                    drawing_media = {this.state.drawing_media}
                    drawing_office = {this.state.drawing_office}
                    drawing_open = {this.state.drawing_open}
                />
            </div>
            
        )
    }
}

export default SearchResultsContainer;