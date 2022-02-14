import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service'; //=> registering aservice
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers: [GoalService], //for registering a service
})
export class GoalComponent implements OnInit {
  
  // quote:Quote | undefined;

  goals: Goal[];
  alertService!: AlertService;
  quote: Quote | undefined;

  author!: string;
  // quote!: string;

  // goals: any;
  // goals: Goal[] = [
  //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //   {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
  //   {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
  //   {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  //   {id:5,name:'Solve math homework',description:'Damn Math'},
  //   {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];

  // pushing value from the form
  addNewGoal(goal: any): void {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  toggleDetails(index: any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: any) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  // for when the goal is complete its triggered
  deleteGoal(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.goals[index].name}?`
      );

      if (toDelete) {
        this.goals.splice(index, 1);
        this.alertService.alertMe('The goal has been deleted'); //for after goal is deleted
      }
    }
  }

  constructor(
    goalService: GoalService,
    alertService: AlertService,
    private http: HttpClient,
    private quoteService:QuoteRequestService
  ) {
    //importing http client
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }
  

  ngOnInit(): void {   
    
    interface ApiResponse  {       //for the API response of quotes
      author: string;
      quote: string;
    }


    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe((data: { author: string; quote: string; })=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
  },

      (  //For displaying any error on the page
 
  err: any)=>{
      this.quote = new Quote("Winston Churchill","Never never give up!")
      console.log("An error occurred")
  });


    
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }

   


}

