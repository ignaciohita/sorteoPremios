/*global require, describe, beforeEach, module, inject, it, expect*/
require.config({
    baseUrl: '/base',
    callback: window.__karma__.start
});

describe('PremioController', function () {
    'use strict';

    beforeEach(module('SorteoPremios'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('lista de premios', function () {
        it('la lista de premios debe tener algún premio', function () {
            var $scope = {},
                controller = $controller('PremioController', {
                    $scope: $scope
                }),
                i;

            for (i = 0; i < 50; i += 1) {
                $scope.elegirPremios();
                expect($scope.premios.length).toBeGreaterThan(0);
            }
        });
    });
});
