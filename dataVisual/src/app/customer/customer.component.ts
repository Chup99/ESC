import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;

  public txtinput = '';

  public names = [
    'bob', 
    // 'clement', 
    // 'edward', 
    // 'david', 
    // 'frederick', 
    // 'george'
  ];


  OnInput(event: any) {
    this.txtinput = event.target.value;
    // console.log(event.target.attributes.id);
  }

  onClickAdd(){
    if(this.txtinput != ''){
      this.names.push(this.txtinput);
    } else {
      console.log('empty input');
    }
  }
  
  onClickDelete(){
    if(this.txtinput != ''){
      var index = this.names.indexOf(this.txtinput);
      if (index > -1) {
        this.names.splice(index, 1);
      }
    } else {
      console.log('empty input');
    }
  }
  
  checkOne(event: any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value.toString);
  }

  onSubmit(): void {
    console.log(this.customerForm.value);
  }

  onclick(){

  }

  constructor() { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      question1: new FormControl(),
      question2: new FormControl(),
      question3: new FormControl()
    });
  }

}
