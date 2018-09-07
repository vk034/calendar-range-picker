import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router'

export interface Height{
  value:string
  viewValue:string
}
export interface Country{
  value:string
  viewValue:string
}
export interface Star{
  value:string
  viewValue:string
}
export interface Rasi{
  value:string
  viewValue:string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
url:string;
name:string;
  Heights:Height[]=[
    {value:"5ft 0 in",viewValue:"5ft 0 in"},
    {value:"5ft 1 in",viewValue:"5ft 1 in"},
    {value:"5ft 3 in",viewValue:"5ft 3 in"},
    {value:"5ft 4 in",viewValue:"5ft 4 in"},
    {value:"5ft 5 in",viewValue:"5ft 5 in"},
    {value:"5ft 6 in",viewValue:"5ft 6 in"},
  ];

  Countries:Country[]=[
    {value:"India",viewValue:'India'},
    {value:'Usa',viewValue:'Usa'},
    {value:'China',viewValue:'China'}
  ]

  Stars:Star[]=[
    {value:"Ashwini",viewValue:"Ashwini"},
    {value:"Bharani",viewValue:"Bharani"},
    {value:"Kruthika",viewValue:"Kruthika"},
    {value:"Rohini",viewValue:"Rohini"},
    {value:"Mrigasira",viewValue:"Mrigasira"},
    {value:"Artara",viewValue:"Artara"},
    {value:"Punarvasu",viewValue:"Punarvasu"},
    {value:"Pushyami",viewValue:"Pushyami"},
    {value:"Ashlesha",viewValue:"Ashlesha"},
    {value:"Makha",viewValue:"Makha"},
    {value:"Pubba",viewValue:"Pubba"},
    {value:"Uthara",viewValue:"Uthara"},
    {value:"Hastha",viewValue:"Hastha"},
    {value:"Chitha",viewValue:"Chitha"},
    {value:"Swathi",viewValue:"Swathi"},
    {value:"Vishaka",viewValue:"Vishaka"},
    {value:"Anuradha",viewValue:"Anuradha"},
    {value:"Jyeshta",viewValue:"Jyeshta"},
    {value:"Moola",viewValue:"Moola"},
    {value:"Poorvashada",viewValue:"Poorvashada"},
    {value:"Utharashada",viewValue:"Utharashada"},
    {value:"Sravana",viewValue:"Sravana"},
    {value:"Dhanishta",viewValue:"Dhanishta"},
    {value:"Sathabisha",viewValue:"Sathabisha"},
    {value:"Poorvabhadra",viewValue:"Poorvabhadra"},
    {value:"Utharabhadra",viewValue:"Utharabhadra"},
    {value:"Revathi",viewValue:"Revathi"}
  ]

  Rasichakra:Rasi[]=[
    {value:"Arial",viewValue:"Arial"},
    {value:"Taurus",viewValue:"Taurus"},
    {value:"Gemini",viewValue:"Gemini"},
    {value:"Capricorn",viewValue:"Capricorn"},
    {value:"Virgo",viewValue:"Virgo"},
    {value:"Leo",viewValue:"Leo"},
    {value:"Libra",viewValue:"Libra"},
    {value:"Cancer",viewValue:"Cancer"},
    {value:"Saggitarius",viewValue:"Saggitarius"},
    {value:"Scorpio",viewValue:"Scorpio"},
    {value:"Aquarius",viewValue:"Aquarius"},
    {value:"Pisces",viewValue:"Pisces"},

  ]

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,private router:Router) {
    if(!sessionStorage.getItem('Gender')){
      this.router.navigateByUrl('/home')
    }
    
  }

  ngOnInit() {
    
    //console.log('------->',sessionStorage.getItem('Name'),"name=="+this.name);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
   
  }

  redirect(){
  this.router.navigateByUrl('/preference');
  }
  onclick(){
    console.log( (document.getElementById('maritalstatus')as HTMLInputElement).value)
  }
}
