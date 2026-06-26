# Tutorial de Vim para VSCode

Guía progresiva para dominar Vim motions en VSCode. Aprende en orden, practica cada nivel antes de avanzar.

## Filosofía de Vim

Vim usa una "gramática" de edición: `operador` + `motion` (o `text object`). Esto te permite componer comandos de forma natural:

- `d` (delete) + `w` (word) = `dw` (borrar palabra)
- `c` (change) + `i"` (inside quotes) = `ci"` (cambiar contenido entre comillas)
- `y` (yank/copy) + `ap` (a paragraph) = `yap` (copiar párrafo)

Una vez que internalizas esta gramática, editar código se vuelve extremadamente rápido.

---

## Nivel 0: Modos de Vim

Vim tiene varios modos. Los principales:

- **Normal mode**: Para navegar y ejecutar comandos (presiona `Esc` para volver aquí)
- **Insert mode**: Para escribir texto (como un editor normal)
- **Visual mode**: Para seleccionar texto
- **Command mode**: Para ejecutar comandos (`:w`, `:q`, etc.)

Siempre vuelve a Normal mode con `Esc` cuando termines de editar.

---

## Nivel 1: Movimiento Básico

### Navegación por carácter y línea

```
h  → izquierda
j  → abajo
k  → arriba
l  → derecha
```

### Navegación por palabra

```
w  → siguiente palabra (inicio)
b  → palabra anterior (inicio)
e  → final de palabra
ge → final de palabra anterior
```

Versiones con mayúscula (ignoran puntuación):
```
W  → siguiente WORD (separada por espacios)
B  → WORD anterior
E  → final de WORD
```

### Navegación en la línea

```
0   → inicio de la línea
^   → primer carácter no-blanco
$   → final de la línea
g_  → último carácter no-blanco
```

### Navegación en el archivo

```
gg   → inicio del archivo
G    → final del archivo
42G  → ir a línea 42
:42  → ir a línea 42 (alternativa)
%    → saltar al bracket/paréntesis/llave que hace match
```

### Navegación por bloques

```
{    → párrafo/bloque anterior
}    → párrafo/bloque siguiente
(    → oración anterior
)    → oración siguiente
```

### Scroll

```
Ctrl+d  → media página abajo
Ctrl+u  → media página arriba
Ctrl+f  → página completa abajo
Ctrl+b  → página completa arriba
zz      → centrar cursor en pantalla
zt      → cursor al top de pantalla
zb      → cursor al bottom de pantalla
```

### Posición en pantalla

```
H  → top de la pantalla visible
M  → medio de la pantalla visible
L  → bottom de la pantalla visible
```

---

## Nivel 2: Búsqueda y Navegación Precisa

### Búsqueda en el archivo

```
/texto   → buscar hacia adelante
?texto   → buscar hacia atrás
n        → siguiente match
N        → match anterior
*        → buscar palabra bajo cursor (hacia adelante)
#        → buscar palabra bajo cursor (hacia atrás)
:noh     → limpiar highlight de búsqueda
```

### Búsqueda en la línea

```
f{char}  → saltar al siguiente carácter en la línea (ej: f( salta al próximo paréntesis)
F{char}  → igual pero hacia atrás
t{char}  → saltar justo antes del carácter
T{char}  → igual pero hacia atrás
;        → repetir último f/F/t/T
,        → repetir último f/F/t/T en dirección contraria
```

Ejemplos prácticos:
```
f(       → saltar al próximo (
dt,      → borrar hasta la próxima coma (sin incluirla)
df)      → borrar hasta el próximo ) (incluyéndolo)
```

---

## Nivel 3: Insertar Texto

### Entrar en Insert Mode

```
i  → insertar antes del cursor
a  → insertar después del cursor (append)
I  → insertar al inicio de la línea
A  → insertar al final de la línea
o  → nueva línea abajo + insert mode
O  → nueva línea arriba + insert mode
```

### Salir de Insert Mode

```
Esc      → volver a Normal mode
Ctrl+[   → alternativa a Esc
```

