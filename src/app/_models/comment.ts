/**
 * creates a model to post data from the contact form
 */

export class Comment {
  id: number;
  name: string;
  photo: string;
  time: Date;
  comment: string;

  constructor(values: Object = {}) {
    // Constructor initialization
    Object.assign(this, values);
  }
}
