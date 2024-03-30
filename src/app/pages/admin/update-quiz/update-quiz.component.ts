import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
   public qid:number;
  public quizData:any;
  public categories=[];
  constructor(private _route:ActivatedRoute,private quizService:QuizService,private _cate:CategoryService,private snack:MatSnackBar){}
  
  ngOnInit(): void {
    
    this.qid=this._route.snapshot.params['qid'];
    
    this.quizService.getQuizById(this.qid).subscribe((data)=>{
      console.log(data);
      this.quizData=data;
    },(error)=>{
      console.log(error);
    });
    this._cate.loadAllCategories().subscribe(
      (data:any)=>{
     //   console.log(data);
        this.categories=data;
      },
      (error)=>{console.log(error);}
    );
    
  }
public updateQuiz(){

this.quizService.updateSingleQuiz(this.quizData).subscribe((data:any)=>{
  Swal.fire('Success','Quiz Saved','success');
},(error)=>{
  Swal.fire('Error','Something went wrong','error');
  console.log(error);
});

}

}