---

## Nivel 4: Operadores + Motions (El Superpoder)

### Operadores principales

```
d  → delete (cortar)
c  → change (borrar y entrar en insert mode)
y  → yank (copiar)
>  → indentar
<  → des-indentar
=  → auto-indentar
```

### Combinaciones comunes

```
dw    → borrar palabra desde cursor
dd    → borrar línea completa
D     → borrar desde cursor hasta fin de línea
cc    → cambiar línea completa
C     → cambiar desde cursor hasta fin de línea
yy    → copiar línea completa
Y     → copiar línea completa (igual que yy)
>>    → indentar línea
<<    → des-indentar línea
==    → auto-indentar línea
```

### Text Objects (inner vs around)

Los text objects son el verdadero poder de Vim. Funcionan con `i` (inner) o `a` (around):

```
iw  → inner word (palabra sin espacios)
aw  → a word (palabra + espacios)
is  → inner sentence
as  → a sentence
ip  → inner paragraph
ap  → a paragraph
i"  → contenido dentro de "..."
a"  → "..." incluidas las comillas
i'  → contenido dentro de '...'
a'  → '...' incluidas las comillas
i`  → contenido dentro de `...`
a`  → `...` incluidos los backticks
i(  → contenido dentro de (...)
a(  → (...) incluidos los paréntesis
i[  → contenido dentro de [...]
a[  → [...] incluidos los brackets
i{  → contenido dentro de {...}
a{  → {...} incluidas las llaves
i<  → contenido dentro de <...>
a<  → <...> incluidos los angle brackets
it  → contenido dentro de tag HTML/JSX
at  → tag completo incluido
```

### Ejemplos prácticos con text objects

```
ciw   → cambiar palabra completa (el más usado para renombrar)
diw   → borrar palabra completa
yiw   → copiar palabra completa
ci"   → cambiar todo dentro de "..."
di(   → borrar contenido dentro de (...)
da(   → borrar (...) incluidos los paréntesis
yi{   → copiar contenido dentro de {...}
cit   → cambiar contenido de tag HTML/JSX
dat   → borrar tag HTML/JSX completo
```

Caso de uso real:
```javascript
const name = "John Doe";
// Cursor en cualquier parte de "John Doe"
// Presiona ci" y escribe el nuevo valor
// Resultado: const name = "nuevo valor";
```

---

## Nivel 5: Edición Rápida

### Operaciones simples

```
x   → borrar carácter bajo cursor
X   → borrar carácter antes del cursor
r   → reemplazar carácter bajo cursor (ej: ra reemplaza con 'a')
s   → sustituir carácter (borra y entra en insert mode)
~   → toggle mayúscula/minúscula
J   → unir línea de abajo con la actual
gJ  → unir sin agregar espacio
```

### Copiar y pegar

```
yy  → copiar línea
p   → pegar después del cursor/línea
P   → pegar antes del cursor/línea
```

### Undo/Redo

```
u       → undo
Ctrl+r  → redo
```

### Repetir

```
.  → repetir última acción (extremadamente poderoso)
```

Ejemplo del poder de `.`:
```
1. Busca con /palabra
2. Cambia con ciw + nueva palabra + Esc
3. Presiona n para siguiente match
4. Presiona . para repetir el cambio
5. Repite n + . para cada ocurrencia
```

---

## Nivel 6: Visual Mode (Selección)

### Entrar en Visual Mode

```
v       → visual mode (selección por carácter)
V       → visual line mode (selección por líneas)
Ctrl+v  → visual block mode (selección rectangular)
gv      → re-seleccionar última selección
```

### Operaciones en Visual Mode

Una vez seleccionado:
```
d    → borrar selección
c    → cambiar selección
y    → copiar selección
>    → indentar selección
<    → des-indentar selección
=    → auto-indentar selección
~    → toggle case
u    → lowercase
U    → uppercase
```

### Visual Block Mode (Ctrl+v)

Útil para editar columnas:

