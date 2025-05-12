![Open Logo](https://openits.co/wp-content/uploads/2020/07/log-peque.png)

# CO.OPEN.GIT.TEST

## Repositorio para pruebas con GIT y GitHub

Este repositorio se creo con el objetivo de reforzar los conocimientos en Git para el manejo de versionamiento de archivos en el proyecto openETL o algunos proyectos de OPENTECNOLOGIA S.A que se desarrollen durante este año, la idea es mejorar el control de versiones para así tener una mejor organización como Desarrollador. Se va a iniciar tomando unos retos con una complejidad menor y se subirá la dificultad a medida que se entiendan los conceptos de Git y de cada uno de los comandos que se ejecuten. El tiempo en el que estaremos trabajando retos de Git son de al menos 2 semanas.

# #1 Reto

1. Iniciar el repositorio
`git init`

2. Crear la rama main en el proyecto
`git checkout -b main`

3. Crear el archivo README.md y realizar el commit.
    ```
    git add .

    git commit -m "Inicio del proyecto con el primer reto"
    ```

4. Subir los cambios al repositorio en GitHub
    ```
    git remote add origin git@github.com:juanhvcol8/retos-git-open.git
    git push -u origin main
    ```

# #2 Reto

1. Crear los archivos en el proyecto
    ```
    ./index.html
    ./test.log
    ./vendor/autoload.php
    ./node_modules/index.ts
    ```

2. Crear el archivo .gitignore y omitir el control de versiones para los archivos:
    ```
        - Archivos que están en la carpeta node_modules
        - Archivos que están en la carpeta vendor
        - Archivos con la extensión .log en el proyecto
    ```
3. Realizar el commit únicamente con los archivos creados y no ignorados en el proyecto.
    ```
    git add .
    git commit -m "Se agregó la solución del reto #2 al archivo README.md"
    
    ```
    
    
# #3 Reto

1. Eliminar las carpetas node_modules, vendor y los archivos index.html y test.log
```
rm -rf node_modules vendor index.html test.log
```

3. Inicializar un proyecto de Node.js
```
npm init -y 
```

4. Crear un archivo index.js:
```
touch index.js
```
Agregamos el siguiente contenido:
<br>
console.log("¡Retos de GIT!");
<br>
5. Actualizar el repo remoto con el cambio
```
git add .
git commit -m "Se agregó la solución del reto #3 al archivo README.md"
git push origin main
```

# #4 Reto
1. A partir de la rama main crear una nueva rama llamada development
```
git checkout -b development
git branch
```
2. Regresar a la rama main
```
git checkout main
git branch
```
3. Modificar el archivo index.js agregando:
console.log('Modificación Reto 3 rama main');
4. Sin perder el cambio de la rama main y sin hacer commit o push de los cambios, cambiar a la rama development y modificar el archivo index.js agregando
console.log('Modificación Reto 3 rama development');
```
git stash
git checkout development
git add index.js
git commit -m "Se modifico el index.js en la rama development"
```
5. Hacer push a la rama development
```
git push origin development

```
6. Regresar a la rama main, recuperar los cambios y hacer push a la rama
```
git checkout main
git stash pop
git add index.js
git commit -m "Se modifico el index.js en la rama main"
git push origin main
```


# #5 Reto
1. Ubicarse en la rama main
```
git checkout main
```
2. Crear un archivo llamado operaciones.ts agregando una función que permita sumar dos números y retornar el resultado
```
touch operaciones.ts
echo "function sumar(a: number, b: number): number {
    return a + b;
}" > operaciones.ts
```
3. Sin perder el cambio de la rama main y sin hacer commit o push de los cambios, cambiar a la rama development, recuperar las modificaciones hechas en el punto 2 
asegurandose que los cambios permanezcan disponibles para ser usados en cualquier otra rama
```
git stash push -u -m "Nueva funcion para sumar dos numeros"
git checkout development
git stash list
git stash apply stash@{0}
```
4. Hacer push a la rama development
```
git add operaciones.ts
git commit -m "Se agrego el archivo operaciones.ts y su funcion para sumar"
git push -u origin development
```
5. Regresar a la rama main, recuperar los cambios. NO se debe hacer commit ni push a la rama main
```
git checkout main
git stash apply stash@{0}
```
6. Eliminar el archivo package.json del proyecto
```
rm package.json
```
7. Recuperar el archivo package.json
```
git checkout -- package.json
```

# #6 Reto
```
git checkout main
git add -A && git commit -m ""Actualización de cambios del reto 5""
git push origin main
git checkout development
```

Ajustes al archivo operaciones.ts:

```
console.log('Operaciones Matemáticas');

function opAdd(a: number, b: number, c: number): number {
    return a+b+c;
}

function opLess(a: number, b: number): number {
    return a-b;
}
```

Actualizar la rama development en el repo remoto
```
git add -A && git commit -m ""Modificaciones a operaciones.ts""
git push origin development
```

Cambio a main y ajustes
```
git checkout main
```

Modificaciones a operaciones.ts
```
function suma(a: number, b: number): number {
    return a+b;
}

function dividir(a: number, b: number) {
    try {
        return a+b;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
```

Actualización remota de rama main:
```
git add -A && git commit -m ""Modificaciones a operaciones.ts""
git push origin main
```

Fusión de cambios remotos de development a rama main y actualización remota de la rama main
```
git fetch
git merge origin/development // git merge --no-ff origin/development
// TODO: solución de conflictos
git add :/
git add -A && git commit -m ""Mezcla cambios desde rama remota development y resolución de conflictos""
git push origin main
```

# #7 Reto
Rama main: El objetivo es recuperar el estado y contenido del archivo operaciones.ts en donde solo tenía el método suma()						

## Solución 1
```
git reset --soft 869dafb13e5a874d8d2f491940826c747d83cb6d # Recupera el estado del archivo
git restore --staged operaciones.ts # Devuelve cambios en el stage
git restore operaciones.ts # Deja el archivo en el estado inicial antes del commit

# Comando adicional para volver al estado inicial, antes del inicio del reto, todos los archivos
git reset --hard 83e5ac1a304f3628d531a43390b52845e9c2844b
```

## Solución 2
```
# Comando adicional para volver al estado inicial, antes del inicio del reto, todos los archivos
git reset --hard 869dafb13e5a874d8d2f491940826c747d83cb6d
```


Cual de las dos es la solución recomendada? eso depende, si estoy seguro de devolver todos los cambios la solución 2 es mejor, pero si debo ir con cuidado para revisar algo en el camino, la solución recomendada es la 1 que es útil cuando hay muchos archivos/cambios en el histórico

Otra diferencia va a ser la conservación del histórico de cambios de GIT, la solución 1 conserva todo el histórico, la solución 2 no					


# #8 Reto
Agrega el siguiente método en el archivo de operaciones en la rama main:

```
function multiplicar(a, b) {
    return a*b;
}
```

Actualiza el cambio en repo remoto (commit y push)
git add operaciones.ts  
git commit -m "Se agrego el método multiplicar al archivo operaciones.ts"
git push -u origin main 
Supongamos que el PO del proyecto nos indicó que el método no debía ser ese sino que debía ser el siguiente por lo que debes reemplazar el método multiplicar():
```
function porcentaje(a, b) {
    return (a*b)/100;
}
```
git add operaciones.ts  
git commit -m "Se cambio el método multiplicar por el de porcentaje en el archivo operaciones.ts"
git push -u origin main 

Actualiza el cambio en repo remoto (commit y push)

Nuevamente el PO nos indica que debemos devolver el cambio y dejar solo el método múltiplicar, pero además notas que el método multiplicar() tiene un bug, porque generará una excepción si los parámetros a y b no son números, por lo que debes corregirlo

Para corregir el bug deberás tener en cuenta:

1. No puedes usar git checkout <commit>
2. No puedes usar git reset <commit>
3. No puedes simplemente modificar el archivo y hacer un nuevo commit, en este caso sería la solución más sencilla pero no esta permitido
4. Debes buscar otra manera de realizar el cambio, en donde a nivel del histórico de cambios quede registrada (commit) la recuperación del cambio
5. Soluciona el bug del método multiplicar
6. Actualiza los cambios en el repo remoto
7. Mezcla la rama main local en la rama development local y actualiza el repo remoto

git revert --no-commit 8aca515
git add operaciones.ts
git commit -m "Se deja el método multiplicar implementado inicialmente pero corrigiendo los parametros en el archivo operaciones.ts"
git push origin main
git checkout development
git merge --no-ff origin/main
git add operaciones.ts
git commit -m ""
git push origin development