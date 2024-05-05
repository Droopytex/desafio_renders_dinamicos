# Base de datos (Basic) "Colaboradores" con React

## Descripción del Proyecto

Proyecto grupal realizado por Andrés Velásquez y Andrea Rosero, donde validamos conocimientos de Renderización dinámica de componentes.

### :scroll: Contexto :scroll:
Un cliente nos solicita una aplicación en React que muestre una lista de colaboradores a paritr de unos datos entregados, donde adicionalmente se pueda agregar colaboradores nuevos y filtrar la lista de resultado a partir de una barra de búsqueda que depure en funión de cualquier dato del colaborador.


## Sobre el proyecto 🚀


### ✨ Requerimientos ✨

👌 1. Crea al menos 4 componentes, Listado, Formulario, Buscador y Alert, todos importados desde App.jsx.

👌 2. Cargar la lista de colaboradores desde un archivo js e importarlos en el archivo App.jsx.

👌 3. El componente Listado se deben mostrar los datos de los colaboradores utilizando una tabla de Bootstrap.

👌 4. El componente formulario debe contener el formulario con los campos necesarios para agregar colaboradores a la lista y un botón para agregar los campos, además se debe validar que los campos no se encuentren vacíos.

👌 5. Luego de presionar el botón de Agregar colaborador, el componente Alert debe mostrar un mensaje indicando si es que el colaborador fue agregado exitosamente o si los campos se encuentran vacíos.
  - Utiliza los props para mostrar un mensaje de error o de éxito.
  - Opcionalmente, puedes utilizar otro props para cambiar el color de la alerta (success o danger) según corresponda.
  - Como recordatorio, debes tener un state en el componente App que almacene el mensaje de error o de éxito, y pasar mediante props al componente Alert y Formulario.

👌 6. Crear un componente para realizar una búsqueda de colaboradores por todos los campos del formulario.
 - Se puede usar método .filter() de JS para retornar un nuevo arreglo de colaboradores.

👌 7.  Replicar el estilo de la aplicación usando Bootstrap, ya sea mediante react-bootstrap o su CDN.
 - Debe ser responsive

👌 8. Crear repositorio en github y trabajar colaborativamente con al menos dos commits cada integrante.

👌 9. Agregar un botón a cada colaborador dentro del listado para eliminar los registros. (Opcional)

### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

 "dependencies": 
 - "@fortawesome/fontawesome-svg-core": "^6.5.2",
 - "@fortawesome/free-brands-svg-icons": "^6.5.2",
 - "@fortawesome/free-solid-svg-icons": "^6.5.2",
 - "@fortawesome/react-fontawesome": "^0.2.0",
 - "react": "^18.2.0",
 - "react-dom": "^18.2.0"

 "devDependencies": 
 - "vite": "^5.2.0"


### Instalación 🔧

 En terminal:
- npm init --yes
- npm i 
- npm run dev


## Visuales :mage_woman:

- Registro del Proyecto:

![registrocolaboradores](https://github.com/Droopytex/desafio_renders_dinamicos/assets/154395788/f96cb316-94b8-42e3-9030-e355cfa4ff36)

- Validación de Campos:
- 
![registro_validacioncampos](https://github.com/Droopytex/desafio_renders_dinamicos/assets/154395788/bf1d26d8-ed5a-4897-a0bc-94dcfc7822ad)

- Registro Exitoso:
  
![registro_exitoso](https://github.com/Droopytex/desafio_renders_dinamicos/assets/154395788/4f9c4765-10aa-43ba-b36b-05d77f38d349)

- Búsqueda de Registro:
  
![registrobusqueda](https://github.com/Droopytex/desafio_renders_dinamicos/assets/154395788/09ca9a83-f71c-468b-a556-65d9da4123b8)


## Construido Con 🛠️

Explica qué tecnologías usaste para construir este proyecto. Aquí algunos ejemplos:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - El lenguaje utilizado
- [React](https://react.dev/)- Node paquete PG
- [Vite](https://vitejs.dev/guide/)- Node paquete PG
  

## Autores ⚡ 

- **Andrea Rosero** ⚡  - [Andrea Rosero](https://github.com/andreaendigital)
- **Andres Velásquez** ⚡  - [Andres Velásquez](https://github.com/Droopytex)
