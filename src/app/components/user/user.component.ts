import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { RouterModule, Routes, ActivatedRoute, Router, Params, ParamMap} from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  name:string;

  address:{
    street:string,
    city:string,
    home:number
  };

  numbers:Numbers;
  posts: Post[];

  hobbies:string[]; //any

  constructor(private route: Router, private dataService:DataService) {



  }

  ngOnInit() {


   // this.route.navigate( ['/'], {fragment: 'test'});

    this.route.navigate(['/news'], { queryParams: { id: 1 } });




    this.dataService.getPosts().subscribe((posts) => {
      console.log('--------POSTS-----------------------', posts);

      this.posts = posts

    });

    this.name = 'John!!!';

    this.address = {
      street : 'Kalinina',
      city: 'Krasnodar',
      home : 109
    };

    this.numbers = {
      phone : 8928374,
      home : 109
    };

    this.hobbies = ['write code', 'Listen to music'];
  }

  onClick(){
    this.hobbies.push('New Hobby');
    console.log('address ', this.address);
  }

  addHobby(h){

    console.log('h ', h);

    this.hobbies.push(h);

    return false

  }

}

interface Numbers{
  phone:number,
  home:number
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId:number
}
