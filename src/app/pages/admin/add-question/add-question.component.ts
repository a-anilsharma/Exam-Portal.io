import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  public Editor = ClassicEditor;
  qid;
  qTitle;
  question:any={
    quiz:{},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  }
  constructor(private _route:ActivatedRoute,private _quesService:QuestionService){
    this.qid=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this.question.quiz['qid']=this.qid;
  }

public addQuestion(){

  this._quesService.saveQuestions(this.question).subscribe(
    (data)=>{
      console.log(data);
      Swal.fire({
            title: 'Success!!',
            text:'The Question has been Save succussfully!! ',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.question={
            quiz:{},
            content:'',
            option1:'',
            option2:'',
            option3:'',
            option4:'',
            answer:'',
          }
        },
    (error)=>{console.log(error);}
  );

}  

}
