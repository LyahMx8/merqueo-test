/**
 * creates a model to post data from the contact form
 */

export class Form {
    email: string;

    constructor(values: Object = {}) {
      // Constructor initialization
      Object.assign(this, values);
    }
 }
