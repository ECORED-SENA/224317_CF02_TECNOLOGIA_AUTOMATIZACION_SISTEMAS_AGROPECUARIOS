<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Electrotecnia de corriente alterna
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 La energía que llega a fincas, plantas de beneficio y agroindustrias desde la red de distribución es corriente alterna (c.a. o AC). Con ella funcionan motores de bombas, compresores, ventiladores y la mayoría de fuentes que alimentan los tableros de control. Comprender su naturaleza, cómo se mide con instrumentos y cómo se transforma en corriente continua estable es indispensable para instalar automatismos con seguridad.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='' style="max-width: 400px").m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Naturaleza de las variables eléctricas en corriente alterna
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img2.png', alt='' style="width: 500px").m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t3/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 En la corriente alterna, la tensión y la corriente cambian de valor y de sentido periódicamente, siguiendo una forma de onda senoidal. Sus parámetros principales son la frecuencia (ciclos por segundo, en hercios), el periodo (duración de un ciclo), el valor pico (máximo alcanzado) y el valor eficaz o RMS, que es el valor de corriente continua que produciría el mismo calor en una resistencia (Boylestad, 2011). En Colombia la red opera a 60 Hz, de modo que cada ciclo dura unos 16,7 ms.
          p.mb-0 Cuando se dice que un tomacorriente es de 120 V, se habla del valor eficaz; su valor pico es 120 × 1,414 ≈ 170 V. Además, en circuitos con motores y bobinas la corriente se desfasa de la tensión y aparece el factor de potencia, que indica qué parte de la energía se convierte en trabajo útil.
      p.mb-5 Las diferencias principales entre la corriente continua y la alterna en instalaciones agroindustriales se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 7.
        span Comparación entre corriente continua y corriente alterna
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Aspecto
              th.ajuste-border-tabla.texto-left Corriente continua
              th.texto-left Corriente alterna
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Sentido
              td.ajuste-border-tabla.texto-left Constante
              td.texto-left Cambia periódicamente.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Fuentes
              td.ajuste-border-tabla.texto-left Baterías, paneles solares, fuentes
              td.texto-left Red eléctrica, generadores.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Valores típicos
              td.ajuste-border-tabla.texto-left 5, 12 y 24 V
              td.texto-left 120, 208, 220 y 440 V a 60 Hz.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Uso en automatismos
              td.ajuste-border-tabla.texto-left Sensores, controladores, señales
              td.texto-left Motores, bombas, iluminación.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Generador de funciones y osciloscopio
      p.mb-5 Dos equipos permiten trabajar con señales que cambian en el tiempo y se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.color___1.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img4.png', alt="" ).m-auto
              h4 Generador de funciones
              .box___card_sinbordes_p
                p.mb-0 Produce señales eléctricas de forma, frecuencia y amplitud ajustables (senoidal, cuadrada o triangular). Se usa para simular la salida de un sensor o para probar cómo responde un circuito a una señal conocida.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.color___3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img5.png', alt="" ).m-auto
              h4 Osciloscopio
              .box___card_sinbordes_p
                p.mb-0 Representa en pantalla cómo cambia una tensión en el tiempo. El eje vertical corresponde a la tensión (voltios por división) y el horizontal al tiempo (segundos por división). Con él se miden el valor pico, el periodo y la frecuencia, y se detectan ruidos o distorsiones que un multímetro no revela.
      p.mb-5 La lectura de una señal en el osciloscopio se presenta a continuación:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img6.png', alt=''  style="max-width: 400px").m-auto
        .col-xl
          .box___style_2.fit___box_4(data-aos="fade-left")
            .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
              h4.mb-0 Ejemplo resuelto
            p.mb-0 En la pantalla de un osciloscopio, una señal senoidal ocupa 4 divisiones de pico a pico con la escala vertical en 2 V/div, y un ciclo completo ocupa 5 divisiones con la escala horizontal en 2 ms/div. Tensión pico a pico: 4 × 2 V = 8 V (pico de 4 V). Periodo: 5 × 2 ms = 10 ms. Frecuencia: 1 / 0,010 s = 100 Hz.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Fuentes reguladas
      p Una fuente regulada convierte la corriente alterna de la red en corriente continua estable. Las fuentes lineales cumplen cuatro etapas. El transformador reduce la tensión, el rectificador (diodos) la convierte en pulsante de un solo sentido, el filtro (condensadores) suaviza el rizado y el regulador (por ejemplo, un circuito integrado 7805 para 5 V) mantiene la salida constante aunque cambie la carga (Floyd, 2006).
      p.mb-5 En los tableros industriales predominan las fuentes conmutadas de 24 V c.c. montadas en riel DIN, que son más livianas y eficientes porque trabajan a alta frecuencia. Al seleccionarlas se revisan la tensión de entrada, la tensión y corriente de salida y la suma de consumos de todos los equipos conectados, dejando un margen de reserva. Las etapas de una fuente regulada lineal se presentan a continuación:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Transformador
                    p.mb-0 Reduce 120 V c.a. a un valor menor.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img7.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img8.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Rectificador
                    p.mb-0 Diodos convierten la c.a. en pulsante.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Filtro
                    p.mb-0 Condensadores suavizan el rizado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img9.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img10.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Regulador
                    p.mb-0 Mantiene constante la tensión de salida.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Resultado
                    p.mb-0 Tensión continua estable para sensores y controladores.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img11.png', alt='' style="width: 160px").m-auto
          Separador
          #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.4 Dispositivos de potencia
      p.mb-5 Los dispositivos de potencia permiten que una señal pequeña del controlador gobierne cargas grandes. Los principales se presentan a continuación:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img13.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Relé
                  p.mb-0.text-center Interruptor accionado por una bobina.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img14.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Contactor
                  p.mb-0.text-center Relé robusto para el mando de motores.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img15.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Relé de estado sólido (SSR)
                  p.mb-0.text-center Conmuta sin partes móviles, lo que lo hace ideal para resistencias calefactoras.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img16.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text SCR o tiristor
                  p.mb-0.text-center Semiconductor que conduce en un sentido tras recibir un pulso.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img17.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text TRIAC
                  p.mb-0.text-center Semiconductor que conduce en ambos sentidos, útil en corriente alterna.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img18.png' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text MOSFET e IGBT
                  p.mb-0.text-center Semiconductores de conmutación rápida, presentes en los variadores de velocidad.
      p.mb-5 Las aplicaciones de estos dispositivos en procesos agropecuarios se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 8.
        span Dispositivos de potencia y sus aplicaciones
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Dispositivo
              th.ajuste-border-tabla.texto-left Característica
              th.texto-left Aplicación
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Relé electromecánico
              td.ajuste-border-tabla.texto-left Contactos aislados de la bobina
              td.texto-left Encender una electroválvula de riego
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Contactor
              td.ajuste-border-tabla.texto-left Contactos de potencia robustos
              td.texto-left Arranque de motobomba trifásica
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Relé de estado sólido
              td.ajuste-border-tabla.texto-left Sin desgaste mecánico
              td.texto-left Control de calefacción en incubadora
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold TRIAC
              td.ajuste-border-tabla.texto-left Conducción bidireccional
              td.texto-left Regulación de ventiladores monofásicos
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold IGBT / MOSFET
              td.ajuste-border-tabla.texto-left Conmutación rápida
              td.texto-left Variadores de velocidad de motores

</template>

<script>
export default {
  name: 'Tema3',
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