1. `Ctrl+v` para entrar en visual block
2. Selecciona con `j/k` (vertical) y `h/l` (horizontal)
3. `I` para insertar al inicio de cada línea
4. Escribe el texto
5. `Esc` para aplicar a todas las líneas

---

## Nivel 7: Comentar Código

Con VSCodeVim (plugin commentary integrado):

```
gcc      → comentar/descomentar línea actual
gc{motion} → comentar rango (ej: gcap comenta párrafo, gc3j comenta 3 líneas)
```

En Visual Mode:
```
V → seleccionar líneas → gc → comenta el bloque
```

---

## Nivel 8: Multiplicadores

Casi todo acepta un número antes:

```
5j     → bajar 5 líneas
3dd    → borrar 3 líneas
2yy    → copiar 2 líneas
4>>    → indentar 4 líneas
3w     → avanzar 3 palabras
d3w    → borrar 3 palabras
5x     → borrar 5 caracteres
2ci"   → cambiar contenido de las próximas 2 comillas
```

---

## Nivel 9: Comandos de VSCode

### Navegación entre archivos (buffers/tabs)

```
gt          → siguiente tab
gT          → tab anterior
1gt         → ir a primera tab
2gt         → ir a segunda tab
Ctrl+^      → alternar entre archivo actual y anterior
Ctrl+Tab    → ciclar entre archivos recientes
```

Atajos de VSCode que funcionan bien con Vim:
```
Cmd+p       → fuzzy finder de archivos (el más usado)
Cmd+Shift+p → command palette
Cmd+1/2/3   → cambiar entre grupos de editores
```

### Guardar y cerrar

```
:w          → guardar (dispara formatOnSave automáticamente)
:q          → cerrar archivo
:wq         → guardar y cerrar
:q!         → cerrar sin guardar
ZZ          → guardar y cerrar (atajo)
ZQ          → cerrar sin guardar (atajo)
```

---

## Nivel 10: Macros (Automatización)

Las macros graban una secuencia de comandos y la repiten.

### Grabar y ejecutar

```
q{letra}  → empezar a grabar en registro {letra} (ej: qa)
          → ejecutar las acciones que quieras
q         → parar de grabar
@{letra}  → ejecutar macro (ej: @a)
@@        → repetir última macro
5@a       → ejecutar macro 5 veces
```

### Ejemplo práctico

Quieres agregar `;` al final de cada línea:

1. `qa` (empezar a grabar en registro 'a')
2. `A;` (ir al final de línea y agregar `;`)
3. `Esc` (volver a normal mode)
4. `j` (bajar a siguiente línea)
5. `q` (parar de grabar)
6. `10@a` (repetir 10 veces)

---

## Nivel 11: Búsqueda y Reemplazo

### Comando substitute

```
:s/old/new/       → reemplazar primera ocurrencia en línea actual
:s/old/new/g      → reemplazar todas en línea actual
:%s/old/new/g     → reemplazar en todo el archivo
:%s/old/new/gc    → reemplazar en todo el archivo con confirmación
:'<,'>s/old/new/g → reemplazar en selección visual
```

### Regex en búsqueda

```
/\<palabra\>  → buscar palabra exacta (word boundaries)
/\d\+         → buscar uno o más dígitos
/^import      → buscar líneas que empiezan con "import"
/};$          → buscar líneas que terminan con "};"
```

---

## Nivel 12: Marks (Marcadores)

Los marks te permiten marcar posiciones y saltar a ellas.

