<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Electrotecnia de corriente continua
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 Casi todos los automatismos funcionan con electricidad. Los sensores se alimentan con corriente continua, los controladores procesan señales eléctricas y los actuadores reciben energía eléctrica para moverse. La corriente continua (c.c. o DC) es aquella que circula siempre en el mismo sentido, como la que entregan las baterías, los paneles solares y las fuentes de 24 V de los tableros de control.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='' style="max-width: 400px").m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Variables eléctricas
      p.mb-5 Las variables eléctricas describen el comportamiento de un circuito y se presentan a continuación (Boylestad, 2011):
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img2.png', alt="" style="max-width: 90px").m-auto
              h4.text-center Tensión o voltaje (V)
              p.mb-0.text-center Diferencia de potencial que impulsa las cargas.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img3.png', alt="" style="max-width: 90px").m-auto
              h4.text-center Corriente (I)
              p.mb-0.text-center Flujo de cargas por un conductor.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img4.png', alt="" style="max-width: 90px").m-auto
              h4.text-center Resistencia (R)
              p.mb-0.text-center Oposición que presenta un material al flujo de cargas.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img5.png', alt="" style="max-width: 90px").m-auto
              h4.text-center Potencia (P)
              p.mb-0.text-center Rapidez con que se transforma la energía.
      p.mb-5 Una analogía útil es la del agua en una manguera de riego. La tensión equivale a la presión del agua, la corriente al caudal y la resistencia a un estrechamiento de la manguera. Con más presión circula más agua, y con una manguera más estrecha circula menos. La unidad, el símbolo y el instrumento de medida de cada variable se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 4.
        span Variables eléctricas fundamentales
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Variable
              th.ajuste-border-tabla.texto-left Unidad
              th.ajuste-border-tabla.texto-left Símbolo
              th.ajuste-border-tabla.texto-left Instrumento
              th.texto-left Valor típico en automatismos
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Tensión
              td.ajuste-border-tabla.texto-left voltio
              td.ajuste-border-tabla.texto-left V
              td.ajuste-border-tabla.texto-left Voltímetro
              td.texto-left 24 V c.c. en sensores
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Corriente
              td.ajuste-border-tabla.texto-left amperio
              td.ajuste-border-tabla.texto-left A
              td.ajuste-border-tabla.texto-left Amperímetro
              td.texto-left 4–20 mA en transmisores
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Resistencia
              td.ajuste-border-tabla.texto-left ohmio
              td.ajuste-border-tabla.texto-left Ω
              td.ajuste-border-tabla.texto-left Óhmetro
              td.texto-left 250 Ω en lazo de corriente
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Potencia
              td.ajuste-border-tabla.texto-left vatio
              td.ajuste-border-tabla.texto-left W
              td.ajuste-border-tabla.texto-left Vatímetro
              td.texto-left 2 W en una electroválvula
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Puesto de trabajo, herramientas básicas y #[i protoboard]
      p.mb-5 A continuación, se presenta un video que permite reconocer las principales herramientas utilizadas en electrónica, comprender sus funciones e identificar las características y conexiones internas de la #[i protoboard], destacando la importancia de mantener un puesto de trabajo seguro y organizado durante el montaje de circuitos electrónicos.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Puesto de trabajo, herramientas básicas y #[i protoboard]
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Ley de Ohm y ley de Watt
      p La ley de Ohm establece que la corriente en un conductor es directamente proporcional a la tensión aplicada e inversamente proporcional a su resistencia, I = V / R (Boylestad, 2011). La ley de Watt relaciona potencia, tensión y corriente, P = V × I, y al combinarse con la de Ohm también se expresa como P = I² × R o P = V² / R.
      p.mb-5 La aplicación de ambas leyes en un lazo de corriente se presenta a continuación:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img6.png', alt=''  style="max-width: 300px").m-auto
        .col-xl
          .box___style_2.fit___box_4(data-aos="fade-left")
            .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
              h4.mb-0 Ejemplo resuelto
            p.mb-0 Un transmisor entrega 20 mA a través de una resistencia de 250 Ω en la entrada de un controlador. Tensión: V = I × R = 0,020 A × 250 Ω = 5 V. Potencia disipada: P = V × I = 5 V × 0,020 A = 0,1 W. Una resistencia de 1/4 W (0,25 W) soporta esta potencia con margen.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Instrumentos de medición de variables eléctricas
      p.mb-5 El multímetro digital reúne voltímetro, amperímetro y óhmetro, y la pinza amperimétrica mide corriente sin abrir el circuito, porque detecta el campo magnético alrededor del conductor. La forma de conectar cada función del multímetro y sus precauciones se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 5.
            span Conexión de los instrumentos de medición
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Medición
                  th.ajuste-border-tabla.texto-left Conexión
                  th.texto-left Precaución
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Tensión
                  td.ajuste-border-tabla.texto-left En paralelo
                  td.texto-left Seleccionar c.c. o c.a. y un rango mayor al esperado.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Corriente
                  td.ajuste-border-tabla.texto-left En serie
                  td.texto-left Usar el borne de A o mA correcto; nunca en paralelo.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Resistencia
                  td.ajuste-border-tabla.texto-left Circuito sin energía
                  td.texto-left Descargar condensadores antes de medir.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Continuidad
                  td.ajuste-border-tabla.texto-left Circuito sin energía
                  td.texto-left Verificar pistas, fusibles y cables.
      p.mb-0 La seguridad de la medición depende de usar un instrumento con la categoría adecuada. La norma IEC 61010 clasifica los instrumentos en categorías (CAT II para tomacorrientes, CAT III para tableros de distribución y CAT IV para acometidas), y un multímetro de baja categoría puede fallar ante picos de tensión de la red.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Componentes pasivos y operaciones con ellos
      p.mb-5 Los componentes pasivos no amplifican ni controlan la energía, sino que la consumen, la almacenan o la limitan. Los principales se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img7.png', alt="" ).m-auto
              h4.text-center Resistor
              .box___card_sinbordes_p
                p.mb-0.text-center Limita la corriente. Se identifica con un código de colores o con un código impreso.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img8.png', alt="" ).m-auto
              h4.text-center Condensador
              .box___card_sinbordes_p
                p.mb-0.text-center Almacena carga. Se especifica por su capacidad (µF, nF) y su tensión máxima.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img9.png', alt="" ).m-auto
              h4.text-center Inductor
              .box___card_sinbordes_p
                p.mb-0.text-center Almacena energía magnética. Se especifica por su inductancia (mH).
      p Las operaciones básicas son las conexiones en serie y en paralelo. En serie, las resistencias se suman (Rt = R1 + R2 + …) y la corriente es la misma en todas; en paralelo, la tensión es la misma y la resistencia equivalente es menor que la menor de ellas (1/Rt = 1/R1 + 1/R2 + …). El divisor de tensión, formado por dos resistencias en serie, permite reducir una tensión a un valor que un controlador pueda leer.
      p.mb-5 El cálculo de ambas conexiones con dos resistencias se presenta a continuación:
      .row.justify-content-center.mb-0
        .col-xl-10
          .box___style_2.fit___box_3(data-aos="zoom-in")
            .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
              h4.mb-0 Ejemplo resuelto
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Circuitos eléctricos con resistencias en serie y en paralelo
            figure(data-aos="zoom-in").mb-3
              img(src='@/assets/curso/temas/t2/img10.png', alt='Diagrama de dos circuitos eléctricos alimentados con 12 V, con resistencias de 10 kΩ y 20 kΩ conectadas en serie y en paralelo. ').m-auto
            p.mb-0 Dos resistencias de 10 kΩ y 20 kΩ en serie, alimentadas con 12 V: Rt = 30 kΩ; I = 12 V / 30 kΩ = 0,4 mA. La tensión sobre la de 10 kΩ es 4 V. Las mismas resistencias en paralelo: Rt = (10 × 20) / (10 + 20) ≈ 6,67 kΩ.
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Componentes activos
      p.mb-5 Los componentes activos controlan el paso de la corriente y pueden amplificar o conmutar señales. Los principales se presentan a continuación (Floyd, 2006):
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diodo
                  p.mb-0 Deja pasar la corriente en un solo sentido y se usa para rectificar y proteger.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 LED
                  p.mb-0 Diodo que emite luz y sirve como indicador.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Transistor
                  p.mb-0 Actúa como amplificador o como interruptor electrónico. Con una pequeña corriente en su base, o una tensión en su compuerta en los MOSFET, controla una corriente mayor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Circuito integrado
                  p.mb-0 Agrupa muchos transistores en un solo encapsulado, como los reguladores de tensión o los amplificadores operacionales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La función y el uso típico de los componentes pasivos y activos en los automatismos se resumen a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 6.
        span Componentes pasivos y activos en los automatismos
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Componente
              th.ajuste-border-tabla.texto-left Tipo
              th.ajuste-border-tabla.texto-left Función
              th.texto-left Uso típico
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Resistor
              td.ajuste-border-tabla.texto-left Pasivo
              td.ajuste-border-tabla.texto-left Limitar corriente, dividir tensión
              td.texto-left Resistencia de 250 Ω en lazo 4–20 mA
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Condensador
              td.ajuste-border-tabla.texto-left Pasivo
              td.ajuste-border-tabla.texto-left Almacenar carga, filtrar
              td.texto-left Filtro de una fuente de 24 V
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Inductor
              td.ajuste-border-tabla.texto-left Pasivo
              td.ajuste-border-tabla.texto-left Almacenar energía magnética
              td.texto-left Bobina de un relé o contactor
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Diodo
              td.ajuste-border-tabla.texto-left Activo
              td.ajuste-border-tabla.texto-left Conducción en un sentido
              td.texto-left Protección de bobinas (diodo de rueda libre)
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Transistor
              td.ajuste-border-tabla.texto-left Activo
              td.ajuste-border-tabla.texto-left Amplificar o conmutar
              td.texto-left Activar un relé desde un microcontrolador
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 2.
            span Organización de la electrotecnia de corriente continua
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t2/img15.png', alt='Diagrama jerárquico sobre electrotecnia de corriente continua (DC), organizado en cuatro categorías: variables eléctricas (tensión, corriente, resistencia y potencia), leyes de Ohm y Watt y conexiones en serie y paralelo, instrumentos de medición y montaje, y componentes pasivos, activos e integrados. ').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
