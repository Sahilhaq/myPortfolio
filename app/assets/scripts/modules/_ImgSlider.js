
import $ from 'jquery';

class ImgSlider {
    constructor() {
        this.sliderImg = $('.slider-img');
        this.next = $('.next');
        this.prev = $('.prev');
        this.num = 0;
        this.images = [
            './assets/images/slider-img-happyboat-02.png',
            './assets/images/slider-img-otakuHeaven-03.png', 
            './assets/images/slider-img-omnifood-04.png',
            './assets/images/slider-img-personalSite-05.png',
            './assets/images/slider-img-clearview-06.png'
       ];

       this.event();
    }

    event() {
        this.next.click(this.onClickNext.bind(this));
        this.prev.click(this.onClickPrev.bind(this));
    }

    onClickNext() {
        this.num++;
        if(this.num >= this.images.length) {
            this.num = 0;
        }
        this.sliderImg.attr('srcset', this.images[this.num]);
        console.log(this.num)
    }

    onClickPrev() {
        this.num--;
        if(this.num < 0 ){
            this.num = this.images.length-1;
        }
        this.sliderImg.attr('srcset', this.images[this.num]);
        console.log(this.num);
    }
}

export default ImgSlider;