import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }
  
  public loadAllQuizzes(){
    return this._http.get('http://localhost:8080/quiz/');

  }

  public addQuizzes(quizData:any){
     return this._http.post('http://localhost:8080/quiz/',quizData);
  }
  public deleteQuiz(Id:number){
    return this._http.delete('http://localhost:8080/quiz/'+Id);
 }

 public getquizzesOfCategory(catId:number){

  return this._http.get('http://localhost:8080/quiz/category/'+catId);
}

public getActivequizzesOfCategory(catId:number){

  return this._http.get('http://localhost:8080/quiz/category/active/'+catId);
}
public loadAllActiveQuizzes(){
  return this._http.get('http://localhost:8080/quiz/active');

}
// get Single quiz by id
public getQuizById(qid:number){
  return this._http.get('http://localhost:8080/quiz/'+qid);

}
//update quiz
public updateSingleQuiz(quizData:any){
   return this._http.put('http://localhost:8080/quiz/',quizData);

}
}
