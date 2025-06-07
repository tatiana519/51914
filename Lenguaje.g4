grammar Lenguaje;

programa: instrucciones ;
instrucciones: instruccion+ ;
instruccion: bucle | salida | terminar ;
bucle: DO LLAVE_ABRE sentencia LLAVE_CIERRA J WHILE PARENTESIS_ABRE condicion PARENTESIS_CIERRA PUNTO_Y_COMA ;
sentencia: (salida | terminar)+ ;
salida: PUTS PARENTESIS_ABRE CADENA PARENTESIS_CIERRA PUNTO_Y_COMA ;
terminar: BREAK PUNTO_Y_COMA ;
condicion: CONDICION ;

DO: 'do';
PUTS: 'puts';
BREAK: 'break';
J: 'J';
WHILE: 'while';
PARENTESIS_ABRE: '(';
PARENTESIS_CIERRA: ')';
LLAVE_ABRE: '{';
LLAVE_CIERRA: '}';
PUNTO_Y_COMA: ';';

CADENA: '"' (~["\r\n])* '"' ;
CONDICION: '0' | '1';

WS: [ \t\r\n]+ -> skip ;
