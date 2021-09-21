import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Comment} from '@core/_models/comment';
@Injectable({ providedIn: 'root' })

export class FormService {

  constructor() {}

  getComments(): Observable<Comment[]> {
    if (localStorage.getItem('comments') === null) {
      return of(JSON.parse(localStorage.getItem('comments') || "[]"));
    } else {
      return of(JSON.parse(localStorage.getItem('comments')));
    }
  }

  getReactions(): Observable<Comment[]> {
    return of(JSON.parse(sessionStorage.getItem('myReactions')));
  }

  saveComment(currentComments):Observable<Comment[]> {
    localStorage.setItem('comments', JSON.stringify(currentComments));
    return of(currentComments)
  }

  giveReaction(reactionAdded, objectId, person):Observable<Comment[]>  {
    // Save each comment reaction
    var myReaction = {
      commentId: objectId,
      reaction: reactionAdded,
      person: person
    }
    var currentReactions = JSON.parse(sessionStorage.getItem('myReactions'))
    if (currentReactions === null) {
      sessionStorage.setItem('myReactions', JSON.stringify([myReaction]));
    } else {
      currentReactions.push(myReaction)
      sessionStorage.setItem('myReactions', JSON.stringify(currentReactions));

      // var newReaction = currentReactions.map(function(reactionMap) {
      //   reactionMap.commentId == objectId ? reactionMap.reaction = reactionAdded :
      // })
      // sessionStorage.setItem('myReactions', JSON.stringify(newReaction));
      // currentReactions.map(function(reactionMap) {
      //   reactionMap.commentId == objectId ? reactionMap.reaction = reactionAdded : currentReactions.push(myReaction)
      //   console.log(reactionMap.commentId)
      //   console.log(objectId)
      // })
      // Object.keys(currentReactions).forEach(function(value) {
      //   if(currentReactions[value].commentId == objectId) {
      //       console.log(currentReactions[value].commentId)

      //     }
      // })
    }

    // Add reactions to comment reactions array
    var currentComments = JSON.parse(localStorage.getItem('comments'))
    var reactionObject = {
      reactionAdded,
      person
    }
    currentComments.map(function(comment) {
      comment.id == objectId ? comment.reactions.push(reactionObject) : false
    })
    localStorage.setItem('comments', JSON.stringify(currentComments));

    return of(JSON.parse(sessionStorage.getItem('myReactions')))
  }
}
