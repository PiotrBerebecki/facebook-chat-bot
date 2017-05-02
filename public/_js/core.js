angular.module('public', [
    'common',
    'ngRoute',
    'ngTemplates',
    'pascalprecht.translate',
    'app.i18n',
    'ngNotify',
    'cfp.loadingBar',
    'ngAnimate'
]).config(['$translateProvider',
    function($translateProvider) {
        $translateProvider.useSanitizeValueStrategy(null).useStaticFilesLoader({
            prefix: '',
            suffix: '.json'
        }).useLoaderCache('$translationCache').preferredLanguage('en');

    }
]).config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(true);
    }
]).config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $httpProvider.interceptors.push('httpInterceptorPublic');
    }
]).run(["$rootScope", function($rootScope){
	$rootScope.appName = 'Framework';
}]);

angular.module('private', [
    'common',
    'ngRoute',
    'ngTemplates',
    'ngTable',
    'chart.js',
    'ngTagsInput',
    'cfp.loadingBar',
    'ngNotify',
    'angularPromiseButtons',
    'angularModalService',
    'pascalprecht.translate',
    'ngPrettyJson',
    'color.picker',
    'app.i18n',
    '720kb.datepicker',
    'angularMoment',
    'ngAnimate',
    'angularUtils.directives.dirPagination',
    'ngSanitize',
    'ngCsv'
]).config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/404'
            });
    }
]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]).config(['$translateProvider',
    function($translateProvider) {
        $translateProvider.useSanitizeValueStrategy(null).useStaticFilesLoader({
            prefix: '',
            suffix: '.json'
        }).useLoaderCache('$translationCache').preferredLanguage('en');

    }
]).config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $httpProvider.interceptors.push('httpInterceptorPrivate');
    }
]).config(['$compileProvider',
    function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }
]).run(["$rootScope", function($rootScope){
	$rootScope.appName = 'Framework';
}]);

angular.module('common', []);

(function(module) {
try {
  module = angular.module('app.i18n');
} catch (e) {
  module = angular.module('app.i18n', []);
}
module.run(['$translationCache', function($translationCache) {
  $translationCache.put('en.json',
    '{"COMMON":{"CLASSIFER":"Classifier","IMPORT":"Import","SAVE":"Save","CANCEL":"Cancel","CONFIRM":"Confirm","DELETE":"Delete","CREATE":"Create","UPDATE":"Update"},"LOGIN":{"HEADER":"Filament Chatbot Engine","SUBHEADER":"Login","FORGOTTENPASSWORD":"Forgotten your password?","RESETIT":"Reset it.","FORM":{"EMAIL":"Email address","EMAIL_ERROR":"Please enter a valid email","PASSWORD":"Password","PASSWORD_ERROR":"Please enter a valid password","LOGIN":"Login"}},"PASSWORD":{"HEADER":"Email Confirmation","EMAIL_SENT":"Please check your email.","FORM":{"EMAIL":"Email address","EMAIL_ERROR":"Email address can not be empty","RESET":"Reset password"}},"REGISTER":{"SUBHEADER":"Registration","FORM":{"REGISTER":"Register"}},"CARD_LIST":{"ADD_NEW":"Add a new "},"MODALS":{"DELETE_CONFIRMATION":"Delete Confirmation","REMOVE_ITEM":"Are you sure you want to remove this item?"},"NAV":{"ACCOUNT":"Account","SUBMIT_TICKET":"Submit ticket","LOGOUT":"Logout","APPLICATION":"Workspace","REPORTS":"Overview","CONVERSATIONS":"Conversations","CONSOLE":"Chat Console","STUDIO":"Connector Studio","QUESTIONS":"Analytics","SETTINGS":"Settings","FLAGGED":"Flagged Messages"},"LANDING":{"HEADER":"Analytic Reports","SUBHEADER":"View reports for your chatbot","OVERVIEW":"Overview","LOGS":"Logs","ACCURACY":"Accuracy","TOTAL_CALLS":"Total Calls","NO_QUERIES":"You have not made any queries yet.","BETWEEN":"Between","FROM_DATE":"From date:","TO_DATE":"To date:","TOTAL_CONVERSATIONS":"Conversations completed","TOTAL_MESSAGES":"Messages recieved","TOTAL_CORRECT":"Messages answered","TOTAL_INCORRECT":"Messages unanswered","QUERIES_CHANNEL":"Session by Channel","QUERIES_CHANNEL_SUBLINE":"Breakdown of sessions by channel","QUERIES_INTENT":"Messages by Top 5 Intents","QUERIES_INTENT_SUBLINE":"Breakdown of messages by the most popular intents","QUERIES_EMOTION":"Messages by Emotion","QUERIES_EMOTION_SUBLINE":"Breakdown of message by emotion","QUERIES_OVERTIME":"Conversations Overtime","QUERIES_OVERTIME_SUBLINE":"Conversation show overtime","QUERIES":"Latest Queries","QUERIES_SUBLINE":"List of the lastest messages recieved","CONVERSATIONS":"Conversations","CONVERSATIONS_SUBLINE":"Conversations by date","NO_CONVERSATIONS":"No conversations found.","FLAGGED":"Flagged Messages","FLAGGED_SUBHEADER":"Messages containing the flagged keywords"},"QUESTIONS":{"QUESTION_ONE":"Difficulty sleeping","QUESTION_ONE_SUBLINE":"Have you had any difficulty sleeping during the last month, specifically because of your asthma?","QUESTION_TWO":"Symptoms","QUESTION_TWO_SUBLINE":"Have you had any difficulty sleeping during the last month, specifically because of your asthma?","QUESTION_THREE":"Second Symptoms","QUESTION_THREE_SUBLINE":"Have you also experienced any of the other symptoms?","QUESTION_FOUR":"Activites","QUESTION_FOUR_SUBLINE":"In the past month has asthma interfered with your usual activities?","QUESTION_FIVE":"Second Activites","QUESTION_FIVE_SUBLINE":"Has your asthma impacted any of the other activities?","QUESTION_SIX":"Downloads","QUESTION_SIX_SUBLINE":"Download type","QUESTION_SEVEN":"See A Doctor","QUESTION_SEVEN_SUBLINE":"I really hope that you feel prepared to go and seek more advice from your doctor?","QUESTION_EIGHT":"Useful","QUESTION_EIGHT_SUBLINE":"Have you had any difficulty sleeping during the last month, specifically because of your asthma?","QUESTION_NINE":"Downloads","QUESTION_NINE_SUBLINE":"Have you had any difficulty sleeping during the last month, specifically because of your asthma?","REASONS":"Free text answers","REASONS_SUBLINE":"List of all free text answers"},"SETTINGS":{"HEADER":"Settings","SUBHEADER":"Configure your bot","NAME":"Bot Name","NAME_INFO":"This will be displayed on the web widget","NAME_PLACEHOLDER":"e.g Qbot..","NAME_ERROR":"Bot name can not be blank","COLOR":"Brand Colour","COLOR_INFO":"Colour of the chat bubbles","COLOR_ERROR":"Colour can not be blank","FONT":"Font Colour","FONT_INFO":"Font colour of the chat bubbles","FONT_ERROR":"Font colour can not be blank","AVATAR":"Avatar Url","AVATAR_INFO":"avatar icon url (https)","AVATAR_ERROR":"Avatar can not be blank","INTRODUCTION":"Welcome Message","INTRODUCTION_INFO":"This will be shown on the welcome screen","INTRODUCTION_ERROR":"Introduction can not be empty","MENU":"Persistent Menu","MENU_INFO":"Add upto 5 options in the presistent menu","TITLE":"Title","URL":"Url"}}');
}]);
})();

