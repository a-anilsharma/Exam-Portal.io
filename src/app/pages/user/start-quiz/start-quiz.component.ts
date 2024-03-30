import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
  constructor(private locationSt:LocationStrategy,private _route:ActivatedRoute,private _quesService:QuestionService ){}
  qid;
  questionData;
  marksGot=0;
  correctAnswers=0;
  attempted=0;
  isSubmit=false;
  timer:any;
  ngOnInit(): void {
   this.preventBackButton();
   this.qid=this._route.snapshot.params['qid'];
   this.loadQuestion(); 

   this.blockInspectElement();

  }



  preventBackButton(){
    history.pushState(null,null,location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null,null,location.href);
    });
  }
  loadQuestion(){
    this._quesService.getAllQuizQuestionsForTest(this.qid).subscribe((data)=>{
      
      
      this.questionData=data;
      this.timer=this.questionData.length*2*60;
      this.questionData.forEach((q)=>{
      //q['givenAnswer']='';
        this.startTimer();
      });
    //  console.log(this.questionData);
    },(error)=>{ Swal.fire("error","Error While loading quiz..")});
  
  }
  submitQuiz(){


    Swal.fire({
      title: "Do you want to Submit Quiz?",
     
      showCancelButton: true,
      confirmButtonText: "Submit",
      icon:'info'
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.evalQuiz();
      } else if (result.isDenied) {
        Swal.fire("Quiz is not Started", "", "info");
      }
    });  


  }
startTimer(){
  let t= window.setInterval(()=>{
    if(this.timer<=0){
    this.evalQuiz();
    clearInterval(t);
    }else{
      this.timer--;
    }

  },1000);
}

evalQuiz(){

   this.isSubmit=true;        

   this._quesService.evaluateQuiz(this.questionData).subscribe(
    (data:any)=>{ console.log(data);
      this.attempted=data.attempted;
      this.correctAnswers=data.correctAnswers;
      this.marksGot=parseFloat(Number(data.marksGot).toFixed(2));
    },
    (error)=>{console.log(error);}
   );
  // this.questionData.forEach((q)=>{
  //   if(q.answer==q.givenAnswer){
  //   this.correctAnswers+=1;
  //   this.marksGot=this.marksGot+q.quiz.maxMarks/this.questionData.length;
  //   }
  //   if(q.givenAnswer.trim()!=''){
  //     this.attempted+=1;
  //   }
  
  // });
  // console.log('Correct Ans-->'+this.correctAnswers);
  // console.log('Max marks'+this.marksGot);

}

getFormattedTime(){
  let mm=Math.floor(this.timer/60);
  let ss=this.timer-mm*60;
  return mm+'min : '+ss+'sec';
}
printPage(){
  window.print();
}
blockInspectElement(){
  document.onkeydown = (e:any) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};
}

}

