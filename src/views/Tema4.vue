<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Electrónica digital y sistemas embebidos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 Los controladores modernos, desde un PLC hasta una tarjeta Arduino, trabajan con información digital, es decir, con señales que solo toman dos estados, encendido o apagado, uno o cero. La electrónica digital explica cómo se representan los números con esos dos estados, cómo se combinan mediante compuertas y cómo se simplifican las decisiones lógicas. Es la base para comprender la lógica programada y los sistemas embebidos que hoy supervisan invernaderos, galpones y estanques.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='' style="max-width: 400px").m-auto
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Introducción a la electrónica digital
      p.mb-5 A continuación, se presenta un pódcast  que permite comprender los fundamentos de la electrónica digital, identificar las características y diferencias entre las señales analógicas y digitales, y reconocer su importancia en la adquisición, procesamiento y transmisión de información dentro de los sistemas electrónicos y de automatización industrial.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t4/img2.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Introducción a la electrónica digital&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t4/img3.png" style="max-width: 510px").m-auto
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Sistemas de numeración
      p.mb-5 Un sistema de numeración es un conjunto de símbolos y reglas para representar cantidades. Los sistemas usados en electrónica digital se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img4.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Decimal
              p.mb-0.text-center Usa diez símbolos, del 0 al 9.
        .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img5.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Binario
              p.mb-0.text-center Usa dos símbolos, 0 y 1.
        .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img6.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Hexadecimal
              p.mb-0.text-center Usa dieciséis símbolos (0 a 9 y A a F) y sirve para escribir números binarios largos de forma compacta.
        .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img7.png', alt="" style="max-width: 100px").m-auto
              h4.text-center BCD
              p.mb-0.text-center Representa cada dígito decimal con cuatro bits.
      p.mb-5 La conversión de un número decimal a binario y a hexadecimal se presenta a continuación:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img8.png', alt=''  style="max-width: 400px").m-auto
        .col-xl
          .box___style_2.fit___box_3(data-aos="fade-left")
            .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
              h4.mb-0 Ejemplo resuelto
            p.mb-0 Convertir 25 decimal a binario por divisiones sucesivas entre 2: 25/2 = 12 resto 1; 12/2 = 6 resto 0; 6/2 = 3 resto 0; 3/2 = 1 resto 1; 1/2 = 0 resto 1. Leyendo los restos de abajo hacia arriba: 11001. Comprobación: 16 + 8 + 0 + 0 + 1 = 25. En hexadecimal: 0001 1001 = 19h.
      p.mb-5 Las equivalencias de algunos valores en los cuatro sistemas se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 9.
        span Equivalencias entre sistemas de numeración
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Decimal
              th.ajuste-border-tabla.texto-left Decimal
              th.ajuste-border-tabla.texto-left Hexadecimal
              th.texto-left BCD
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold 5
              td.ajuste-border-tabla.texto-left 0101
              td.ajuste-border-tabla.texto-left 5
              td.texto-left 0000 0101
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold 10
              td.ajuste-border-tabla.texto-left 1010
              td.ajuste-border-tabla.texto-left A
              td.texto-left 0001 0000
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold 15
              td.ajuste-border-tabla.texto-left 1111
              td.ajuste-border-tabla.texto-left F
              td.texto-left 0001 0101
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold 20
              td.ajuste-border-tabla.texto-left 11001
              td.ajuste-border-tabla.texto-left 19
              td.texto-left 0010 0101
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Compuertas lógicas
      p.mb-5 Las compuertas lógicas son circuitos que realizan operaciones con señales binarias. Su comportamiento se describe con una tabla de verdad, que lista la salida para cada combinación de entradas. Las básicas son AND, OR y NOT, y de ellas se derivan NAND, NOR, XOR y XNOR (Floyd, 2006). Su expresión y un ejemplo de uso en un automatismo agropecuario se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 10.
        span Compuertas lógicas básicas y su aplicación
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Compuerta
              th.ajuste-border-tabla.texto-left Expresión
              th.ajuste-border-tabla.texto-left Salida en 1 cuando…
              th.texto-left Ejemplo en automatismo
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold AND
              td.ajuste-border-tabla.texto-left S = A·B
              td.ajuste-border-tabla.texto-left Todas las entradas son 1
              td.texto-left Bomba solo si hay agua Y es hora de riego
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold OR
              td.ajuste-border-tabla.texto-left S = A + B
              td.ajuste-border-tabla.texto-left Alguna entrada es 1
              td.texto-left Alarma si falla la bomba O el tanque está vacío
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold NOT
              td.ajuste-border-tabla.texto-left S = A'
              td.ajuste-border-tabla.texto-left La entrada es 0
              td.texto-left Encender luz si NO hay luz natural
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold NAND
              td.ajuste-border-tabla.texto-left S = (A·B)'
              td.ajuste-border-tabla.texto-left No todas son 1
              td.texto-left Base de circuitos integrados universales
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold XOR
              td.ajuste-border-tabla.texto-left S = A ⊕ B
              td.ajuste-border-tabla.texto-left Las entradas son distintas
              td.texto-left Control de una luz desde dos puntos
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Álgebra de Boole
      p.mb-0 El álgebra de Boole es la matemática de las variables binarias. Permite escribir el comportamiento de un circuito lógico como una expresión y simplificarla con leyes como la conmutativa, la asociativa, la distributiva, la de absorción (A + A·B = A) y los teoremas de De Morgan, que establecen que (A·B)' = A' + B' y (A + B)' = A'·B' (Floyd, 2006). Una expresión simplificada requiere menos compuertas, menos cableado o menos líneas de programa.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Mapas de Karnaugh
      p.mb-5 El mapa de Karnaugh es un método gráfico para simplificar funciones booleanas de dos a cuatro variables. Las celdas se ordenan en código Gray, de modo que las celdas vecinas difieren en una sola variable. Los unos adyacentes se agrupan en bloques de 1, 2, 4 u 8, y cada grupo produce un término simplificado. Su aplicación en el control de un ventilador se presenta a continuación:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img9.png', alt=''  style="max-width: 350px").m-auto
        .col-xl
          .box___style_2.fit___box_4(data-aos="fade-left")
            .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
              h4.mb-0 Ejemplo resuelto
            p.mb-0 Un ventilador de galpón (V) debe encender si la temperatura es alta (T) y hay energía (E), o si la temperatura es alta y el modo manual (M) está activo, siempre que haya energía. La tabla de verdad da unos en las combinaciones T=1, E=1 con M=0 y M=1. En el mapa, esas dos celdas son vecinas y forman un grupo de dos en el que M cambia: la función se simplifica a V = T·E.
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.6 Lógica computacional y sistemas embebidos
      p.mb-5 La lógica computacional aplica estos principios dentro de un procesador. Una unidad aritmético-lógica ejecuta operaciones, una memoria guarda el programa y los datos, y los puertos de entrada y salida conectan el procesador con el mundo exterior. Un #[b sistema embebido] es un computador dedicado a una tarea específica, integrado dentro del equipo que controla, como el controlador de una incubadora o de un sistema de fertirriego. Sus elementos se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Microcontrolador
                  p.mb-0 Núcleo del sistema, que reúne en un solo chip el procesador, la memoria, los convertidores y los puertos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Arduino
                  p.mb-0 Plataforma abierta que combina una tarjeta económica con un entorno de programación gratuito y facilita el aprendizaje (Arduino, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 ESP32
                  p.mb-0 Tarjeta que añade conectividad wifi, útil para el monitoreo remoto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img12.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img13.png', alt=''  style="max-width: 400px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_5(data-aos="fade-left")
            .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
              h4.mb-0 Para reflexionar
            p.mb-0 Conviene analizar un proceso cercano, como el llenado de un bebedero automático, e identificar qué entradas digitales intervienen, qué salida se controla y qué expresión lógica describe la condición de llenado. Este ejercicio conecta las compuertas con los programas de un sistema embebido.
      p.mb-5 La de la señal física a la decisión digital se presenta a continuación:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Sensor
                    p.mb-0 Detecta la variable física del proceso.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img14.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img15.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Conversión
                    p.mb-0 El ADC transforma la señal analógica en digital.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Representación binaria
                    p.mb-0 El dato se guarda como bits y bytes.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img16.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img17.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Procesamiento lógico
                    p.mb-0 El programa aplica compuertas y reglas booleanas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Actuación
                    p.mb-0 Una salida digital activa relé, válvula o motor.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img18.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img19.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Resultado
                    p.mb-0 Control automático basado en decisiones lógicas.

</template>

<script>
import audio1 from '@/assets/curso/temas/t4/audios/Podcast_Tecnologia_Automatizacion_Sistemas_Agropecuarios.mp3'
export default {
  name: 'Tema4',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