angular.module("ngTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/partials/404.html","<div style=\"text-align:center\">\n  <h1>404</h1>\n  <h2>Page not found...</h2>\n  <img src=\"/android-chrome-384x384.png\" alt=\"logo\">\n</div>\n");
$templateCache.put("/partials/public/landing/landing.html","");
$templateCache.put("/partials/public/auth/login.html","<div id=\"canvas-background\" class=\"canvas-background\">\n	<canvas id=\"demo-canvas\"></canvas>\n</div>\n<div class=\"centre-screen\">\n	<div class=\"container\">\n		<form name=\"loginForm\" class=\"boxed\" role=\"form\" method=\"POST\" ng-submit=\"login(loginForm.$valid,user)\" novalidate>\n			<h1>{{appName}} {{\'LOGIN.SUBHEADER\' | translate}}</h1>\n			<p>{{\'LOGIN.FORGOTTENPASSWORD\' | translate}} <a href=\"/#/passwordreset\">{{\'LOGIN.RESETIT\' | translate}}</a></p>\n			<ul ng-show=\"errors\" class=\"alert alert-error\"><li ng-repeat=\"error in errors\">{{error}}</li></ul>\n			<div class=\"form-group\">\n				<label><span>{{\'LOGIN.FORM.EMAIL\' | translate}} </span>\n					<span class=\"field-required\" ng-show=\"loginForm.email.$pristine\">*</span>\n					<span class=\"field-valid\"  ng-show=\"loginForm.email.$dirty && loginForm.email.$valid\"><i class=\"ion-checkmark-circled success\"></i></span>\n					<span class=\"field-error\" ng-show=\"loginForm.email.$dirty && loginForm.email.$invalid\"><i class=\"ion-close-circled\"></i></span>\n				</label>\n				<input type=\"text\" class=\"form__control\" name=\"email\" placeholder=\"{{\'LOGIN.FORM.EMAIL\' | translate}}\" ng-model=\"user.email\" required>\n				<span class=\"field-error-message\" ng-show=\"loginForm.email.$dirty && loginForm.email.$invalid\">{{\'LOGIN.FORM.EMAIL_ERROR\' | translate}}</span>\n			</div>\n			<div class=\"form-group\">\n				<label><span>{{\'LOGIN.FORM.PASSWORD\' | translate}} </span>\n					<span class=\"field-required\" ng-show=\"loginForm.password.$pristine\">*</span>\n					<span class=\"field-valid\" ng-show=\"loginForm.password.$dirty && loginForm.password.$valid\"><i class=\"ion-checkmark-circled success\"></i></span>\n					<span class=\"field-error\" ng-show=\"loginForm.password.$dirty && loginForm.password.$invalid\"><i class=\"ion-close-circled\"></i></span>\n				</label>\n				<input type=\"password\" class=\"form__control\" name=\"password\" placeholder=\"{{\'LOGIN.FORM.PASSWORD\' | translate}}\" ng-model=\"user.password\" required>\n				<span class=\"field-error-message\" ng-show=\"loginForm.password.$dirty && loginForm.password.$invalid\">{{\'LOGIN.FORM.PASSWORD_ERROR\' | translate}}</span>\n			</div>\n			<div class=\"form-group\">\n				<button type=\"submit\" class=\"button button--primary\">{{\'LOGIN.FORM.LOGIN\' | translate}}</button>\n			</div>\n		</form>\n	</div>\n</div>\n");
$templateCache.put("/partials/public/auth/register.html","<div id=\"canvas-background\" class=\"canvas-background\">\n	<canvas id=\"demo-canvas\"></canvas>\n</div>\n<div class=\"centre-screen\">\n	<div class=\"container\">\n		<form name=\"registerForm\" class=\"boxed\" role=\"form\" method=\"POST\" ng-submit=\"register(registerForm.$valid, user)\" novalidate>\n			<h1>{{appName}} {{\'REGISTER.SUBHEADER\' | translate}}</h1>\n			<ul ng-show=\"errors\" class=\"alert alert-error\"><li ng-repeat=\"error in errors\">{{error}}</li></ul>\n			<div class=\"form-group\">\n				<label><span>{{\'LOGIN.FORM.EMAIL\' | translate}} </span>\n					<span class=\"field-required\" ng-show=\"registerForm.email.$pristine\">*</span>\n					<span class=\"field-valid\"  ng-show=\"registerForm.email.$dirty && registerForm.email.$valid\"><i class=\"ion-checkmark-circled success\"></i></span>\n					<span class=\"field-error\" ng-show=\"registerForm.email.$dirty && registerForm.email.$invalid\"><i class=\"ion-close-circled\"></i></span>\n				</label>\n				<input type=\"text\" class=\"form__control\" name=\"email\" placeholder=\"{{\'LOGIN.FORM.EMAIL\' | translate}}\" ng-model=\"user.email\" required>\n				<span class=\"field-error-message\" ng-show=\"registerForm.email.$dirty && registerForm.email.$invalid\">{{\'LOGIN.FORM.EMAIL_ERROR\' | translate}}</span>\n			</div>\n			<div class=\"form-group\">\n				<label><span>{{\'LOGIN.FORM.PASSWORD\' | translate}} </span>\n					<span class=\"field-required\" ng-show=\"registerForm.password.$pristine\">*</span>\n					<span class=\"field-valid\" ng-show=\"registerForm.password.$dirty && registerForm.password.$valid\"><i class=\"ion-checkmark-circled success\"></i></span>\n					<span class=\"field-error\" ng-show=\"registerForm.password.$dirty && registerForm.password.$invalid\"><i class=\"ion-close-circled\"></i></span>\n				</label>\n				<input type=\"password\" class=\"form__control\" name=\"password\" placeholder=\"{{\'LOGIN.FORM.PASSWORD\' | translate}}\" ng-model=\"user.password\" required>\n				<span class=\"field-error-message\" ng-show=\"registerForm.password.$dirty && registerForm.password.$invalid\">{{\'LOGIN.FORM.PASSWORD_ERROR\' | translate}}</span>\n			</div>\n			<div class=\"form-group\">\n				<button type=\"submit\" class=\"button button--primary\">{{\'REGISTER.FORM.REGISTER\' | translate}}</button>\n			</div>\n		</form>\n	</div>\n</div>\n");
$templateCache.put("/partials/private/dashboard/chat.html","<chat></chat>\n");
$templateCache.put("/partials/private/directives/chat.html","<div class=\"chat-container clearfix\">\n\n    <div class=\"chat\">\n        <div class=\"chat-header clearfix\">\n            <img src=\"/_img/tinka.png\" alt=\"avatar\" />\n\n            <div class=\"chat-about\">\n                <div class=\"chat-with\">Chat with Bot</div>\n                <div class=\"chat-num-messages\">Bot Testing</div>\n            </div>\n        </div>\n        <!-- end chat-header -->\n\n        <div class=\"chat-history\">\n\n            <ul id=\"chat-history\">\n\n                <li ng-repeat=\"item in messages track by item.id\">\n\n                    <div ng-if=\"item.isSelf\">\n                        <div class=\"message-data align-right\">\n                            <span class=\"message-data-time\">{{item.time}}</span> &nbsp; &nbsp;\n                            <span class=\"message-data-name\">You</span>\n                        </div>\n                        <div class=\"message other-message\">\n                            {{item.message}}\n                        </div>\n                    </div>\n                    <div ng-if=\"!item.isSelf\">\n                        <div class=\"message-data\" ng-if=\"!item.isSelf\">\n                            <span class=\"message-data-name\">Bot</span>\n                            <span class=\"message-data-time\">{{item.time}}</span>\n                        </div>\n                        <div class=\"message my-message {{item.type}}\">\n                            <div ng-if=\"item.type == \'text\'\">\n                                {{item.message}}\n                            </div>\n                            <div ng-if=\"item.type == \'image\'\">\n                                <img src=\"{{item.message}}\" alt=\"\">\n                            </div>\n\n                            <div ng-if=\"item.type == \'generic\'\">\n                                <div ng-repeat=\"card in item.message\" class=\"chat-card\">\n                                    <img ng-src=\"{{card.image_url}}\" alt=\"\" ng-show=\"card.image_url\">\n                                    <div class=\"content\">\n                                        <h2>{{card.title}}</h2>\n                                        <span>{{card.subtitle}}</span>\n                                        <div ng-repeat=\"button in card.buttons\" class=\"button--container\">\n                                            <button type=\"button\" class=\"button button--secondary\" ng-click=\"processButton(button)\">{{button.title}}</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div ng-if=\"item.type == \'message-button\'\">\n                                {{item.message}}\n                                <div class=\"content\">\n                                    <div ng-repeat=\"button in item.result.buttons\" class=\"button--container\">\n                                        <button type=\"button\" class=\"button button--white-outline\" ng-click=\"processButton(button)\">{{button.title}}</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div ng-if=\"item.type == \'list\'\">\n                                <div ng-repeat=\"row in item.payload.elements\" class=\"chat-list\">\n                                    <div class=\"content\">\n                                        <h2>{{row.title}}</h2>\n                                        <span>{{row.subtitle}}</span>\n                                        <div ng-repeat=\"button in row.buttons\" class=\"chat-list-button\">\n                                            <button type=\"button\" class=\"button button--primary-outline\" ng-click=\"processButton(button)\">{{button.title}}</button>\n                                        </div>\n                                    </div>\n                                    <div class=\"list-image\">\n                                        <img ng-src=\"{{row.image_url}}\" alt=\"\" ng-show=\"row.image_url\">\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                        <span class=\"meta\" ng-if=\"item.result.response\">\n                            <span>Detected Tone:\n                                <span class=\"emotion-dot {{item.remotion}}\"></span> {{item.emotion || \'neutral\'}} | </span> <a href=\"\" ng-click=\"retrain(item.result)\">view details or re-train answer</a></span>\n                    </div>\n                </li>\n                <li id=\"loader\">\n                    <div class=\"message-data\" ng-if=\"!item.isSelf\">\n                        <span class=\"message-data-name\">Bot</span>\n                        <span class=\"message-data-time\">{{item.time}}</span>\n                    </div>\n                    <div class=\"message my-message with-loading\">\n                        <div class=\"loading\">\n                            <span></span>\n                        </div>\n                    </div>\n                </li>\n\n            </ul>\n\n        </div>\n        <!-- end chat-history -->\n\n        <div class=\"chat-message clearfix\">\n            <textarea name=\"message-to-send\" id=\"message-to-send\" placeholder=\"Type your message\" rows=\"1\" ng-model=\"message\"></textarea>\n            <button>Send</button>\n\n        </div>\n        <!-- end chat-message -->\n\n    </div>\n    <!-- end chat -->\n\n</div>\n<!-- end container -->\n");}]);
/**
 * @name private.redirect
 * @description 404 redirect page
 * @param {object} Angular module with dependencies
 **/

