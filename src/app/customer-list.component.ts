import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector : 'customer-list',
    templateUrl:'./customer-list.component.html',
    styleUrls:['./customer-list.css']
})

export class CustomerListComponent
{
    customers :  Customer[] = [

        {customerno:1, name:'Rahul Jain', address:'',city:'Bangalore', state:'Karnataka',country:'India'},
        {customerno:2, name:'Shein', address:'',city:'Mumbai', state:'Maharastra',country:'India'},
        {customerno:3, name:'Viditha', address:'',city:'Kolkata', state:'West Bengal',country:'India'},
        {customerno:4, name:'Sameer', address:'',city:'Bellary', state:'Karnataka',country:'India'},
        {customerno:5, name:'Karan', address:'',city:'Dharawada', state:'Karnataka',country:'India'},
        {customerno:6, name:'Gayle', address:'',city:'Davanagere', state:'Karnataka',country:'India'},
    ]
}