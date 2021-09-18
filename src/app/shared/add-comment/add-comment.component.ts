import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public userForm: FormGroup
  public error: any
  public loading: boolean = false
  public thankYou: boolean = false

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.userForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.pattern('^[A-Za-z\ \ñäáàëéèíìöóòúùÄÁÀËÉÈÍÌÖÓÒÚÙÑñ]+'), Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  submitMessage() {
    console.log("ajaja")
  }

}
