import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: '',
  actions: {
    onSubmit() {
      function validateUrl(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      }
      let sourceUrl = this.get('model').sourceUrl;
      if (sourceUrl.length === 0) {
        this.set('errorMessage', 'You gotta enter more than nothing!');
      } else if (!validateUrl(sourceUrl)) {
        this.set('errorMessage', 'You gotta enter a valid url!');
      } else {
        this.set('errorMessage', '');
        this.transitionToRoute('user.library.books.add.creating');
      }
    }
  }
});
