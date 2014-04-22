// TODO: Externalize to settings file
var baseUrl = 'http://www.myvideo.de';

var selectors = {
    navContainer: '.header--navigation',
    navItem: '.header--navigation-item'
};

casper.test.begin('MyVideo Homepage', function suite(test) {
    casper.start(baseUrl, function() {
        test.assertHttpStatus(200, 'Homepage is resolvable');
        test.assertExists(selectors.navContainer, 'Main Navigation Container found');
        test.assertExists(selectors.navItem, 'Main Navigation Items found');
    });

    casper.run(function() {
        test.done();
    });
});