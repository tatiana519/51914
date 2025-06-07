import LenguajeLexer from "./generated/LenguajeLexer.js";
import LenguajeParser from "./generated/LenguajeParser.js";
import { CustomLenguajeVisitor } from "./CustomLenguajeVisitor.js";

import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("❌ No se encontró input.txt. Ingrese el código manualmente.");
        return;
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new LenguajeLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new LenguajeParser(tokenStream);

    parser.buildParseTrees = true;
    const tree = parser.programa();

    if (parser._syntaxErrors > 0) {
        console.error("\n❌ Se encontraron errores de sintaxis en el código.");
    } else {
        console.log("\n✅ Entrada válida.");

  
        console.log("\n🌳 Árbol de derivación:");
        console.log(tree.toStringTree(parser.ruleNames));

        // 📋 Mostrar la tabla de tokens
        console.log("\n📋 Tabla de lexemas-tokens:");
        const symbolicNames = LenguajeLexer.symbolicNames;
        tokenStream.fill();
        tokenStream.tokens.forEach(token => {
            const tipo = symbolicNames[token.type] || 'DESCONOCIDO';
            if (tipo !== 'EOF') {
                console.log(`Token: ${tipo.padEnd(15)} | Lexema: '${token.text}' | Línea: ${token.line}`);
            }
        });

        const visitor = new CustomLenguajeVisitor();
        const traduccion = visitor.visit(tree);

        console.log("\n💻 Código traducido a JavaScript:");
        console.log(traduccion);

        fs.writeFileSync('output.js', JSON.stringify(traduccion, null, 2), 'utf8');
        console.log("\n📝 Traducción guardada en output.js");

        console.log("\n🚀 Ejecutando código...");
        eval(traduccion);
    }
}

main();
