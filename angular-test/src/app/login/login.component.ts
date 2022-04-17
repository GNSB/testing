import { Component, OnInit, ViewChild } from '@angular/core';
import {ElementRef} from '@angular/core'
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user:String="";
  password:String="";
  
  
  constructor(private router:Router, public elementRef:ElementRef) { 
    
  }

  ngOnInit(): void {
    
  
  }
  login(){
    if(this.user=="123" && this.password=="123"){
      this.router.navigate(['/panel']);
    }
  }
  
}

