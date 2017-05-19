import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{Camera,CameraOptions} from '@ionic-native/camera';
import{EmailComposer} from '@ionic-native/email-composer'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
currentImage=null;
  constructor(public navCtrl: NavController ,private emailComposer:EmailComposer,private camera:Camera) {

  }
  captureImage(){
 const options:CameraOptions={
  sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
  destinationType:this.camera.DestinationType.FILE_URI
 }
 this.camera.getPicture(options).then(imageData=>{
   this.currentImage=imageData;
 },err=>{
   console.log('image error',err);
 })
  }
  sendEmail(){
 let email={
   to:'zied.elmiladi@gmail.com',
   cc:'zied.miladi90@gmail.com',
   attachement:[
     this.currentImage
   ],
   subject:'My cool image',
   body:'hey chek out this <br></br>',
   isHtml:true
 };
 this.emailComposer.open(email);
  }

}
