import { Component, OnInit } from '@angular/core';
import { FormService } from '@core/_services/form.service';
import * as moment from 'moment';

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
  public myReactions: string = ''
  public persons = [
    { name: 'Pedro', photo: '/assets/images/1.jpg' },
    { name: 'Juan', photo: '/assets/images/2.jpg' },
    { name: 'Carlos', photo: '/assets/images/3.jpg' },
    { name: 'Maria', photo: '/assets/images/4.jpg' },
  ]

  constructor(
    private formService: FormService
  ) {
    moment.updateLocale('es', {
      relativeTime: {
        future: "En %s",
        past: "%s",
        s: "Justo ahora",
        m: "Hace 1 minuto",
        mm: "Hace %d minutos",
        h: "Hace 1 hora",
        hh: "Hace %d horas",
        d: "Hace 1 día",
        dd: "Hace %d días",
        M: "Hace 1 mes ",
        MM: "Hace %d meses",
        y: "Hace 1 año",
        yy: "Hace %d años"
      }
    });
  }

  ngOnInit(): void {
    this.getComments()
  }

  getComments() {
    this.formService.getComments()
      .subscribe(data => {
        this.comments = data
        this.formService.getComments()
          .subscribe(data => {
            this.comments = data
          }, err => {
            console.log(err)
          })
      }, err => {
        console.log(err)
      })
  }

  changeElementState(element, activeId) {
    this.id = activeId
    if (element == 'comments') {
      this.activeSubComments = true
      this.addComments = false
    } else if (element == 'addComment') {
      this.addComments = true
      this.activeSubComments = false
    }
  }

  addReaction($this, commentId) {
    var randomPersons = Math.floor(Math.random() * this.persons.length);
    var person = this.persons[randomPersons]
    this.formService.giveReaction($this.target.alt, commentId, person)
      .subscribe(data => {
        this.getComments()
      },
        err => {
          console.log(err)
        });
  }

}
