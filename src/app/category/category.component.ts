import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
categories=[
  {'id':1, 'name':'Vegetables'},
  {'id':2, 'name': 'Non-Veg'},
  {'id':3, 'name':'fruits'},
   {'id':4, 'name':'Grocery'},
  {'id':5, 'name':'Bakery'}
 
]


products=[
  {'id':1, 'name':'sample1','image':'../../assets/img/img1.jpg'},
  {'id':2, 'name':'sample2','image':'../../assets/img/img1.jpg'},
  {'id':3, 'name':'sample3','image':'../../assets/img/img1.jpg'},
  {'id':4, 'name':'sample4','image':'../../assets/img/img1.jpg'},
  {'id':5, 'name':'sample5','image':'../../assets/img/img1.jpg'},


]



}

