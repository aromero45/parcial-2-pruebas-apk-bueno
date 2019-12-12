# Estrategia de pruebas - Parcial 2

---

## Cracterísticas de la App

**Mileage**

La descripción de Mileage

El kilometraje le permite calcular el kilometraje de su automóvil de una manera simple y directa para evaluar su economía de combustible. Simplemente ingrese una distancia (en millas o kilómetros) y una cantidad de gas (en galones o litros) y calculará por usted:

1. Millas por galón
2. Galones por 100 millas
3. Kilómetros por litro
4. Litros por 100 kilómetros

Con esa información es posible usar características adicionales y que son calculos simples como:

* cuánto cuestan varios litros de gasolina?
* Costo de reparaciones e impuestos
* Recordatorios de mantenimiento

![](assets/screenshot_4.png)

La aplicación cuenta con `8,212` reviews y una calificación de `3.4` en Google Play.

![](assets/caracteristicas1.png)


**Version:** 3.1.1 Ultima Actualizacion Febrero 5, 2013

**Version de Android mínima:** 4

![](assets/caracteristicas2.png)

## Contexto

### Objetivos

* Realizar Pruebas exploratorias sobre la aplicación movil Mileage para conocer cuales son sus principales funcionalidades.
* Evaluar la calidad de la suite de pruebas usando los mutantes creados. 
* Realizar Pruebas VRT con apk bueno y los mutantes para hallar posibles fallos que no se puedan hallar a simple vista. 
* Presentar reportes de cada prueba para su analisis. 
* Automatizar escenarios básicos que no esten contemplados en la suite de pruebas. 
* Construir una aplicación que automatice la prueba sobre los mutantes y sobre la aplicacion limpia y reportar los fallos detectados. 

### Niveles y tipos de prueba

**Sistema**

* Se realizará un proceso de BDD sobre el APK instalado en un dispositivo Android emulado probando la aplicación como un sistema completo.
* Por cada escenario de las pruebas BDD se toma un screenshot, esto se hace en cada mutante para luego ser comparado con el apk limpio. 
* Se hace VRT por cada screenshot del mutante con los screenshot del apk limpio y se geenra un reporte automaticamente con el worker. 

**Aceptación**

* Durante el proceso de exploración se realizara una prueba de aceptación en un dispositivo Android real de forma manual.

### Infraestructura de pruebas

**Hardware:**

* Computador MSI con sistema operativo Ubuntu 18.04, 16GB RAM, 512GB estado solido, core i7.
* Celular HUAWEI P20 Lite VERSION DE ANDROID 9.
* Emulador Nexus 5, API 27, Android 8.1, 2GB

**Software:**

* Android Studio
* Mileage original APK provista por el monitor de la clase como la versión estable de la aplicación.
* Mileage APK's mutantes provistos por el monitor de la clase como la versión inestable de la aplicación.
* Calabash para automatización de pruebas sobre Android
* pixelmatch para hacer evidencia de ejecución de pruebas de sistema y hacer VRT sobre las imagenes generadas.
* Aplicación original descargada y compilada desde el repositorio base.

**Recurso Humano:**

2 desarrolladores trabajando 2 horas diarias durante 6 días continuos.

### Proceso de deteccion de errores 

El proceso a seguir para encontrar los defectos detectados en los mutantes es:

1. Instalar APK 
2. Ejecutar pruebas de calabash
3. Ejecutar pruebas de VRT
4. Creacion de reportes de todas las pruebas automaticamwente
5. Leer resultados 


* Primero se va a realizar el proceso sobre el APK original con el objetivo de encontrar una muestra base del comportamiento de la aplicación sin defectos inyectados, esta prueba inicial busca determinar la cantidad de defectos que pueden ser hallados usando las pruebas unitarias del desarrollador inicial, las pruebas de Calabash codificadas por nosotros y una serie de eventos aleatorios generados por la herramienta de random testing de android.


Se realizo un informe completo de todas las funcionalidades disponibles sobre Mileage.

## Resultados

* PRUEBAS CON CALABASH 
* VRT usando PixelMatch 

--- Resultados -- 


## Herramienta de automatización 

---

Se realizo una herramienta de automatización sobre comando bash que hace lo siguiente:

1. Crear cartpeta de resultados del mutante
2. Copiar el APK del mutante
3. Firmal el APK, debido a que la copia firmada no funcionaba
4. Ejecutar las pruebas de Calabash
5. Generar las imagenes para hacer VRT
6. Copiar los resultados de Calabash
6. Abrir la aplicación con su actividad principal
7. Ejecutar random testing
8. Guardar los resultados de random testing
9. Limpiar


## Conclusiones

---

### BDT

* Todos los escenarios de pruebas que quicieran explorar la aplicación de forma profunda, es decir más allá de la pantalla inicial, deben contemplar el hecho de tener por lo menos 1 carro agregado al sistema.
* Los escenarios de pruebas construidos en Calabash eran buenos para detectar problemas con: el cambio de ID's de los elementos, cambios en los textos del menú, navegación completa y cambio entre actividades.
* Los escenarios propuestos no eran buenos detectando mutantes visuales, es decir cambios en colores o posiciones.

### VRT

* La aplicación original cuenta con un fallo que en ocasiones detecta en monkey de Android y produce que la aplicación se cierra dañando la prueba, sin embargo cambiando la semilla para el APK bajo pruebas, se podia completar el esenario completo, por lo cual las pruebas de random testing son costosas en tiempo porque deben ser bien estructuradas para evitar encontrar errores conocidos y poder explorar la aplicaciñon más allá de esa barrera.

### Repositorio

* Se ha iniciado un hilo de conversación con el dueño de la aplicación para hacer un pull request incluyendo las pruebas de Calabash en el repositorio original así como un sistema de monkey testing.

### Usabilidad

* Los comentarios de una persona que esta acostumbrada a manejar dispositivos móviles como Celulares de corte Android sobre la usabilidad de la aplicación no son buenos evidenciando grandes problemas conceptuales, cambios de moneda, navegabilidad y fácilidad para encontrar la información.

### Ejecución de pruebas

* El tiempo fue la mayor limitación para ejecutar las pruebas de forma completa.
* El telefono queda con mucha basura entre ejecució y ejecución, así que se recomienda eliminar y volver a crear el dispositivo virtual, pero este proceso ubiese tomado mucho más tiempo para la ejecución de 1 solo mutante.
* Con más tiempo se recomienda hacer pruebas de regresión visual para evaluar las gráficas.
* Los mutantes más fáciles de detectar con random testing tenian que ver con los selectores de fechas y pintado de gráficas.

## Referencias

---

* [Mileage](https://github.com/evancharlton/android-mileage)
* [Mileage - Google Play](https://play.google.com/store/apps/details?id=com.evancharlton.mileage&hl=en_US)




