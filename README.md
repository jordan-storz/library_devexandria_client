# Library-client

This repo is for the Ember client.  You can see the deployed application at www.library-of-devexandria.com.  The client communicates with both a Rails server for DB / Authentication, and a Haskell server for websockets.  I've listed the repos for these services below: (Note: the client doesn't communicate directly with the web scraper service, Rails does)
* RAILS API: https://github.com/jordan-storz/library_devexandria_api
* Haskell sockets: https://github.com/jordan-storz/library_dev_sockets
* Node + Express web scraper: https://github.com/jordan-storz/library_devexandria_scraper

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd library-client`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

