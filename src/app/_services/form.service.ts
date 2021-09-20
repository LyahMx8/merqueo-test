import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Comment} from '@core/_models/comment';
@Injectable({ providedIn: 'root' })

export class FormService {

  constructor() {}

  getForm(): Observable<Comment[]> {
    if (localStorage.getItem('comments') === null) {
      return of(JSON.parse(localStorage.getItem('comments') || "[]"));
    } else {
      return of(JSON.parse(localStorage.getItem('comments')));
    }
  }

  saveComment(currentComments):Observable<Comment[]> {
    localStorage.setItem('comments', JSON.stringify(currentComments));
    return of(currentComments)
  }

  giveReaction(reaction, objectId):Observable<Comment[]>  {
    var currentComments = JSON.parse(localStorage.getItem('comments'))
    currentComments.map(function(comment) {
      if(comment.id == objectId){
        comment.reactions.push(reaction)
      }
    })
    localStorage.setItem('comments', JSON.stringify(currentComments));
    return of(currentComments)
  }
}
