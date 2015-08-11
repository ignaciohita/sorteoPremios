/*global angular*/
var angularApp = angular.module('SorteoPremios', []);

angularApp.controller('PremioController', function ($scope) {
    'use strict';

    $scope.listaPremios = ['coche deportivo',
                      'viaje a Japón',
                      'crucero por el Caribe',
                      'apartamento en la playa'];

    $scope.elegirPremios = function () {
        var primerPremio = Math.floor(Math.random() * $scope.listaPremios.length),
            ultimoPremio = Math.floor(Math.random() * $scope.listaPremios.length);

        $scope.premios = $scope.listaPremios.slice(Math.min(primerPremio, ultimoPremio), Math.max(primerPremio, ultimoPremio));

        $scope.fechaSorteo = new Date();
    };
}).filter('filtroFechaSorteo', function () {
    'use strict';

    return function (fechaSorteo) {
        return fechaSorteo.getDate() + ' del ' + (fechaSorteo.getUTCMonth() + 1) + ' de ' + fechaSorteo.getFullYear();
    };
});
