# 51914

# Cómo ejecutar el analizador

# pasos 
1. Clonar el repositorio
   
git clone https://github.com/tatiana519/51914.git
cd 51914

2. ejecutar en la terminal 
   
npm install

3. 

java -jar C:\antlr\antlr-4.13.2-complete.jar -Dlanguage=JavaScript Lenguaje.g4 -o generated

4. 

npm start

#Contenido del proyecto
generated/          # Archivos generados por ANTLR4
Lenguaje.g4         # Gramática del lenguaje
index.js            # Código principal
input.txt           # Código fuente de ejemplo
package.json        # Configuración de npm

#📌 Salida esperada

(aca sale el error en caso de que no este bien hecho el imput)
✅ Entrada válida.

🌳 Árbol de derivación:
(programa (instrucciones (ifStatement if ( (expression x > 0) ) (block { console.log("Número positivo"); }) else (block { console.log("Número negativo"); }))))

📋 Tokens reconocidos:
Token: IF              | 'if' | Línea: 1
Token: PARENTESIS_ABRE | '('  | Línea: 1
Token: LETTER          | 'x'  | Línea: 1
Token: OPERADOR        | '>'  | Línea: 1
Token: DIGIT           | '0'  | Línea: 1
Token: PARENTESIS_CIERRA | ')' | Línea: 1
...

# Precauciones 

1. **Uso de cadenas
**:
   - Las cadenas deben estar entre comillas dobles `"Ejemplo de cadena"`.
   - No olvides cerrar correctamente las comillas.

2. **Condiciones en bucles**:
   - La condición en `while` debe ser `0` o `1`.
   - No dejes paréntesis vacíos.

3. **Estructura del bucle `do-while`**:
   - Asegúrate de que el bucle tiene las llaves `{}`.
   - La declaración `J` antes de `while` es obligatoria.

# se inicia con  `npm start`.
