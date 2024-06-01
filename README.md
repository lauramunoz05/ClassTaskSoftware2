# ClassTasks
ClassTasks es una plataforma que permite a los usuarios gestionar sus tareas académicas organizadas por materias. 
Esta API se está desarrollando como parte del proyecto para el curso de Construcción de Software 2, correspondiente al año académico 2024. 
Su objetivo principal es facilitar la integración con bases de datos y comunicación entre los diferentes componentes del sistema, permitiendo el intercambio de datos y la conexion entre el backend y el frontend.

## Características
- Gestion de usuarios (Create, Read, Update, Delete)
- Gestión de materias o cursos (Create, Read, Update, Delete)
- Gestión de tareas por materia (Create, Read, Update, Delete, mark as completed)

## Documentación de la API
Esta documentación, generada automáticamente con Swagger UI, proporciona una descripción detallada de los endpoints disponibles, los parámetros requeridos, los tipos de respuesta esperados y ejemplos de uso.

Gracias a la interfaz intuitiva de Swagger UI, podrás explorar cómodamente la API, probar los diferentes endpoints directamente desde tu navegador y visualizar las respuestas correspondientes. Esto facilitará la comprensión del funcionamiento de la API y agilizará el proceso de integración con otros componentes del sistema.
Además, la documentación de Swagger UI se mantiene actualizada automáticamente, reflejando cualquier cambio o nueva funcionalidad que se implemente en la API, lo que garantiza que siempre tendrás acceso a la información más precisa y actualizada.

Se recomienda consultar esta documentación antes de comenzar a trabajar con la API, ya que proporcionará una comprensión completa de sus capacidades y facilitará el desarrollo de aplicaciones que consuman sus servicios.

Puedes acceder a la documentación de la API una vez que el proyecto esté en ejecución a través del siguiente enlace:

http://localhost:8080/swagger-ui/index.html#/

## Pruebas Unitarias

Se han realizado pruebas unitarias exhaustivas para cada uno de los métodos HTTP (GET, GET by ID, POST, PUT, DELETE) en los controladores de Users, Subjects y Tasks. Estas pruebas garantizan el correcto funcionamiento de las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en cada uno de los recursos mencionados.

Las pruebas unitarias se ejecutaron satisfactoriamente, cubriendo diversos escenarios y casos de borde. Esto proporciona una mayor confianza en la calidad del código y su capacidad para manejar diferentes situaciones de manera adecuada.