(function() {

    LoginController.$inject = ["$scope"];
    angular
        .module('private')
        .controller('private.404.controller', LoginController)
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/404', {
                        templateUrl: '/partials/404.html',
                        controller: 'private.404.controller'
                    });
            }
    ]);

    /* @ngInject */
    function LoginController($scope) {

    }


}());

/**
 * @name directives.animator
 * @description Animate.css triggers on scroll
 **/

(function() {

    animatorController.$inject = ["$window"];
    angular
        .module('common')
        .directive('animator', animatorController);

    /* @ngInject */
    function animatorController($window) {
        return {
            restrict: 'A',
            transclude: true,
            replace: true,
            template: '<div ng-transclude ng-show=\'show\'></div>',
            scope: {
                show: '@',
            },
            link: function($scope, $element, $attrs) {

                // Calculate if element is in viewport
                function elementInViewport(elem) {
                    el = elem[0];
                    var rect = el.getBoundingClientRect();

                    return rect.bottom > 0 &&
                        rect.right > 0 &&
                        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
                        rect.top < (window.innerHeight || document.documentElement.clientHeight);
                }

                // bind to window scroll.
                angular.element($window).bind('scroll', function() {
                    if (elementInViewport($element) && !$scope.show) {
                        $scope.show = true;
                    }

                    $scope.$apply();
                });
            }
        };

    }

}());

/**
 * @name directives.avatar
 **/

(function(app) {

    avatarController.$inject = ["$scope", "$element", "authService"];
    angular
        .module('common')
        .directive('avatar', avatarConfig)
        .controller('avatar.directive.controller', avatarController);

    /* @ngInject */
    function avatarController($scope, $element, authService) {


        var setInitials = function() {
            if ($scope.firstname) {
                $element.text($scope.firstname.charAt(0) + $scope.lastname.charAt(0));
            } else {
                $element.text('ME');
            }
        };

        setInitials();
    }

    function avatarConfig() {
        return {
            restrict: 'E',
            controller: 'avatar.directive.controller',
            scope: {
                firstname: '=',
                lastname: '=',
                userid: '='
            }
        };
    }

}());

/**
 * @name directives.avatar
 **/

