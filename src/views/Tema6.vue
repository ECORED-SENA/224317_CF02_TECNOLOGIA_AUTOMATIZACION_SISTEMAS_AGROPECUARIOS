<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 6
        h1 Procesos industriales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 Un automatismo siempre está al servicio de un proceso, como secar café, pasteurizar leche, clasificar frutas, bombear agua o fabricar una pieza. Para instalar instrumentos de manera acertada es necesario comprender qué es un proceso industrial, cómo se clasifica, qué condiciones y límites tiene y cuáles son los procesos de fabricación con los que se elaboran soportes, piezas y accesorios de montaje.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img1.png', alt='' style="max-width: 400px").m-auto
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Concepto y clasificación de los procesos industriales
      p.mb-5 Un proceso industrial es el conjunto de operaciones que transforman materias primas en productos con mayor valor, mediante el uso de energía, equipos y personas. Según la forma en que fluye el producto, los procesos se clasifican como se presenta a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 14.
        span Clasificación de los procesos industriales
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Tipo
              th.ajuste-border-tabla.texto-left Característica
              th.texto-left Ejemplo agroindustrial
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Continuo
              td.ajuste-border-tabla.texto-left Flujo permanente, variables estables
              td.texto-left Pasteurización de leche en línea
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Por lotes
              td.ajuste-border-tabla.texto-left Ciclos con inicio y fin definidos
              td.texto-left Fermentación y secado de café
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Discreto
              td.ajuste-border-tabla.texto-left Unidades individuales contables
              td.texto-left Clasificación y empaque de aguacate
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Híbrido
              td.ajuste-border-tabla.texto-left Combina fases continuas y por lotes
              td.texto-left Planta de alimentos balanceados
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Infraestructura, riesgos y restricciones
      p.mb-5 Todo proceso requiere una infraestructura, formada por edificaciones, redes eléctricas, de agua, aire comprimido y vapor, tuberías, soportes y espacios para operación y mantenimiento. Esa infraestructura trae riesgos y restricciones que condicionan la instalación, como se presenta a continuación:
      .row.justify-content-center.mb-0
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.color___1.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img2.png', alt="" ).m-auto
              h4 Riesgos
              .box___card_sinbordes_p
                p.mb-0 Eléctricos, mecánicos (partes en movimiento), térmicos (superficies calientes), químicos (agroquímicos, ácidos de limpieza), por humedad y polvo, e incluso atmósferas explosivas en silos de granos.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.color___3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img3.png', alt="" ).m-auto
              h4 Restricciones
              .box___card_sinbordes_p
                p.mb-0 Límites que impone el entorno, como el espacio disponible, el grado de protección IP requerido, la temperatura ambiente, el acceso para mantenimiento y los requisitos sanitarios en plantas de alimentos.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Condiciones de producción, parámetros técnicos y límites de variación
      p.mb-5 Las condiciones de producción describen cómo debe operar el proceso para obtener un producto de calidad. Se expresan mediante dos elementos, que se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img4.png', alt="" style="max-width: 120px").m-auto
              h4.text-center Parámetros técnicos
              p.mb-0.text-center Valores objetivo de las variables, por ejemplo, 72 °C durante 15 segundos en la pasteurización rápida de leche.
        .col-xl-6.col-md-9(data-aos="zoom-in")
          .card___icon.h-100.color___3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img5.png', alt="" style="max-width: 120px").m-auto
              h4.text-center Límites de variación
              p.mb-0.text-center Tolerancias aceptables alrededor de cada valor. Cuando una variable sale de sus límites, el producto puede perder calidad o inocuidad, y el sistema de control debe corregir o alarmar.
      p.mb-5 Los manuales técnicos del fabricante y la normativa sanitaria o técnica aplicable definen muchos de esos parámetros. El instrumento seleccionado debe tener un rango que cubra con holgura los límites del proceso y una exactitud acorde con la tolerancia exigida, como se presenta a continuación:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t6/img6.png', alt=''  style="max-width: 400px").m-auto
        .col-xl
          .box___style_2.fit___box_6(data-aos="fade-left")
            .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
              h4.mb-0 Ejemplo resuelto
            p.mb-0 En un secador de café, la temperatura del aire se fija en 50 °C con un límite de ±5 °C. Un termómetro con rango de 0 a 100 °C y exactitud de ±0,5 °C es adecuado: su error es diez veces menor que la tolerancia. Uno de 0 a 400 °C con exactitud de ±4 °C no lo es, porque su error casi iguala el límite permitido.
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Procesos de fabricación por arranque de material
      p.mb-5 Los soportes, bridas, acoples y piezas de montaje de los instrumentos se fabrican con procesos de manufactura. En los procesos por arranque de material una herramienta de corte retira material en forma de viruta (Kalpakjian y Schmid, 2014). Los principales se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img7.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Torneado
              p.mb-0.text-center Hace girar la pieza contra una herramienta fija para producir formas cilíndricas y roscas.
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img8.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Fresado
              p.mb-0.text-center Usa una herramienta giratoria de varios filos para obtener superficies planas, ranuras y engranajes.
        .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img9.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Taladrado
              p.mb-0.text-center Produce agujeros.
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img10.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Cepillado
              p.mb-0.text-center Genera superficies planas con movimiento alternativo.
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img11.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Rectificado
              p.mb-0.text-center Usa una muela abrasiva para lograr acabados finos y tolerancias estrechas.
        .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img12.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Electroerosión
              p.mb-0.text-center Remueve material mediante descargas eléctricas, útil en metales muy duros.
      Separador
      #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.5 Procesos de fabricación por conformado
      p.mb-5 En los procesos por conformado el material se deforma plásticamente sin retirar viruta (Kalpakjian y Schmid, 2014). Los principales se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Laminado
                  p.mb-0 Reduce el espesor de una lámina o barra al pasarla entre rodillos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Forjado
                  p.mb-0 Da forma a una pieza caliente mediante golpes o presión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Troquelado
                  p.mb-0 Corta o perfora láminas con un punzón y una matriz, como en la fabricación de gabinetes y soportes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Extrusión
                  p.mb-0 Empuja el material a través de un dado para obtener perfiles, como los rieles DIN o las canaletas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trefilado
                  p.mb-0 Estira el material a través de una hilera para obtener alambres, como el cobre de los conductores eléctricos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img17.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Los productos relacionados con la instrumentación que se fabrican con cada proceso se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 15.
        span Procesos de fabricación y productos relacionados con la instrumentación
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Proceso
              th.ajuste-border-tabla.texto-left Tipo
              th.texto-left Producto relacionado
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Torneado
              td.ajuste-border-tabla.texto-left Arranque
              td.texto-left Termopozos, niples y acoples roscados
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Fresado
              td.ajuste-border-tabla.texto-left Arranque
              td.texto-left Placas de montaje y ranuras de soportes
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Rectificado
              td.ajuste-border-tabla.texto-left Arranque
              td.texto-left Ejes y asientos de válvulas
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Troquelado
              td.ajuste-border-tabla.texto-left Conformado
              td.texto-left Gabinetes, soportes y bandejas portacables
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold 
              td.ajuste-border-tabla.texto-left Conformado
              td.texto-left Rieles DIN, canaletas y perfiles de aluminio
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold 
              td.ajuste-border-tabla.texto-left Conformado
              td.texto-left Alambre de cobre para conductores
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 3.
            span Clasificación de los procesos industriales y de fabricación
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t6/img18.png', alt='Diagrama jerárquico sobre procesos industriales, organizado en cuatro categorías: tipos de proceso (continuo, por lotes y discreto), condiciones de operación (parámetros, límites y riesgos), procesos por arranque de material (torneado, fresado, taladrado y rectificado) y procesos de conformado (laminado, forjado, extrusión y trefilado). ').m-auto
      p.mb-0 Esta figura presenta la organización de los conceptos de procesos industriales.

</template>

<script>
export default {
  name: 'Tema6',
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
