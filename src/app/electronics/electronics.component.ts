import { Component } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {
  
  categories : Array<any> = [
    {
      src :"../assets/img/tv.jpg",
      name :"TV & Video"
    },
    {
      src :"../assets/img/pc.jpg",
      name :"Laptops & Computers"
    },
    {
      src :"../assets/img/phones.jpg",
      name :"Cell Phones& accessories"
    },
    {
      src :"../assets/img/ipad.jpg",
      name :"iPad & tablets"
    },
    {
      src :"../assets/img/headphone.jpg",
      name :"Headphones"
    },
    {
      src :"../assets/img/audio.jpg",
      name :"Audio&home theatre"
    },
    {
      src :"../assets/img/games.jpg",
      name :"Video games"
    },
    {
      src :"../assets/img/print.jpg",
      name :"Printers & supplies"
    },
    {
      src :"../assets/img/smart_watch.jpg",
      name :"Wearable technology"
    },
    {
      src :"../assets/img/camera.jpg",
      name :"Cameras & camcorders"
    },
    {
      src :"../assets/img/batteries.jpg",
      name :"Batteries"
    },
    {
      src :"../assets/img/drone.jpg",
      name :"Drones & Drones accessories"
    }
  ]
}
