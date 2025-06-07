// Generated from Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
const serializedATN = [4,1,13,57,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,4,1,20,8,1,11,1,12,1,21,1,2,1,2,1,2,
3,2,27,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,4,4,42,8,
4,11,4,12,4,43,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,
4,6,8,10,12,14,0,0,53,0,16,1,0,0,0,2,19,1,0,0,0,4,26,1,0,0,0,6,28,1,0,0,
0,8,41,1,0,0,0,10,45,1,0,0,0,12,51,1,0,0,0,14,54,1,0,0,0,16,17,3,2,1,0,17,
1,1,0,0,0,18,20,3,4,2,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,
1,0,0,0,22,3,1,0,0,0,23,27,3,6,3,0,24,27,3,10,5,0,25,27,3,12,6,0,26,23,1,
0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,5,1,0,0,0,28,29,5,1,0,0,29,30,5,8,0,
0,30,31,3,8,4,0,31,32,5,9,0,0,32,33,5,4,0,0,33,34,5,5,0,0,34,35,5,6,0,0,
35,36,3,14,7,0,36,37,5,7,0,0,37,38,5,10,0,0,38,7,1,0,0,0,39,42,3,10,5,0,
40,42,3,12,6,0,41,39,1,0,0,0,41,40,1,0,0,0,42,43,1,0,0,0,43,41,1,0,0,0,43,
44,1,0,0,0,44,9,1,0,0,0,45,46,5,2,0,0,46,47,5,6,0,0,47,48,5,11,0,0,48,49,
5,7,0,0,49,50,5,10,0,0,50,11,1,0,0,0,51,52,5,3,0,0,52,53,5,10,0,0,53,13,
1,0,0,0,54,55,5,12,0,0,55,15,1,0,0,0,4,21,26,41,43];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'do'", "'puts'", "'break'", "'J'", "'while'", 
                            "'('", "')'", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "DO", "PUTS", "BREAK", "J", "WHILE", 
                             "PARENTESIS_ABRE", "PARENTESIS_CIERRA", "LLAVE_ABRE", 
                             "LLAVE_CIERRA", "PUNTO_Y_COMA", "CADENA", "CONDICION", 
                             "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.instrucciones();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruccion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_instruccion);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.bucle();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.salida();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(LenguajeParser.DO);
	        this.state = 29;
	        this.match(LenguajeParser.LLAVE_ABRE);
	        this.state = 30;
	        this.sentencia();
	        this.state = 31;
	        this.match(LenguajeParser.LLAVE_CIERRA);
	        this.state = 32;
	        this.match(LenguajeParser.J);
	        this.state = 33;
	        this.match(LenguajeParser.WHILE);
	        this.state = 34;
	        this.match(LenguajeParser.PARENTESIS_ABRE);
	        this.state = 35;
	        this.condicion();
	        this.state = 36;
	        this.match(LenguajeParser.PARENTESIS_CIERRA);
	        this.state = 37;
	        this.match(LenguajeParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 41;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	                this.state = 39;
	                this.salida();
	                break;
	            case 3:
	                this.state = 40;
	                this.terminar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 43; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2 || _la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(LenguajeParser.PUTS);
	        this.state = 46;
	        this.match(LenguajeParser.PARENTESIS_ABRE);
	        this.state = 47;
	        this.match(LenguajeParser.CADENA);
	        this.state = 48;
	        this.match(LenguajeParser.PARENTESIS_CIERRA);
	        this.state = 49;
	        this.match(LenguajeParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(LenguajeParser.BREAK);
	        this.state = 52;
	        this.match(LenguajeParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(LenguajeParser.CONDICION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.DO = 1;
LenguajeParser.PUTS = 2;
LenguajeParser.BREAK = 3;
LenguajeParser.J = 4;
LenguajeParser.WHILE = 5;
LenguajeParser.PARENTESIS_ABRE = 6;
LenguajeParser.PARENTESIS_CIERRA = 7;
LenguajeParser.LLAVE_ABRE = 8;
LenguajeParser.LLAVE_CIERRA = 9;
LenguajeParser.PUNTO_Y_COMA = 10;
LenguajeParser.CADENA = 11;
LenguajeParser.CONDICION = 12;
LenguajeParser.WS = 13;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_instrucciones = 1;
LenguajeParser.RULE_instruccion = 2;
LenguajeParser.RULE_bucle = 3;
LenguajeParser.RULE_sentencia = 4;
LenguajeParser.RULE_salida = 5;
LenguajeParser.RULE_terminar = 6;
LenguajeParser.RULE_condicion = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(LenguajeParser.DO, 0);
	};

	LLAVE_ABRE() {
	    return this.getToken(LenguajeParser.LLAVE_ABRE, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(LenguajeParser.LLAVE_CIERRA, 0);
	};

	J() {
	    return this.getToken(LenguajeParser.J, 0);
	};

	WHILE() {
	    return this.getToken(LenguajeParser.WHILE, 0);
	};

	PARENTESIS_ABRE() {
	    return this.getToken(LenguajeParser.PARENTESIS_ABRE, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PARENTESIS_CIERRA() {
	    return this.getToken(LenguajeParser.PARENTESIS_CIERRA, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitBucle(this);
		}
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminarContext);
	    } else {
	        return this.getTypedRuleContext(TerminarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitSentencia(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_salida;
    }

	PUTS() {
	    return this.getToken(LenguajeParser.PUTS, 0);
	};

	PARENTESIS_ABRE() {
	    return this.getToken(LenguajeParser.PARENTESIS_ABRE, 0);
	};

	CADENA() {
	    return this.getToken(LenguajeParser.CADENA, 0);
	};

	PARENTESIS_CIERRA() {
	    return this.getToken(LenguajeParser.PARENTESIS_CIERRA, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitSalida(this);
		}
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(LenguajeParser.BREAK, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTerminar(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_condicion;
    }

	CONDICION() {
	    return this.getToken(LenguajeParser.CONDICION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitCondicion(this);
		}
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.InstruccionesContext = InstruccionesContext; 
LenguajeParser.InstruccionContext = InstruccionContext; 
LenguajeParser.BucleContext = BucleContext; 
LenguajeParser.SentenciaContext = SentenciaContext; 
LenguajeParser.SalidaContext = SalidaContext; 
LenguajeParser.TerminarContext = TerminarContext; 
LenguajeParser.CondicionContext = CondicionContext; 
