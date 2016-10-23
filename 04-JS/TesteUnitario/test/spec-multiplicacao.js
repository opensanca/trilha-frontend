describe('Função que multiplica dois números', function () {

    var mult = multiplicaDoisNumeros;

    it('verifica se estamos multiplicando corretamente', function () {

        expect( mult ).toBeDefined();
        expect( mult( 3, 7 ) ).toBe( 21 );

    });

});