(function() {

    DirectiveController.$inject = ["$scope", "$element", "$rootScope", "$window", "$location", "eventService"];
    angular
        .module('common')
        .directive('cardList', DirectiveConfig)
        .controller('directives.card-list.controller', DirectiveController);

    /* @ngInject */
    function DirectiveController($scope, $element, $rootScope, $window, $location, eventService) {


        /*
        Bindable variables
         */

        $scope.perPage = 15;
        $scope.showLoader = true;
        $scope.sortBy = $scope.title;
        $scope.listData = [];
        $scope.gotoLocation = gotoLocation;
        $scope.openMenu = openMenu;



        /*
        Private functions
         */

        function gotoLocation(link, item, $event, isNew, isEdit) {
            var create, edit, currentPath = $location.path();

            $event.stopPropagation();

            if (isNew) {
                create = (currentPath == '/') ? 'create' : '/create';
                edit = (currentPath == '/') ? 'create' : '/create';
                $location.path(currentPath + (isNew ? create : edit));
            } else {

                link = link + (item.id ? ('/' + item.id) : '');

                if (link.indexOf('#/') > -1) {
                    $location.path(link.replace('#', ''));
                } else {
                    if (currentPath == '/') {
                        eventService.send('send-application-title', item);
                        $location.path(link);
                    } else {
                        $location.path(currentPath + link);
                    }
                }
            }

        }

        if ($window.innerHeight > 800) {
            $scope.perPage = 14;
        }

        if ($window.innerHeight > 900) {
            $scope.perPage = 14;
        }

        function openMenu(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        var init = function() {
            $scope.showLoader = false;
        };

        var unwatch = $scope.$watch('cardData', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                $scope.cardData = newVal;
                init();

                // remove the watcher
                //unwatch();
            }
        });

    }

    function DirectiveConfig() {
        return {
            restrict: 'E',
            scope: {
                cardData: '=ngModel',
                title: '@title',
                description: '@description',
                link: '@link',
                name: '@name',
                created: '@created'
            },
            templateUrl: '/partials/private/directives/card-list.html',
            controller: 'directives.card-list.controller'
        };
    }

}());

/**
 * @name directives.chat
 **/

(function() {

    chatController.$inject = ["$scope", "$element", "$timeout", "apiService", "ModalService", "notificationService"];
    angular
        .module('common')
        .directive('chat', chatConfig)
        .controller('chat.directive.controller', chatController);

    /* @ngInject */
    function chatController($scope, $element, $timeout, apiService, ModalService, notificationService) {

      /*
      Events
       */

        $scope.message = '';
        $scope.messages = [];
        $scope.retrain = retrain;
        $scope.loading = false;
        $scope.processButton = processButton;
        $scope.sendMessage = sendMessage;

        var sessionId;
        var chat = document.getElementById("chat-history");
        var loader = document.getElementById("loader");
        var socket = io();

        $scope.bot = {
            name: 'Bot',
            id: 'bot',
            description: 'This is the bot framework',
            welcome: "Hi I'm botty,",
            active: true,
            message: []
        };

        /*
        Private functions
         */

        function apiServiceError(err) {
            notificationService.defaultError();
        }

        function processButton(button) {
            if (button.url) {
                window.open(button.url);
            }

            if (button.payload) {
                $scope.messages.push({
                  id: $scope.messages.length,
                  message: button.payload,
                  isSelf: true,
                  type: 'user'
                });

                sendMessage(button.payload);
            }
        }

        function sendReply(message) {
            document.getElementById('loader').style.display = 'block';

            $scope.loading = true;

            $timeout(function() {
                document.getElementById('loader').style.display = 'none';
                $scope.loading = false;

                var payload;

                if (message.answer.attachment && message.answer.attachment.payload) {
                    payload = message.answer.attachment.payload;
                }

                $scope.messages.push({
                    id: $scope.messages.length,
                    message: message.answer.text,
                    isSelf: false,
                    result: message,
                    type: message.type,
                    payload: payload
                });

                $scope.finished();

            }, 10);
        }

        function setEmotions(result) {
            var highest = 0,
                tone = 'joy';

            result.answer.tone = 'joy';

            if (result.answer.emotions) {
                for (var property in result.answer.emotions.emotions) {
                    if (result.answer.emotions.emotions[property] > highest) {
                        highest = result.answer.emotions.emotions[property];
                        tone = property;
                    }
                }

                result.answer.tone = tone;
            }

            return result;
        }

        function setMessageText(result) {


            if (result.answer.speech) {
                result.answer.text = result.answer.speech;
            }

            if (result.answer.emotions && result.answer.emotions.speech) {
                result.answer.text = result.answer.emotions.speech;
            }

            if (result.answer.attachment) {
                result.type = result.answer.attachment.type;

                if (result.type === 'image') {
                    result.answer.text = result.answer.attachment.payload.url;
                }

                if (result.type === 'template') {
                    result.type = result.answer.attachment.payload.template_type;

                    if (result.type === 'generic') {
                        result.answer.text = result.answer.attachment.payload.elements;
                    }

                    if (result.type === 'button') {
                        result.type = 'message-button';
                        result.answer.text = result.answer.attachment.payload.text;
                        result.buttons = result.answer.attachment.payload.buttons;
                    }
                }
            }


            if (result.answer.quick_replies) {
                result.buttons = result.answer.quick_replies;
                result.type = 'message-button';
            }

            return result;
        }


        function setSessionId(result) {
            if (result.question && result.question.sessionId) {
                sessionId = result.question.sessionId;
            } else if (result.session_id) {
                sessionId = result.session_id;
            }

            return result;
        }

        function processResponse(result) {
            result = setMessageText(result);
            result = setSessionId(result);

            if (result.answer.emotions) {
                result = setEmotions(result);
            }

            sendReply(result);
        }

        function sendMessage(message) {
            var isAuto = true;

            if ($scope.message.length > 0 || message) {

                if (!message) {
                    isAuto = false;
                    message = $scope.message;
                }

                $scope.message = '';

                if (!isAuto) {
                    $scope.messages.push({
                        id: $scope.messages.length,
                        message: message,
                        isSelf: true,
                        type: 'user'
                    });
                }

                $scope.finished();

                socket.emit('message', {
                    message: message,
                    sessionId: sessionId
                });
            }

        }

        // Remove job from queue and from the front-end list.
        function retrain(row) {
            ModalService.showModal({
                templateUrl: "/partials/private/directives/models/retrain.html",
                controller: "directives.modals.retrain.controller",
                inputs: {
                    item: row
                }
            }).then(function(modal) {
                modal.close.then(function(result) {});
            });
        }

        $scope.finished = function() {
            $timeout(function() {
                chat.scrollTop = chat.scrollHeight - chat.clientHeight;
            });
        };

        /*
        Events
         */

        socket.on('response', function(result) {
            if (result) {
                result.type = 'text';

                if (result.answer && typeof result.answer == 'string') {
                    result.answer = JSON.parse(result.answer);
                }

                if (result.response && typeof result.response == 'string') {
                    result.response = JSON.parse(result.response);
                }

                processResponse(result);
            }

        });

        document.getElementById('message-to-send').onkeypress = function(event) {
            if (event.which === 13) {
                event.preventDefault();
                $scope.sendMessage();
                $scope.$apply();
            }
        };

        sendReply({
            answer: {
                text: $scope.bot.welcome
            },
            type: 'text'
        });

    }

    function chatConfig() {
        return {
            restrict: 'E',
            templateUrl: '/partials/private/directives/chat.html',
            controller: 'chat.directive.controller',
        };
    }

}());

/**
 * @name directives.dropdown
 **/

(function() {

    angular
        .module('common')
        .directive('dropdown', DropConfig);

    function DropConfig() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                // Toggle active class on current element.
                element.bind('click', function(e) {
                    element.toggleClass('active');
                });
            }
        };
    }

}());

/**
 * @name directives.headerbar.private
 * @description Fixed top bar navigation
 * @param {object} Angular module with dependencies
 **/

