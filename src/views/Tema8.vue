<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 8
        h1 Automatismos eléctricos y teoría de control
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 Un automatismo es un sistema que ejecuta operaciones sin intervención humana continua, a partir de órdenes y de la información que entregan los sensores. Puede resolverse con lógica cableada, en la que la decisión depende de cómo se conectan físicamente los contactos, o con lógica programada, en la que un controlador ejecuta un programa. Detrás de ambos está la teoría de control, que explica cómo mantener una variable en el valor deseado.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t8/img1.png', alt='' style="max-width: 400px").m-auto
      #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.1 Lógica cableada
      p.mb-5 En la lógica cableada la función de control se define mediante el conexionado de elementos electromecánicos, cuya función se presenta a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 18.
        span Elementos de la lógica cableada
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Elemento
              th.ajuste-border-tabla.texto-left Función
              th.texto-left Ejemplo de uso
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Pulsador NA
              td.ajuste-border-tabla.texto-left Da la orden al presionarse
              td.texto-left Marcha de una motobomba
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Pulsador NC
              td.ajuste-border-tabla.texto-left Interrumpe al presionarse
              td.texto-left Paro o parada de emergencia
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Contactor
              td.ajuste-border-tabla.texto-left Conecta la carga de potencia
              td.texto-left Motor de un molino
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Relé temporizador
              td.ajuste-border-tabla.texto-left Retarda una conexión o desconexión
              td.texto-left Tiempo de riego de un sector
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Relé térmico
              td.ajuste-border-tabla.texto-left Abre el mando si hay sobrecarga
              td.texto-left Protección del motor
      p.mb-5 El circuito más conocido es el de marcha y paro con autorretención, que funciona como se presenta a continuación:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Pulsar marcha
                    p.mb-0 Al pulsar marcha se energiza la bobina del contactor.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img2.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img3.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Retener
                    p.mb-0 Un contacto auxiliar del mismo contactor, conectado en paralelo con el pulsador, mantiene la bobina energizada al soltarlo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Pulsar paro
                    p.mb-0 El pulsador de paro, normalmente cerrado, abre el circuito y apaga la carga.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img4.png', alt='' style="width: 160px").m-auto
          Separador
          #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 8.2 Introducción a la lógica programada
      p.mb-5 En la lógica programada las decisiones se escriben en un programa que ejecuta un controlador lógico programable (PLC) o un sistema embebido. El PLC trabaja en un ciclo repetitivo llamado scan, que se presenta a continuación:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Leer las entradas
                    p.mb-0 El PLC registra el estado de pulsadores y sensores.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img5.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img6.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Ejecutar el programa
                    p.mb-0 Resuelve la lógica de control escrita por el programador.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Actualizar las salidas
                    p.mb-0 Activa o desactiva contactores, electroválvulas y señalizaciones, y vuelve a empezar el ciclo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img7.png', alt='' style="width: 160px").m-auto
          p.mb-0 Uno de sus lenguajes más usados es el diagrama de escalera (ladder), que imita gráficamente los esquemas de contactos de la lógica cableada, por lo que resulta familiar para quien conoce esta última. La ventaja principal es la flexibilidad, pues modificar la secuencia de un proceso implica cambiar el programa y no recablear el tablero. Además, el PLC facilita la comunicación con otros equipos y el registro de datos.
          Separador
          #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 8.3 Concepto de sistema y control en lazo abierto y cerrado
      p.mb-5 Un sistema es un conjunto de elementos que interactúan para cumplir una función. En control se representa como un bloque que recibe entradas y produce salidas, y puede operar en lazo abierto o en lazo cerrado, como se presenta a continuación (Ogata, 2010):
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.color___1.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t8/img8.png', alt="" ).m-auto
              h4 Lazo abierto
              .box___card_sinbordes_p
                p.mb-0 La acción de control no depende de la salida. Un riego programado por tiempo aplica agua durante diez minutos, llueva o no.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.color___3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t8/img9.png', alt="" ).m-auto
              h4 Lazo cerrado o realimentado
              .box___card_sinbordes_p
                p.mb-0 Un sensor mide la salida, la compara con el valor deseado y corrige la acción. El riego se activa solo si el sensor de humedad indica que el suelo está seco.
      p.mb-5 Las diferencias entre ambos tipos de control se resumen a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 19.
        span Comparación entre control en lazo abierto y en lazo cerrado
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Aspecto
              th.ajuste-border-tabla.texto-left Lazo abierto
              th.texto-left Lazo cerrado
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Medición de la salida
              td.ajuste-border-tabla.texto-left No
              td.texto-left Sí, mediante un sensor
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Corrección de perturbaciones
              td.ajuste-border-tabla.texto-left No
              td.texto-left Sí, automáticamente
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Costo y complejidad
              td.ajuste-border-tabla.texto-left Menor
              td.texto-left Mayor
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Ejemplo
              td.ajuste-border-tabla.texto-left Riego por temporizador
              td.texto-left Riego por humedad del suelo
      Separador
      #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.4 #[i Set point], valor consigna y variable de proceso
      p.mb-0 El #[b set point] o valor consigna es el valor deseado para la variable controlada, por ejemplo 38 °C en una incubadora de huevos. La variable de proceso (PV) es el valor real medido por el sensor. La diferencia entre ambos se llama error, error = SP − PV. La variable manipulada es la que el controlador modifica para corregir el error, como la potencia entregada a la resistencia calefactora. Las perturbaciones son influencias externas que alejan la variable del #[b set point], como abrir la puerta de la incubadora.
      Separador
      #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.5 Control ON/OFF y control PID
      p.mb-5 Los controladores pueden actuar de dos maneras, que se comparan a continuación (Ogata, 2010):
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.color___1.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t8/img10.png', alt="" ).m-auto
              h4 Control ON/OFF
              .box___card_sinbordes_p
                p.mb-0 El actuador solo tiene dos estados, totalmente encendido o apagado. Para evitar que conmute continuamente alrededor del set point se usa una banda de histéresis o diferencial, por ejemplo, la calefacción enciende a 37,5 °C y apaga a 38,5 °C. Es adecuado para procesos lentos que toleran pequeñas oscilaciones.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.color___3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t8/img11.png', alt="" ).m-auto
              h4 Control PID
              .box___card_sinbordes_p
                p.mb-0 Ajusta la salida de forma continua combinando tres acciones. La proporcional (P) responde al tamaño del error actual, la integral (I) acumula el error en el tiempo y elimina el error permanente, y la derivativa (D) reacciona a la velocidad de cambio del error y anticipa su evolución.
      p.mb-5 Reconocer los parámetros de control significa identificar en el controlador la ganancia o banda proporcional, el tiempo integral y el tiempo derivativo, cuyo ajuste se llama sintonización. El efecto de cada acción y el parámetro que la ajusta se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 20.
        span Acciones de control y parámetros
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Acción
              th.ajuste-border-tabla.texto-left Parámetro
              th.texto-left Efecto principal
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold ON/OFF
              td.ajuste-border-tabla.texto-left Histéresis o diferencial
              td.texto-left Evita conmutaciones excesivas
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Proporcional
              td.ajuste-border-tabla.texto-left Kp o banda proporcional
              td.texto-left Respuesta proporcional al error
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Integral
              td.ajuste-border-tabla.texto-left Tiempo integral o Ki
              td.texto-left Elimina el error permanente
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Derivativa
              td.ajuste-border-tabla.texto-left Tiempo derivativo o Kd
              td.texto-left Amortigua cambios bruscos
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 4.
            span Lazo de control realimentado
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t8/img12.png', alt='Diagrama circular del sistema de control en lazo cerrado, organizado en cinco etapas: medición de la variable de proceso, comparación con el valor de referencia, decisión mediante controlador ON/OFF o PID, actuación mediante válvula, bomba o resistencia, y retroalimentación del proceso para repetir el ciclo. ').m-auto
      p.mb-5 Esta figura presenta los elementos de un lazo de control cerrado y cómo circula la información.
      .call___to_action.mb-4(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t8/img13.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Instrumentación industrial y automatización agropecuaria
            p.mb-0 Los invitamos a consultar el documento Instrumentación industrial y automatización agropecuaria, en el que podrán reconocer los fundamentos de la instrumentación industrial, los sistemas neumáticos e hidráulicos y las tecnologías de comunicación aplicadas a los procesos agropecuarios.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Instrumentacion_industrial_automatizacion_agropecuaria.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t8/img13.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Recursos de apoyo para los fundamentos de instrumentación
            p.mb-0 Los invitamos a explorar el documento Recursos de apoyo para los fundamentos de instrumentación, que reúne videos, simuladores y materiales de consulta organizados por temas.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Recursos_apoyo_fundamentos_instrumentacion.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
