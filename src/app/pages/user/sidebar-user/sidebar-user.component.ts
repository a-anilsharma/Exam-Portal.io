import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  public quizzes: any = [];
  public constructor(private _cate_service: CategoryService, private _snack: MatSnackBar) { }
  ngOnInit(): void {
    
    this._cate_service.loadAllCategories().subscribe(
      (data: any) => {
        console.table(data);
        this.quizzes = data;

      },
      (error) => {
        this._snack.open("Something Went Wrong While load quizzes!!");
      }

    );


  }


}