(function(app) {

    app.controller('directives.headerbar.private.controller', ['$scope', '$element', '$window', '$location', 'apiService', 'authService', 'eventService', 'ngNotify',
        function($scope, $element, $window, $location, apiService, authService, eventService, ngNotify) {

            $scope.menuOpen = false;
            $scope.applicationOpen = false;
            $scope.showNav = false;

            $scope.user = authService.isAuthenticated();

            $scope.brand = false;

            if ($location.path().indexOf('software') > -1) {
                $scope.brand = 'software';
            }

            if ($location.path().indexOf('filament') > -1) {
                $scope.brand = 'filament';
            }

            $scope.getClass = function(path) {
                if (path == '/') {

                    return $location.path() === '/' ? 'active' : '';
                } else {

                    return ($location.path().indexOf(path) > -1) ? 'active' : '';
                }
            };

            $scope.logout = function() {
                authService.deAuthenticate();
                window.location = '/';

            };
        }
    ]);

    app.directive('headerBarPrivate', function() {
        return {
            restrict: 'E',
            templateUrl: '/partials/chrome/header-bar-private.html',
            controller: 'directives.headerbar.private.controller'
        };
    });


}(angular.module("common")));

/**
 * @name directives.headerbar.public
 **/

(function(app) {

    app.controller('directives.headerbar.public.controller', ['$scope', '$element', '$rootScope', '$location', '$window',
        function($scope, $element, $rootScope, $location, $window) {

            $scope.menuOpen = false;

            var menuIsDown = false;

            if ($scope.slideDown) {

                angular.element($window).bind('scroll', function() {
                    if ($window.scrollY > 200 && !menuIsDown) {
                        $element.addClass('affix');
                        menuIsDown = true;
                    } else if (menuIsDown && $window.scrollY <= 10) {
                        menuIsDown = false;
                        $element.removeClass('affix');
                    }
                });
            }

                        $scope.brand = false;

            if ($location.path().indexOf('software') > -1) {
                $scope.brand = 'Software One';
            }

            if ($location.path().indexOf('filament') > -1) {
                $scope.brand = 'filament';
            }


            $scope.getClass = function(path) {
                return ($location.path().substr(0, path.length) === path) ? 'active' : '';
            };

        }
    ]);

    app.directive('headerBarPublic', function() {
        return {
            restrict: 'E',
            scope: {
                slideDown: "@slideDown",
            },
            templateUrl: '/partials/chrome/header-bar-public.html',
            controller: 'directives.headerbar.public.controller'
        };
    });


}(angular.module("common")));

/**
 * @name Match
 * @description Add input field validation for matching with another field
 * @param {object} Angular module with dependencies
 **/

(function(app) {

    app.directive('match', ['$parse',
        function($parse) {
            return {
                require: "ngModel",
                link: function(scope, elem, attrs, ctrl) {
                    var otherInput = elem.inheritedData("$formController")[attrs.match];

                    ctrl.$parsers.push(function(value) {
                        if (value === otherInput.$viewValue) {
                            ctrl.$setValidity("match", true);
                            return value;
                        }
                        ctrl.$setValidity("match", false);
                    });

                    otherInput.$parsers.push(function(value) {
                        ctrl.$setValidity("match", value === ctrl.$viewValue);
                        return value;
                    });
                }
            };
        }
    ]);

}(angular.module("common")));

/**
 * @name directives.progressbar
 * @param {object} Angular module with dependencies
 **/

(function(app) {

    app.controller('directives.progressbar.controller', ['$scope', '$element', '$rootScope',
        function($scope, $element, $rootScope) {

            $scope.progressValue = 0;
            $scope.class = 'success';

            var percentage = ($scope.used * 100) / $scope.total;

            if ($scope.reverse) {
                $scope.class = "danger";
            }


            if (percentage > 60) {
                $scope.class = 'warning';
            }

            if (percentage > 80) {
                $scope.class = $scope.reverse ? 'success' : 'danger';
            }

            $scope.progressValue = percentage;


        }
    ]);

    app.directive('progressBar', function() {
        return {
            restrict: 'E',
            templateUrl: '/partials/private/directives/progressbar.html',
            controller: 'directives.progressbar.controller',
            scope: {
                total: '@total',
                used: '@used',
                reverse: '@reverse'
            }
        };
    });

}(angular.module("common")));

/**
 * @name directives.toggle.class
 * @description toggles class on self when clicked
 * @param {object} Angular module with dependencies
 **/

(function(app) {

    app.directive('toggleClass', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function(e) {
                    e.stopPropagation();
                    if (element.hasClass(attrs.toggleClass) && attrs.removeSelf) {
                        element.removeClass(attrs.toggleClass);
                    } else {

                        if (!element.hasClass('active')) {
                            element.parent().parent().find('a').removeClass(attrs.toggleClass);
                            element.toggleClass(attrs.toggleClass);
                        }
                    }
                });
            }
        };
    });

}(angular.module("common")));

/**
 * @name api service
 * @description API method requests
 * @param {object} Angular module with dependencies
 **/

