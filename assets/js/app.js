(function () {

    var app = angular.module('appSandbox', []);

    app.controller('NavbarController', function ($scope) {
        $scope.navbar = [
            {'name': 'Home', 'href': '/', 'status': 'class="active"'},
            {'name': 'About', 'href': '/about', 'status': ''},
            {'name': 'Contact', 'href': '/contact', 'status': ''},
            {'name': 'Linkedin', 'href': '/linkedin', 'status': ''},
            {'name': 'GitHub', 'href': '/github', 'status': ''}
        ];
    });

    app.controller('NewsController', function ($scope) {

        $scope.articles = [
            {'title': 'First',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis iste itaque magnam maxime minus nemo neque nesciunt nobis nostrum, nulla, porro qui recusandae repudiandae rerum tempora, ut!',
                'date': '2014-03-12',
                'dateString': '03 Dic 2014',
                'image': 'holder.js/200x200/',
                'permalink': '/permalink1213'
            },
            {'title': 'Second test',
                'description': 'Lorem ipsum dolor sit amet, angularjs consectetur adipisicing elit. Est mollitia numquam quo repellat repellendus repudiandae tempora voluptates voluptatum. A commodi culpa laborum nulla odio porro quod sequi similique! Dicta, ipsa.',
                'date': '2014-04-12',
                'dateString': '07 Dic 2014',
                'image': 'holder.js/500x300',
                'permalink': '/permalink1213'
            },
            {'title': 'Third test',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia numquam quo repellat repellendus repudiandae tempora voluptates voluptatum. A commodi culpa laborum nulla odio porro quod sequi similique! Dicta, ipsa.',
                'date': '2014-04-11',
                'dateString': '04 Nov 2014',
                'image': '',
                'permalink': '/permalink1213'
            },
            {'title': 'Fourth',
                'description': 'Angular Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia numquam quo repellat repellendus repudiandae tempora voluptates voluptatum. A commodi culpa laborum nulla odio porro quod sequi similique! Dicta, ipsa.',
                'date': '2014-04-11',
                'dateString': '07 Nov 2014',
                'image': 'holder.js/500x300',
                'permalink': '/permalink1213'
            },
            {'title': 'Fifth',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia numquam quo repellat repellendus repudiandae tempora voluptates voluptatum. A commodi culpa laborum nulla odio porro quod sequi similique! Dicta, ipsa.',
                'date': '2014-04-12',
                'dateString': '04 Dic 2014',
                'image': '',
                'permalink': '/permalink1213'
            }

        ];
    });

})();