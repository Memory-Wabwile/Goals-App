export class Goal {
  //   id!: number;
  // name!: string;
  // description!: string;

  public showDescription: boolean;
  constructor(public id: number,public name: string,public description: string ,public completeDate: Date ){
    this.showDescription=false;
  }
}