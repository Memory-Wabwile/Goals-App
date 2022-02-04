import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  // goals: Goal[] = [
  //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //   {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
  //   {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
  //   {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  //   {id:5,name:'Solve math homework',description:'Damn Math'},
  //   {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];


  
  toggleDetails(index : any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  // for when the goal is complete its triggered
  completeGoal(isComplete:any, index:any){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