(function(app) {

    ApiService.$inject = ["$q", "$rootScope", "$http", "cfpLoadingBar"];
    var useMock = false;

    angular
        .module('common')
        .service('apiService', ApiService);

    /* @ngInject */
    function ApiService($q, $rootScope, $http, cfpLoadingBar) {

        var _this = this;

        var API_URL = '/api';

        /**
         * Transform shortform endpoint to full parameterised form
         * @param {String} endpoint short form of endpoint
         * @return {String} full parameterised endpoint || new Error
         */
        var getEndpoint = function(endpoint) {
            var resolvedEndpoint;

            // list possiable endpoints and return. If no match found, return false
            var services = {
                'login': '/auth/login',
                'logout': '/auth/logout',
                'register': '/auth/register',
                'message': '/web/message',
                'totals': '/analytics/totals/{from_date}/{to_date}',
                'channels': '/analytics/channels/{from_date}/{to_date}',
                'messages': '/analytics/messages/{from_date}/{to_date}',
                'messages_paged': '/analytics/messages/{from_date}/{to_date}/{count}/{page}',
                'messages_paged_sorted': '/analytics/messages/{from_date}/{to_date}/{count}/{page}/{sort}/{direction}',
                'unanswered_paged': '/analytics/messages/unanswered/{from_date}/{to_date}/{count}/{page}',
                'unanswered_paged_sorted': '/analytics/messages/unanswered/{from_date}/{to_date}/{count}/{page}/{sort}/{direction}',
                'flagged': '/analytics/messages/flagged/{from_date}/{to_date}/{count}/{page}',
                'flagged_paged_sorted': '/analytics/messages/flagged/{from_date}/{to_date}/{count}/{page}/{sort}/{direction}',
                'intent_percentage': '/analytics/intents/{from_date}/{to_date}',
                'intents': '/training/intents',
                'intent': '/training/intent/{id}',
                'conversations': '/analytics/conversations/{from_date}/{to_date}',
                'conversations_paged': '/analytics/conversations/{from_date}/{to_date}/{count}/{page}',
                'conversations_paged_sorted': '/analytics/conversations/{from_date}/{to_date}/{count}/{page}/{sort}/{direction}',
                'conversation': '/analytics/conversations/{id}/messages',
                'emotion': '/training/emotion/{id}',
                'settings': '/config'
            };

            // To be safe, allow users to use camelcase, - or _
            resolvedEndpoint = services[endpoint.toLowerCase()] || false;

            // If endpoint is incorrect, throw error
            if (!resolvedEndpoint) {
                throw new Error('Invalid API endpoint, Remember to add new endpoints to api.js getEndpoint function. Endpoint: ' + endpoint);
            }

            return resolvedEndpoint;
        };


        /**
         * Checks if sessionStorage is available on client
         * @return {Boolean}
         */
        var storageAvailable = function() {
            return (typeof(Storage) !== "undefined");
        };


        /**
         * Gets string value from a object property, using dot notation for child items.
         * @param {String} propertyname Property name
         * @param {Object} obj Object to check against
         * @return {String} property value
         */
        var getProperty = function(propertyName, obj) {
            var parts = propertyName.split("."),
                length = parts.length,
                i,
                property = obj || this;

            for (i = 0; i < length; i++) {
                property = property[parts[i]];
            }

            return property;
        };


        /**
         * Replace properties placed within {} with object values. Uses dot notation for child properties.
         * @param {String} endpoint parameterised endpint
         * @param {Object} data Object to check against
         * @return {String} property value || new Error
         */
        var formatEndpoint = function(endpoint, data) {
            var regex = /{(.*?)}/g,
                matches = endpoint.match(regex);


            if (!data) {
                // If no data is passed in, strip parametors from endpoint and return.
                endpoint = endpoint.replace(/{{.*?}}/g, '').replace(/\/\//g, '/');
                return endpoint;
            }

            if (matches && matches.length) {
                for (var i = 0, len = matches.length; i < len; i++) {
                    endpoint = endpoint.replace(new RegExp(matches[i], 'g'), getProperty(matches[i].replace(/{|}/g, ""), data));
                }
            }

            // if all replaceable strings ({prop}) have not been replaced, throw error and show array to help debugging.
            if (endpoint.indexOf('{') > -1) {
                throw new Error('You seem to be missing an expected property on this endpoint. Ensure you have the follow:', matches);
            }

            return endpoint;
        };


        /**
         * Extracts properties of a object that are not present in a parameterised string
         * @param {String} endpoint parameterised endpint
         * @param {Object} data Object to check against
         * @return {Object} object with unmatched properties
         */
        var extractParams = function(endpoint, data) {
            var params = {};

            for (var prop in data) {
                if (endpoint.indexOf(prop) === -1) {
                    params[prop] = data[prop];
                }
            }
            return params;
        };


        /**
         * Gets sessionStorage data from key
         * @param {String} key of item
         * @return {Object} Object of stored data
         */
        var getCachedData = function(key, local) {
            key = key.toLowerCase();
            var storage = local ? localStorage : sessionStorage;
            return JSON.parse(storage.getItem(key));
        };


        /**
         * Sets sessionStorage data from key
         * @param {String} key of item
         * @return void
         */
        var setCachedData = function(key, result, local) {
            key = key.toLowerCase();
            var storage = local ? localStorage : sessionStorage;
            storage.setItem(key, (result === Object(result)) ? JSON.stringify(result) : result);
        };


        this.getFormattedUrl = function(endpoint, data) {
            endpoint = getEndpoint(endpoint);
            var qstring = extractParams(endpoint, data);
            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, data);
            return API_URL + endpoint;
        };


        this.upload = function(endpoint, data, local) {
            var deferred = $q.defer();
            endpoint = getEndpoint(endpoint);

            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, data);

            var url = local ? endpoint : API_URL + endpoint;

            // Make call
            var serviceMethod = $http.post(url, data, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            });

            // Handle response
            serviceMethod.success(function(result, status, headers, config) {
                    if (status === 200) {
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function(result, status, headers, config) {
                    deferred.reject(result);
                });

            return deferred.promise;
        };

        /**
         * GET http request
         * @param {String} endpoint short form of rquired endpoint
         * @param {Object} data object with request data, settings and parameters
         * @return {boolean} forceRefreah flag to force a refresh of cached data
         */
        this.getRequest = function(endpoint, data, cacheResults, local) {
            var deferred = $q.defer(),
                cachedKey = endpoint + JSON.stringify(data);

            //If session storage is available, check for cached data and return.
            if (cacheResults && storageAvailable()) {
                var cache = getCachedData(cachedKey, local);
                if (cache) {
                    deferred.resolve(cache);
                    return deferred.promise;
                }
            }

            // Get full endpoint
            endpoint = getEndpoint(endpoint);
            var qstring = extractParams(endpoint, data);

            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, data);

            // Make call
            var serviceMethod = $http.get(API_URL + endpoint, {
                params: qstring
            });

            cfpLoadingBar.start();

            // Handle response
            serviceMethod.success(function(result, status, headers, config) {
                    cfpLoadingBar.complete();
                    if (status === 200) {

                        if (cacheResults && storageAvailable() && result) {
                            // If array, must be above one item.
                            setCachedData(cachedKey, result, local);
                        }
                        deferred.resolve(result);
                    }
                })
                .error(function(result, status, headers, config) {
                    cfpLoadingBar.complete();
                    deferred.reject(result);
                });

            return deferred.promise;
        };

        /**
         * POST http request
         * @param {String} endpoint short form of rquired endpoint
         * @param {Object} url params
         * @param {Object} data object with request data
         */
        this.postRequest = function(endpoint, urlParams, data, local) {
            var deferred = $q.defer();

            endpoint = getEndpoint(endpoint);

            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, urlParams);

            var url = local ? endpoint : API_URL + endpoint;

            // Make call
            var serviceMethod = $http.post(url, data);

            cfpLoadingBar.start();

            // Handle response
            serviceMethod.success(function(result, status, headers, config) {
                    cfpLoadingBar.complete();
                    if (status === 200) {
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function(result, status, headers, config) {
                    cfpLoadingBar.complete();
                    deferred.reject(result);
                });

            return deferred.promise;
        };


        /**
         * PUT http request
         * @param {String} endpoint short form of rquired endpoint
         * @param {Object} url params
         * @param {Object} data object with request data
         */
        this.putRequest = function(endpoint, urlParams, data) {
            var deferred = $q.defer();

            endpoint = getEndpoint(endpoint);

            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, urlParams);

            // Make call
            var serviceMethod = $http.put(API_URL + endpoint, data);

            cfpLoadingBar.start();

            // Handle response
            serviceMethod.success(function(result, status, headers, config) {
                    cfpLoadingBar.complete();
                    if (status === 200) {
                        deferred.resolve(result);
                    }
                })
                .error(function(result, status, headers, config) {
                    cfpLoadingBar.complete();
                    deferred.reject(result);
                });

            return deferred.promise;
        };


        /**
         * DELETE http request
         * @param {String} endpoint short form of rquired endpoint
         */
        this.deleteRequest = function(endpoint, urlParams, data) {
            var deferred = $q.defer();

            endpoint = getEndpoint(endpoint);

            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, urlParams);

            // Make call
            var serviceMethod = $http.delete(API_URL + endpoint);
            // Handle response

            cfpLoadingBar.start();

            serviceMethod.success(function(result, status, headers, config) {
                    cfpLoadingBar.complete();
                    if (status === 200) {
                        // If params include a before stamp, add paged property for ease
                        deferred.resolve(result);
                    }
                })
                .error(function(result, status, headers, config) {
                    cfpLoadingBar.complete();
                    deferred.reject(result);
                });

            return deferred.promise;
        };

        /**
         * MOCK GET http request
         * @param {String} endpoint short form of rquired endpoint
         * @param {Object} data object with request data, settings and parameters
         * @return {boolean} forceRefreah flag to force a refresh of cached data
         */
        this.mockGet = function(endpoint, data, cacheResults, local) {
            var deferred = $q.defer();
            var result;
            var mockKey = endpoint;

            // Get full endpoint
            endpoint = getEndpoint(endpoint);
            var qstring = extractParams(endpoint, data);

            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, data);

            result = window.mocks[mockKey];


            if (cacheResults) {
                deferred.resolve(result);
            } else {
                cfpLoadingBar.start();
                console.log('GET:: ' + endpoint);
                setTimeout(function() {
                    cfpLoadingBar.complete();
                    deferred.resolve(result);
                }, 1000);
            }

            return deferred.promise;
        };


        /**
         * MOCK POST http request
         * @param {String} endpoint short form of rquired endpoint
         * @param {Object} data object with request data, settings and parameters
         * @return {boolean} forceRefreah flag to force a refresh of cached data
         */
        this.mockPost = function(endpoint, urlParams, data, local) {
            var deferred = $q.defer();
            var result = window.mocks[endpoint];


            endpoint = getEndpoint(endpoint);
            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, urlParams);

            cfpLoadingBar.start();

            console.log('POST:: ' + endpoint);
            setTimeout(function() {
                cfpLoadingBar.complete();
                deferred.resolve(result);
            }, 1000);

            return deferred.promise;
        };


        /**
         * MOCK POST http request
         * @param {String} endpoint short form of rquired endpoint
         * @param {Object} data object with request data, settings and parameters
         * @return {boolean} forceRefreah flag to force a refresh of cached data
         */
        this.mockPut = function(endpoint, urlParams, data) {
            var deferred = $q.defer();
            var result = window.mocks[endpoint];

            endpoint = getEndpoint(endpoint);
            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, urlParams);

            cfpLoadingBar.start();

            console.log('PUT:: ' + endpoint);

            setTimeout(function() {
                cfpLoadingBar.complete();
                deferred.resolve(result);
            }, 1000);

            return deferred.promise;
        };

        /**
         * MOCK DELTE http request
         * @param {String} endpoint short form of rquired endpoint
         * @param {Object} data object with request data, settings and parameters
         * @return {boolean} forceRefreah flag to force a refresh of cached data
         */
        this.mockDelete = function(endpoint, urlParams, data) {
            var deferred = $q.defer();
            var result = window.mocks[endpoint];

            endpoint = getEndpoint(endpoint);
            // Replace endpoint vars with data.
            endpoint = formatEndpoint(endpoint, urlParams);

            cfpLoadingBar.start();

            console.log('DELETE:: ' + endpoint);

            setTimeout(function() {
                cfpLoadingBar.complete();
                deferred.resolve(result);
            }, 1000);

            return deferred.promise;
        };


        this.get = useMock ? this.mockGet : this.getRequest;
        this.put = useMock ? this.mockPut : this.putRequest;
        this.post = useMock ? this.mockPost : this.postRequest;
        this.delete = useMock ? this.mockDelete : this.deleteRequest;
    }


}());