```
m{letra}  → crear mark en posición actual (ej: ma)
'{letra}  → saltar a línea del mark (ej: 'a)
`{letra}  → saltar a posición exacta del mark (ej: `a)
''        → saltar a posición anterior
`.        → saltar a última edición
```

---

## Workflows Comunes

### Renombrar variable en archivo

1. Posiciona cursor en la variable
2. `*` para buscar todas las ocurrencias
3. `ciw` para cambiar la primera
4. Escribe el nuevo nombre
5. `Esc` para volver a normal mode
6. `n` para siguiente ocurrencia
7. `.` para repetir el cambio
8. Repite `n` + `.` para cada ocurrencia

### Refactorizar función

1. `V` para visual line mode
2. Selecciona la función completa con `j/k`
3. `d` para cortar
4. Navega a donde quieres pegarla
5. `p` para pegar

### Indentar bloque de código

1. `V` para visual line mode
2. Selecciona líneas con `j/k`
3. `>` para indentar (o `<` para des-indentar)
4. `.` para repetir si necesitas más indentación

### Duplicar línea

```
yy  → copiar línea
p   → pegar abajo
```

O más rápido:
```
Yp  → copiar y pegar en un solo movimiento
```

### Mover líneas arriba/abajo

```
ddkP  → cortar línea y pegar arriba
ddp   → cortar línea y pegar abajo
```

---

## Tips Avanzados

### Combinar comandos

```
ggVG  → seleccionar todo el archivo (gg + V + G)
ggdG  → borrar todo el archivo
gg=G  → auto-indentar todo el archivo
```

### Incrementar/decrementar números

```
Ctrl+a  → incrementar número bajo cursor
Ctrl+x  → decrementar número bajo cursor
```

En visual block mode, puedes crear secuencias:
1. `Ctrl+v` para visual block
2. Selecciona columna
3. `g Ctrl+a` para crear secuencia incremental

### Cambiar case

```
~    → toggle case del carácter
gU   → uppercase (ej: gUiw uppercase palabra)
gu   → lowercase (ej: guiw lowercase palabra)
g~~  → toggle case de línea completa
```

---

## Configuración Recomendada para VSCode

Tu `.vscode/settings.json` ya tiene lo esencial. Opcionalmente puedes agregar:

```json
{
  "vim.useSystemClipboard": true,
  "vim.hlsearch": true,
  "vim.incsearch": true,
  "vim.leader": "<space>",
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<leader>", "h"],
      "commands": [":nohl"]
    }
  ]
}
```

Esto te permite:
- Copiar/pegar con el clipboard del sistema
- Highlight de búsqueda incremental
- `<space>h` para limpiar highlight de búsqueda

---

## Plan de Aprendizaje Sugerido

### Semana 1: Fundamentos
- Movimiento básico: `hjkl`, `w/b/e`, `0/$`, `gg/G`
- Insert mode: `i/a/o/O`
- Edición básica: `dd`, `yy`, `p`, `u`, `Ctrl+r`

### Semana 2: Text Objects
- `ciw`, `ci"`, `ci(`, `ci{`
- `diw`, `di"`, `di(`, `di{`
- Búsqueda: `/`, `*`, `n`, `N`

### Semana 3: Visual Mode y Repetición
- `V` + operadores (`d`, `y`, `>`, `<`)
- El poder de `.` (repetir)
- Workflow: buscar + cambiar + repetir (`*` + `ciw` + `n` + `.`)

### Semana 4: Búsqueda en línea y Multiplicadores
- `f/F/t/T` + `;/,`
- Multiplicadores: `3dd`, `5j`, `2ci"`
- Comentar: `gcc`, `gc{motion}`

### Semana 5+: Avanzado
- Macros: `q{letra}` + acciones + `q` + `@{letra}`
- Marks: `m{letra}` + `'{letra}`
- Visual block: `Ctrl+v`

---

## Recursos Adicionales

- `:help {comando}` en Vim para documentación (ej: `:help ciw`)
- `vimtutor` en terminal para tutorial interactivo
- [Vim Adventures](https://vim-adventures.com/) - juego para practicar
- [Vim Cheat Sheet](https://vim.rtorr.com/) - referencia rápida

---

## Recordatorios Finales

1. **Siempre vuelve a Normal mode con `Esc`** cuando termines de editar
2. **Piensa en la gramática**: operador + motion/text object
3. **Usa `.` para repetir** - es uno de los comandos más poderosos
4. **No memorices todo de golpe** - aprende progresivamente
5. **Practica en código real** - es la mejor forma de internalizar

¡Buena suerte! Con práctica constante, en 2-3 semanas estarás editando código más rápido que nunca.
