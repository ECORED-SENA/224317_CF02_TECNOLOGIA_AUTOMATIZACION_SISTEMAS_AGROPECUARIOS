<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 7
        h1 Electricidad y cableado en instalaciones de automatismos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 La instalación física de un automatismo depende de una buena práctica eléctrica, con circuitos bien dimensionados, conductores protegidos, polaridad correcta, puesta a tierra efectiva y un cableado ordenado e identificado. En Colombia, estas prácticas están reguladas por el Reglamento Técnico de Instalaciones Eléctricas (RETIE), cuyo objetivo es proteger la vida, la salud y el ambiente frente a los riesgos de origen eléctrico (Ministerio de Minas y Energía, 2024).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t7/img1.png', alt='' style="max-width: 400px").m-auto
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.1 Circuitos, variables y equipos de prueba eléctricos
      p.mb-5 Un circuito eléctrico es un camino cerrado formado por una fuente, conductores, elementos de control y protección, y una carga. En las instalaciones se verifican tensión, corriente, continuidad, resistencia de aislamiento y resistencia de puesta a tierra, con los equipos que se presentan a continuación:
      .bg___slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Multímetro y pinza amperimétrica
                  p.mb-0 Miden tensión, corriente, resistencia y continuidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Detector de tensión sin contacto
                  p.mb-0 Indica la presencia de tensión antes de intervenir un circuito.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Megóhmetro
                  p.mb-0 Mide la resistencia de aislamiento con tensiones de prueba de 500 o 1.000 V.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Telurómetro
                  p.mb-0 Mide la resistencia de la puesta a tierra.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img5.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.2 Ductos eléctricos y polaridad
      p.mb-5 Los ductos o canalizaciones protegen los conductores contra daños mecánicos, humedad y agentes químicos. Los tipos más usados se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t7/img6.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Tubería conduit
              p.mb-0.text-center Metálica (EMT, IMC) o de PVC, para rutas fijas y protegidas.
        .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t7/img7.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Bandejas portacables
              p.mb-0.text-center Soportan grandes cantidades de cables en rutas abiertas.
        .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t7/img8.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Canaletas
              p.mb-0.text-center Organizan los conductores dentro de tableros y sobre muros.
        .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t7/img9.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Ductos flexibles
              p.mb-0.text-center Permiten la conexión final a motores e instrumentos.
      p En ambientes húmedos o con lavado a presión, como las salas de ordeño, se prefieren materiales resistentes a la corrosión y prensaestopas que mantengan el grado de protección.
      p.mb-5 La polaridad es la identificación correcta de los conductores. En corriente continua implica respetar el positivo y el negativo, y en corriente alterna, distinguir fase, neutro y tierra. Una polaridad invertida puede dañar equipos electrónicos o dejar energizadas partes que deberían estar desconectadas. La identificación usual de los conductores en Colombia se presenta a continuación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 16.
            span Código de colores de conductores en baja tensión
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Conductor
                  th.texto-left Color de identificación
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Neutro
                  td.texto-left Blanco o gris natural
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Tierra de protección
                  td.texto-left Verde o verde con franjas amarillas; también desnudo
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fases en sistema 208/120 V
                  td.texto-left Amarillo, azul y rojo
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Positivo en c.c. de control
                  td.texto-left Rojo (práctica común de fabricantes)
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Negativo en c.c. de control
                  td.texto-left Negro o azul (práctica común de fabricantes)
      p.mb-0 Esta identificación debe verificarse siempre con la tabla vigente del RETIE.
      Separador
      #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.3 Blindaje y conexión a tierra
      p.mb-5 La protección de las personas y de las señales depende de dos elementos, que se presentan a continuación:
      TabsA.color-acento-botones.mb-0(data-aos="zoom-in")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Sistema de puesta a tierra")
          .row.align-items-center
            .col-lg.order-2.mb-4.mb-lg-0
              h4 Sistema de puesta a tierra
              p.mb-0 Conecta las partes metálicas de la instalación con el suelo mediante electrodos, para que una falla de aislamiento no deje tensiones peligrosas en carcasas y tableros y para que actúen las protecciones (Ministerio de Minas y Energía, 2024).
        .tarjeta.color-acento-botones--borde.p-4(titulo="Blindaje o pantalla")
          .row.align-items-center
            .col-lg.order-2.mb-4.mb-lg-0
              h4 Blindaje o pantalla
              p.mb-0 Malla o lámina metálica que rodea los conductores de señal para protegerlos de interferencias electromagnéticas producidas por motores y variadores. Como práctica general, se conecta a tierra en un solo extremo, normalmente en el tablero, para evitar corrientes que circulen por la pantalla.
      Separador
      #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.4 Terminación de conductores y elementos de protección
      p La terminación de un conductor asegura una conexión firme y duradera. En cables multifilares se usan terminales tipo puntera (ferrule), de ojo o de horquilla, prensados con la herramienta adecuada, y en borneras de tornillo se aplica el torque indicado por el fabricante. Una terminación floja genera calentamiento, falsos contactos y fallas intermitentes difíciles de diagnosticar.
      p.mb-5 Los elementos de protección interrumpen el circuito ante condiciones anormales. El riesgo que controla cada uno y su ubicación típica se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 17.
        span Elementos de protección eléctrica
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Elemento
              th.ajuste-border-tabla.texto-left Protege contra
              th.texto-left Ubicación típica
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Interruptor termomagnético
              td.ajuste-border-tabla.texto-left Sobrecarga y cortocircuito
              td.texto-left Entrada del tablero y circuitos ramales
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Fusible
              td.ajuste-border-tabla.texto-left Sobrecorriente
              td.texto-left Circuitos de control y fuentes
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Guardamotor o relé térmico
              td.ajuste-border-tabla.texto-left Sobrecarga del motor
              td.texto-left Arrancador de la motobomba
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Interruptor diferencial
              td.ajuste-border-tabla.texto-left Fugas a tierra
              td.texto-left Circuitos en zonas húmedas
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold DPS
              td.ajuste-border-tabla.texto-left Sobretensiones y rayos
              td.texto-left Acometida y entrada de señales
      p.mb-0 El DPS (dispositivo de protección contra sobretensiones) es muy relevante en zonas rurales con alta actividad eléctrica atmosférica, y el interruptor diferencial protege a las personas contra corrientes de fuga que pueden causar electrocución.
      Separador
      #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.5 Reglamento eléctrico
      p.mb-0 El RETIE, expedido por el Ministerio de Minas y Energía y actualizado mediante la Resolución 40117 de 2024, establece los requisitos que deben cumplir las instalaciones eléctricas y los productos usados en ellas en Colombia (Ministerio de Minas y Energía, 2024). Entre otros aspectos, fija requisitos de puesta a tierra, distancias de seguridad, identificación de conductores, señalización de riesgo eléctrico y certificación de conformidad. Su cumplimiento es obligatorio en instalaciones nuevas, ampliaciones y remodelaciones, y su referente técnico para el diseño es la NTC 2050 (Código Eléctrico Colombiano).
      Separador
      #t_7_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.6 Cableado: tipos de cables, tendido, conexionado y marquillado
      p.mb-5 El cableado es el conjunto de conductores que transportan energía y señales. Los tipos de cables se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t7/img10.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Cables de potencia
              p.mb-0.text-center Alimentan motores y cargas.
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t7/img11.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Cables de control
              p.mb-0.text-center Llevan órdenes a bobinas y señalizaciones.
        .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t7/img12.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Cables de instrumentación
              p.mb-0.text-center Conducen señales de bajo nivel, normalmente en par trenzado y apantallado.
      p El tendido debe separar los cables de potencia de los de señal, respetar los radios de curvatura, evitar tensiones mecánicas y dejar holgura en las terminaciones. El marquillado y etiquetado identifica cada conductor en sus dos extremos con el mismo código que figura en el plano, por ejemplo, el número de borne o el tag del instrumento. Un tablero bien marquillado reduce el tiempo de diagnóstico y es un requisito para entregar planos #[i as-built] confiables.
      p.mb-5 La secuencia de una instalación eléctrica segura se presenta a continuación:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Canalización
                    p.mb-0 Elegir ducto según ambiente y protección.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img13.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img14.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Tendido
                    p.mb-0 Separar potencia, control e instrumentación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Terminación y marquillado
                    p.mb-0 Terminales prensados e identificación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img15.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img16.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Protección y tierra
                    p.mb-0 Protecciones, DPS y puesta a tierra.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Verificación
                    p.mb-0 Continuidad, aislamiento y polaridad.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img17.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img18.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Resultado
                    p.mb-0 Instalación eléctrica segura y conforme al RETIE.

</template>

<script>
export default {
  name: 'Tema7',
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