/**
 * @name auth
 * @description All login and register related functionlity
 * @param {object} Angular module with dependencies
 **/

(function() {

    AuthService.$inject = ["$rootScope", "$window"];
    angular
        .module('common')
        .service('authService', AuthService);

    /* @ngInject */
    function AuthService($rootScope, $window) {
        var context = this;

        /**
         * Check if the current user is authenticated
         * @return {bool} if user is logged in true or false
         */
        context.isAuthenticated = function() {
            return localStorage.getItem('isAuthenticated') ? JSON.parse(localStorage.getItem('isAuthenticated')) : false;
        };


        /**
         * Authenticate the current user
         * @return {undefined}
         */
        context.authenticate = function(user) {
            localStorage.setItem('isAuthenticated', true);
            localStorage.setItem('user', JSON.stringify(user));
        };


        /**
         * De authenticate the current user
         * @return {undefined}
         */
        context.deAuthenticate = function() {
            sessionStorage.clear();
            localStorage.clear();
            localStorage.setItem('isAuthenticated', false);
            localStorage.setItem('token', {});
            localStorage.setItem('user', {});
        };


        /**
         * Get the current user object
         * @return {object} current user object
         */
        context.getCurrentUser = function() {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                //  $window.location.href = '/';
                return false;
            }
        };

    }

}());

/**
 * @name Activity Graph service
 * @description formats data for activity graph
 * @param {object} Angular module with dependencies
 **/

(function() {

    ChartActivityService.$inject = ["$rootScope", "$timeout"];
    angular
        .module('common')
        .service('activityService', ChartActivityService);

    /* @ngInject */
    function ChartActivityService($rootScope, $timeout) {


        /**
         * Bindable
         */
        this.formatActivityData = formatActivityData;

        /**
         * Format activity data by day
         * @param {array} array of activity data
         * @param {object} date object containing to and from date properties
         * @return {object} object of formated data and labels
         */
        function formatByDay(data, dates, average) {
            var formattedData = {
                labels: [],
                data: [
                    []
                ]
            };

            var currentDate;
            var high = -1;
            var low = 1;

            for (var i = 0; i < data.length; i++) {
                currentDate = moment(dates.from, 'YYYY-MM-DD').add(i, 'days').format('MMM DD');
                formattedData.labels.push(currentDate);
                formattedData.data[0].push(data[i]);

                if (data[i] > high) {
                    high = data[i];
                }

                if (data[i] < low) {
                    low = data[i];
                }
            }

            formattedData.high = high;
            formattedData.low = low;

            return formattedData;
        }

        /**
         * Format activity data by week
         * @param {array} array of activity data
         * @param {object} date object containing to and from date properties
         * @return {object} object of formated data and labels
         */
        function formatByWeek(data, dates) {
            var formattedData = {
                labels: [],
                data: [
                    []
                ]
            };

            var currentDate;
            var high = -1;
            var low = 1;
            var activeWeek = 0;

            for (var i = 0; i < data.length; i++) {

                if (i % 7 === 0) {
                    currentDate = 'w/c ' + moment(dates.from, 'YYYY-MM-DD').add(activeWeek * 7, 'days').format('MMM DD');
                    formattedData.labels.push(currentDate);
                    formattedData.data[0].push(data[i]);
                    activeWeek++;
                } else {
                    formattedData.data[0][activeWeek - 1] = formattedData.data[0][activeWeek - 1] + data[i];
                }

            }

            for (var j = formattedData.data[0].length - 1; j >= 0; j--) {

                if (formattedData.data[0][j] > high) {
                    high = formattedData.data[0][j];
                }

                if (formattedData.data[0][j] < low) {
                    low = formattedData.data[0][j];
                }
            }

            formattedData.high = high;
            formattedData.low = low;

            return formattedData;
        }

        /**
         * Format activity data by month
         * @param {array} array of activity data
         * @param {object} date object containing to and from date properties
         * @return {object} object of formated data and labels
         */
        function formatByMonth(data, dates) {
            var formattedData = {
                labels: [],
                data: [
                    []
                ]
            };
            var currentDate;
            var high = -1;
            var low = 1;
            var activeMonth = 0;
            var currentMonth;

            for (var i = 0; i < data.length; i++) {
                currentDate = moment(dates.from, 'YYYY-MM-DD').add(i, 'days').format('MMM YYYY');
                if (currentDate === currentMonth) {
                    formattedData.data[0][activeMonth - 1] = formattedData.data[0][activeMonth - 1] + data[i];

                } else {
                    formattedData.labels.push(currentDate);
                    formattedData.data[0].push(data[i]);
                    currentMonth = currentDate;
                    activeMonth++;
                }
            }

            for (var j = formattedData.data[0].length - 1; j >= 0; j--) {
                if (formattedData.data[0][j] > high) {
                    high = formattedData.data[0][j];
                }

                if (formattedData.data[0][j] < low) {
                    low = formattedData.data[0][j];
                }
            }

            formattedData.high = high;
            formattedData.low = low;
            return formattedData;
        }


        /**
         * Determine activity scale and format to relevent format
         * @param {array} array of activity data
         * @param {object} date object containing to and from date properties
         * @return {object} object of formated data and labels
         */
        function formatActivityData(data, dates) {
            var arr = [];

            if (data instanceof Array) {
                arr = data;
            } else {
                for (var prop in data) {
                    arr.push(data[prop]);
                }
            }

            var arrayLength = arr.length,
                finalData = [];

            if (arrayLength < 28) {
                finalData = formatByDay(arr, dates);
            } else if (arrayLength < 160) {
                finalData = formatByWeek(arr, dates);
            } else {
                finalData = formatByMonth(arr, dates);
            }

            return finalData;
        }

    }



}());

