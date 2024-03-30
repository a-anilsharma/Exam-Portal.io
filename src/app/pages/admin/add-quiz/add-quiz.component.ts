import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[];
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:'',
    category:{
      cid:'',
    }

  }
constructor(private _cate:CategoryService,private _quizservice:QuizService){}
  ngOnInit(): void {
    this._cate.loadAllCategories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{console.log(error);}
    );
  }

  public addQuiz(){
    this._quizservice.addQuizzes(this.quizData).subscribe(
      (data:any)=>{
        Swal.fire('Success','Quiz Saved','success');
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestion:'',
          active:'',
          category:{
            cid:'',
          }}
      },
      (error)=>{console.log(error);
        Swal.fire('Error','Something went wrong','error');
      }
    );
    
  }



}
