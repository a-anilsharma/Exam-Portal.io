import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-qustion',
  templateUrl: './view-quiz-qustion.component.html',
  styleUrls: ['./view-quiz-qustion.component.css']
})
export class ViewQuizQustionComponent  implements OnInit{
   qid;
   qTitle;
   question:any=[];
  constructor(private _route:ActivatedRoute,private _questionService:QuestionService,private _snak:MatSnackBar){}
  ngOnInit(): void {
   this.qid=this._route.snapshot.params['qid'];
   this.qTitle=this._route.snapshot.params['title'];
    console.log(this.qid);
    console.log(this.qTitle);
    this._questionService.getAllQuizQuestions(this.qid).subscribe((data)=>{
      this.question=data;
      console.log(data);  
    },
    (error)=>{
      console.log(error);
    });
  }
  public deletequestion(quesid){
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure,want to delete this question?'
    }).then((result)=>{
      if(result.isConfirmed){
        this._questionService.deleteQuestion(quesid).subscribe(
          (data)=>{
            this._snak.open('Question deleted!!','',{duration:3000});
            this.question=this.question.filter((q)=>q.quesid==this.qid);
    
          },
          (error)=>{
            this._snak.open('Error while deleting question!!','',{duration:3000});
          }
        );
      }

    });


  }


}