/**
 * @name services.event
 **/

(function() {

    EventService.$inject = ["$rootScope", "$timeout"];
    angular
        .module('common')
        .service('eventService', EventService);

    /* @ngInject */
    function EventService($rootScope, $timeout) {

        this.send = function(msg, data) {
            $timeout(function() {
                data = data || {};
                $rootScope.$emit(msg, data);
            });
        };

        this.on = function(msg, func, scope) {
            var unbind = $rootScope.$on(msg, func);
            if (scope) {
                scope.$on('$destroy', unbind);
            }
        };
    }


}());

/**
 * @name services.event
 **/

(function() {

    NotificationController.$inject = ["ngNotify"];
    angular
        .module('common')
        .service('notificationService', NotificationController);

    /* @ngInject */
    function NotificationController(ngNotify) {

        /**
         * show a notification message
         * @param {string} message to display
         * @param {string} type of message [success|danger|info]
         * @return {undefined}
         */
        this.set = function(msg, type) {
         	ngNotify.set(msg, type);
        };

        /**
         * show the default error message
         * @return {undefined}
         */
        this.defaultError = function() {
           ngNotify.set('Opps, something went wrong', 'error');
        };
    }


}());

/**
 * @name httpInterceptor
 * @description httpInterceptor related functionality
 **/

(function() {

    commonFactory.$inject = ["$q", "$location", "authService", "$window"];
    privateFactory.$inject = ["$location", "$rootScope", "authService", "$window", "httpInterceptorCommon"];
    publicFactory.$inject = ["$location", "authService", "$window", "httpInterceptorCommon"];
    angular
        .module('common')
        .factory('httpInterceptorCommon', commonFactory)
        .factory('httpInterceptorPrivate', privateFactory)
        .factory('httpInterceptorPublic', publicFactory);

    /* @ngInject */
    function commonFactory($q, $location, authService, $window) {

        return {
            requestError: function(request) {
                return $q.reject(request);
            },
            response: function(response) {
                return response || $q.when(response);
            },
            responseError: function(response) {

                if (response && response.status === 401) {
                    // authService.deAuthenticate();
                    // if ($location.path() != "/") {
                    //     $window.location.href = "/";
                    // }
                }
                return $q.reject(response);
            }
        };

    }

    /* @ngInject */
    function privateFactory($location, $rootScope, authService, $window, httpInterceptorCommon) {

        httpInterceptorCommon.request = function(config) {
            var authenticated = authService.isAuthenticated();

            if (!authenticated) {
                $window.location.href = '/login';
            }

            return config || $q.when(config);
        };

        return httpInterceptorCommon;

    }

    /* @ngInject */
    function publicFactory($location, authService, $window, httpInterceptorCommon) {

        httpInterceptorCommon.request = function(config) {
            var authenticated = authService.isAuthenticated();

            if (authenticated) {
                $window.location.href = '/portal#/';
            }

            return config || $q.when(config);
        };

        return httpInterceptorCommon;

    }


}());

/*  eslint-env angular*/

(function init() {
    angular
        .module('private')
        .controller('private.dashboard.chat.controller', LandingController)
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: '/partials/private/dashboard/chat.html',
                        controller: 'private.dashboard.chat.controller'
                    })
                    .when('/console', {
                        templateUrl: '/partials/private/dashboard/chat.html',
                        controller: 'private.dashboard.chat.controller'
                    });
            }
        ]);

    /* @ngInject */
    function LandingController() {}
}());

/**
 * @name public.login
 * @param {object} Angular module with dependencies
 **/

(function() {

    LoginController.$inject = ["$scope", "apiService", "$window", "authService", "$timeout", "notificationService"];
    angular
        .module('public')
        .controller('public.login.controller', LoginController)
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: '/partials/public/auth/login.html',
                        controller: 'public.login.controller'
                    })
                    .when('/login', {
                        templateUrl: '/partials/public/auth/login.html',
                        controller: 'public.login.controller'
                    });
            }
        ]);

    /* @ngInject */
    function LoginController($scope, apiService, $window, authService, $timeout, notificationService) {

        $scope.user = {};
        $scope.login = login;

        /**
         * Submits the login form data and authServiceenicates users
         */
        function login(valid, user) {

            $scope.errors = null;

            if (valid) {
                apiService.post('login', null, user).then(function(data) {
                    if (data) {
                        authService.authenticate(data);
                        $window.location = '/portal#/';
                    } else {
                        notificationService.set('Incorrect username or password', 'error');
                    }

                }, function(err) {
                    notificationService.set('Incorrect username or password', 'error');
                });
            }

        }
    }

}());

/**
 * @name public.register
 * @param {object} Angular module with dependencies
 **/

(function() {

    RegisterController.$inject = ["$scope", "apiService", "$window", "authService", "$timeout", "notificationService"];
    angular
        .module('public')
        .controller('public.register.controller', RegisterController)
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/register', {
                        templateUrl: '/partials/public/auth/register.html',
                        controller: 'public.register.controller'
                    });
            }
        ]);

    /* @ngInject */
    function RegisterController($scope, apiService, $window, authService, $timeout, notificationService) {

        $scope.user = {};
        $scope.register = register;

        /**
         * Submits the register form data
         */
        function register(valid, user) {

            $scope.errors = null;

            if (valid) {
                apiService.post('register', null, user).then(function(data) {
                    if (data) {
                        authService.authenticate(data);
                        $window.location = '/portal#/';
                    } else {
                        notificationService.set('Incorrect username or password', 'error');
                    }

                }, function(err) {
                    notificationService.set('Incorrect username or password', 'error');
                });
            }

        }
    }

}());
