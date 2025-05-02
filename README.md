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
