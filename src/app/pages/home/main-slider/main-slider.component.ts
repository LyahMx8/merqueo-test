import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, A11y]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainSliderComponent implements OnInit {

  constructor() { }

  config: SwiperOptions = {
    slidesPerView: 1,
    navigation: false,
    loop: true,
    pagination: { clickable: true }
  };

  ngOnInit(): void {
    (function (d, s, id) {
      var js; if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    }(
      document, "script", "EmbedSocialHashtagScript"
    ));
  }

}
