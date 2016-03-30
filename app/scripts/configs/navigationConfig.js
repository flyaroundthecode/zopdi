'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.value('navigationConfig', {
    'home': {
        'viewName': 'HOME',
        'targetUrl': '#',
        'iconClass': 'menu-icons fa fa-home'
    },
    'aboutus': {
        'viewName': 'ABOUT US',
        'targetUrl': '#',
        'iconClass': 'menu-icons fa fa-user',
        'isSubNavVisible': false,
        'subNav': [
            {
                'viewName': 'OUR TEAM',
                'targetUrl': '#/about'
            },
            {
                'viewName': 'OUR SERVICES',
                'targetUrl': '#'
            }
        ]
    },
    'portfolio': {
        'viewName': 'PORTFOLIO',
        'targetUrl': '#',
        'iconClass': 'menu-icons  fa fa-briefcase',
        'isSubNavVisible': false,
        'subNav': [
            {
                'viewName': 'WEB DESIGN',
                'targetUrl': '#'
            },
            {
                'viewName': 'GRAPHIC DESIGN',
                'targetUrl': '#'
            }
        ]
    },
    'contact': {
        'viewName': 'CONTACT',
        'targetUrl': '#',
        'iconClass': 'menu-icons fa fa-envelope'
    }
});
