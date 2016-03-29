'use strict';

var zetaApp = angular.module('zetaApp');

zetaApp.value('menuConfig', {
    'menu': [
        {
            'viewName': 'Menu 1',
            'targetUrl': '#'
        },
        {
            'viewName': 'Menu 2',
            'targetUrl': '#',
            'submenu': [
                {
                    'viewName': 'Sub Menu1',
                    'targetUrl': '#'
                },
                {
                    'viewName': 'Sub Menu2',
                    'targetUrl': '#'
                },
                {
                    'viewName': 'Sub Menu3',
                    'targetUrl': '#',
                    'submenu': [
                        {
                            'viewName': 'Sub Menu1.1',
                            'targetUrl': '#'
                        },
                        {
                            'viewName': 'Sub Menu2.1',
                            'targetUrl': '#'
                        },
                        {
                            'viewName': 'Sub Menu3.1',
                            'targetUrl': '#'
                        }
                    ]
                }
            ]
        },
        {
            'viewName': 'Menu 3',
            'targetUrl': '#'
        }
    ]
});
