import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
constructor(private quizService:QuizService){}

  ngOnInit(): void {
this.getAllQuizzes();
  }
  public quizzes:any=[];

public getAllQuizzes(){
this.quizService.loadAllQuizzes().subscribe(
(data:any)=>{
console.log(data);
this.quizzes=data;
},
(error)=>{ console.log(error); Swal.fire('Error','Error while loading quizzes','error');}
);

}
public deleteQuiz(qid){

  this.quizService.deleteQuiz(qid).subscribe(

    (data)=>{
      this.quizzes=this.quizzes.filter((quiz)=>quiz.qid!=qid);
      Swal.fire('Success','Quiz has been deleted','success'); },
    (error)=>{console.log(error);
      Swal.fire('Error','Error while loading quizzes','error');
    }

  );
}


}
