import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  qid;
  quizData;
  constructor(private quizService:QuizService,private _route:ActivatedRoute,private _routor:Router){}
  ngOnInit(): void {
    this.qid=this._route.snapshot.params['qid'];
    this.quizService.getQuizById(this.qid).subscribe((data:any)=>{this.quizData=data},
    (error)=>{console.log(error)});
    
  }

  public StartQuiz(){
    Swal.fire({
      title: "Do you want to Start Quiz?",
     
      showCancelButton: true,
      confirmButtonText: "Start",
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._routor.navigate(['/start/'+this.qid]);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    


  }

}
