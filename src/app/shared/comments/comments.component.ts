import { Component, OnInit } from '@angular/core';
import { FormService } from '@core/_services/form.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public comments: any = []
  public activeSubComments: boolean = false
  public addComments: boolean = false
  public id: number
  public myReaction:string = ''

  constructor(
    private formService: FormService
  ) {
  }

  ngOnInit(): void {
    this.getComments()
  }

  getComments() {
    this.formService.getForm()
      .subscribe(data => {
        this.comments = data
        console.log(data)
      }, err => {
        console.log(err)
      })
  }

  changeElementState(element, activeId) {
    this.id = activeId
    if(element == 'comments'){
      this.activeSubComments = true
      this.addComments = false
    }else if (element == 'addComment'){
      this.addComments = true
      this.activeSubComments = false
    }
  }

  addReaction($this, commentId) {
    this.formService.giveReaction($this.target.alt, commentId)
      .subscribe(() => {
        this.myReaction = $this.target.alt
      },
      err => {
        console.log(err)
      });
  }

}
