import React from 'react';

/*--- here will be the JS function for carousel ---*/
export class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        setTimeout(()=>{
            $('.slider').glide({
                autoplay: 8000,
                arrowsWrapperClass: 'slider-arrows',
                arrowRightText: '',
                arrowLeftText: ''
            }); 
        }, 0);
        return (
            <div className="slider slider1">
                <div className="slides">
                    <div className="slide-item item1">
                        item 1
                    </div>
                    <div className="slide-item item2"> 
                        item 2
                    </div>
                    <div className="slide-item item3">
                        item 3
                    </div>
                    <div className="slide-item item4">
                        item 4
                    </div>
                </div>
            </div>
        );
    }
}