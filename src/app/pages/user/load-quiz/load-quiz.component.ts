import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  public catId;
  public quizzies:any=[];
  constructor(private _route:ActivatedRoute,private _quizserve:QuizService ){}
  ngOnInit(): void {
  this._route.params.subscribe((params)=>{
    this.catId=this._route.snapshot.params['catId'];
    console.log(this.catId);
    if(this.catId==0){
      this._quizserve.loadAllActiveQuizzes().subscribe(
        (data:any)=>{ 
          console.table(data);
          this.quizzies=data;},
        (error)=>{console.log(error);}
      );
    }else{
     
     this._quizserve.getActivequizzesOfCategory(this.catId).subscribe(
      (data:any)=>{ 
        console.table(data);
        this.quizzies=data;},
      (error)=>{console.log(error);}
    );

    }
  

  });
  }

}
