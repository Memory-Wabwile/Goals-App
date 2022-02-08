import { Injectable } from '@angular/core';
import { goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return goals
  }

  constructor() { }
}
