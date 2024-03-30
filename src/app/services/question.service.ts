import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  constructor(private _http:HttpClient) { }
  public getAllQuizQuestions(qid){
     return this._http.get('http://localhost:8080/question/quiz/admin/'+qid);
  }
  public saveQuestions(data:any){
    return this._http.post('http://localhost:8080/question/',data);
 }
 public deleteQuestion(quesid:number){

  return this._http.delete('http://localhost:8080/question/'+quesid);
 }
 public getAllQuizQuestionsForTest(qid){
  return this._http.get('http://localhost:8080/question/quiz/'+qid);
}
public evaluateQuiz(quizData){
  return this._http.post('http://localhost:8080/question/eval-quiz',quizData);
}
}
