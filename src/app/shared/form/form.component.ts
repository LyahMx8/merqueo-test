import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '@core/_services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  public userForm: FormGroup
  public error: any
  public persons = [
    { name: 'Pedro', photo: '/assets/images/1.jpg' },
    { name: 'Juan', photo: '/assets/images/2.jpg' },
    { name: 'Carlos', photo: '/assets/images/3.jpg' },
    { name: 'Maria', photo: '/assets/images/4.jpg' },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.pattern('^[A-Za-z\ \ñäáàëéèíìöóòúùÄÁÀËÉÈÍÌÖÓÒÚÙÑñ]+'), Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  submitMessage() {
    this.formService.getForm()
      .subscribe(data => {
        var currentComments = data
        var randomId = Math.floor(Math.random() * 9999)
        var randomPersons = Math.floor(Math.random() * this.persons.length);
        var person = this.persons[randomPersons]
        var currentDate = new Date(Date.now())

        var commentObject = {
          id: randomId,
          name: person.name,
          photo: person.photo,
          time: currentDate,
          comment: this.userForm.value.comment,
          reactions: [],
          comments: []
        }
        currentComments.push(commentObject)

        this.formService.saveComment(currentComments)
          .pipe(first())
          .subscribe(() => {
            window.location.reload();
          },
            err => {
              console.log(err)
            });
      }, err => {
        console.log(err)
      })
  }

}
