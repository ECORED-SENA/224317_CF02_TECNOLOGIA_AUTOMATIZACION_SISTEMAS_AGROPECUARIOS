<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Dibujo técnico y normativa de planos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 Antes de instalar un instrumento es necesario saber dónde va, cómo se conecta al proceso y cómo se cablea. Esa información se comunica mediante planos. El dibujo técnico es un lenguaje gráfico normalizado que permite que el diseñador, el instalador y el encargado del mantenimiento entiendan lo mismo, aunque trabajen en distintos momentos y lugares.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.png', alt='' style="max-width: 400px").m-auto
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Características del dibujo técnico
      p.mb-5 El dibujo técnico tiene cuatro características, que se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img2.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Preciso
              p.mb-0.text-center Representa formas y dimensiones reales a escala.
        .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img3.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Normalizado
              p.mb-0.text-center Sigue reglas de líneas, símbolos, formatos y rotulado.
        .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img4.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Universal
              p.mb-0.text-center Se interpreta igual en cualquier país que aplique la misma norma.
        .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img5.png', alt="" style="max-width: 100px").m-auto
              h4.text-center Completo
              p.mb-0.text-center Incluye la información necesaria para fabricar, instalar o mantener.
      p.mb-0 Todo plano tiene un rótulo o cuadro de títulos con el nombre del proyecto, el número del plano, la escala, la fecha, la revisión y los responsables.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Normas ISO-A, ISO-E y ANSI: formatos y doblado de planos
      p.mb-5 Existen dos métodos de proyección para representar las proyecciones de un objeto, que se comparan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img6.png", alt="" style="width: 450px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Método europeo o ISO-E").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al primer diedro y ubica la planta (proyección superior) debajo del alzado (proyección frontal).
            .row(titulo="Método americano o ISO-A").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al tercer diedro, propio también de las normas ANSI, y ubica la planta (proyección superior) encima del alzado (proyección frontal).
            .row(titulo="Símbolo del método").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un cono truncado indica el método empleado y debe aparecer en el rótulo para evitar interpretaciones erróneas.
      p.mb-5 Los formatos de papel también están normalizados. La serie ISO A parte del A0, de un metro cuadrado de área, y cada formato siguiente es la mitad del anterior, mientras que la norma ANSI usa formatos en pulgadas designados con letras. Las dimensiones de los formatos más usados se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 11.
        span Formatos normalizados ISO y ANSI
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Formato ISO
              th.ajuste-border-tabla.texto-left Dimensiones (mm)
              th.ajuste-border-tabla.texto-left Formato ANSI
              th.texto-left Dimensiones (in)
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold A4
              td.ajuste-border-tabla.texto-left 210 × 297
              td.ajuste-border-tabla.texto-left A
              td.texto-left 8,5 × 11
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold A3
              td.ajuste-border-tabla.texto-left 297 × 420
              td.ajuste-border-tabla.texto-left B
              td.texto-left 11 × 17
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold A2
              td.ajuste-border-tabla.texto-left 420 × 594
              td.ajuste-border-tabla.texto-left C
              td.texto-left 17 × 22
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold A1
              td.ajuste-border-tabla.texto-left 594 × 841
              td.ajuste-border-tabla.texto-left D
              td.texto-left 22 × 34
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold A0
              td.ajuste-border-tabla.texto-left 841 × 1189
              td.ajuste-border-tabla.texto-left E
              td.texto-left 34 × 44
      p.mb-0 Los planos grandes se doblan hasta el tamaño A4, o carta en ANSI, dejando el rótulo en la cara exterior para archivarlos y consultarlos sin desplegarlos por completo. En los planos también se representan de forma simplificada los elementos de máquinas normalizados, como tornillos, tuercas, rodamientos, chavetas y resortes, mediante símbolos y designaciones acordadas por las normas.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Simbología estandarizada y diagramas de instrumentos y tuberías
      p.mb-5 El diagrama de tuberías e instrumentación (P&ID) representa las tuberías, equipos, instrumentos y lazos de control de un proceso. Sus símbolos siguen la norma ANSI/ISA-5.1, que define la forma de las burbujas o círculos de los instrumentos, las líneas de señal y las letras de identificación (International Society of Automation [ISA], 2024). Un círculo simple indica un instrumento montado en campo, y un círculo con una línea horizontal, uno montado en el panel principal. Los tipos de líneas que conectan los instrumentos se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 12.
        span Líneas de señal en diagramas P&ID
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Representación
              th.ajuste-border-tabla.texto-left Significado
              th.texto-left Ejemplo
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Línea continua gruesa
              td.ajuste-border-tabla.texto-left Tubería de proceso
              td.texto-left Línea de agua de riego
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Línea discontinua
              td.ajuste-border-tabla.texto-left Señal eléctrica
              td.texto-left Salida 4–20 mA de un transmisor
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Línea con barras oblicuas dobles
              td.ajuste-border-tabla.texto-left Señal neumática
              td.texto-left Aire a una válvula de control
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Línea con círculos pequeños
              td.ajuste-border-tabla.texto-left Enlace de #[i software] o datos
              td.texto-left Comunicación entre controladores
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Diagramas de proceso, de localización y tipos de montaje
      p.mb-5 Además del P&ID, la documentación de una instalación incluye otros diagramas, que se presentan a continuación:
      .bg___slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de proceso o de flujo
                  p.mb-0 Presenta de manera simplificada la secuencia de operaciones y equipos principales, sin detallar instrumentos. Es la primera lectura para entender una planta de beneficio de café o una línea de pasteurización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de localización o plano de planta
                  p.mb-0 Indica la ubicación física de equipos, instrumentos, tableros y rutas de cableado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagramas de montaje (#[i hook-up])
                  p.mb-0 Indican cómo se fija cada instrumento, sobre tubería, en pared, en soporte de tubo de 2 pulgadas o en panel, con sus válvulas, accesorios y materiales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img9.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Diagramas eléctricos, mecánicos, electroneumáticos y electrohidráulicos
      p.mb-5 Los planos de un automatismo también describen su parte eléctrica y mecánica, como se presenta a continuación:
      TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Diagramas eléctricos")
          .row.align-items-center
            .col-lg.order-2.mb-4.mb-lg-0
              h4 Diagramas eléctricos
              p.mb-0 Se dividen en unifilares (una línea representa varias fases, útiles para la distribución de energía), de potencia (alimentación de motores) y de control o mando (lógica de encendido).
        .tarjeta.color-acento-botones--borde.p-4(titulo="Planos mecánicos")
          .row.align-items-center
            .col-lg.order-2.mb-4.mb-lg-0
              h4 Planos mecánicos
              p.mb-0 Representan piezas, conjuntos y soportes con sus proyecciones y cotas.
        .tarjeta.color-acento-botones--borde.p-4(titulo="Diagramas electroneumáticos y electrohidráulicos")
          .row.align-items-center
            .col-lg.order-2.mb-4.mb-lg-0
              h4 Diagramas electroneumáticos y electrohidráulicos
              p.mb-0 Combinan en dos partes el circuito de fluido (válvulas, cilindros) y el circuito eléctrico que acciona las electroválvulas, identificando cada elemento con la misma designación en ambos.
      p.mb-5 La información que contiene cada diagrama y su utilidad en la instalación se resumen a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 13.
        span Tipos de diagramas en la documentación de un automatismo
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Diagrama
              th.ajuste-border-tabla.texto-left Información que contiene
              th.texto-left Utilidad en la instalación
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold P&ID
              td.ajuste-border-tabla.texto-left Tuberías, instrumentos y lazos
              td.texto-left Ubicar instrumentos en el proceso
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Localización
              td.ajuste-border-tabla.texto-left Posición física en planta
              td.texto-left Trazar rutas de cable y soportes
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Montaje (#[i hook-up])
              td.ajuste-border-tabla.texto-left Fijación y accesorios
              td.texto-left Instalar cada instrumento
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Eléctrico de control
              td.ajuste-border-tabla.texto-left Lógica de mando y protecciones
              td.texto-left Cablear el tablero
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Electroneumático
              td.ajuste-border-tabla.texto-left Válvulas, cilindros y bobinas
              td.texto-left Conectar actuadores neumáticos
      Separador
      #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.6 Planos #[i as-built], interpretación de planos y manuales técnicos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_5(data-aos="fade-right")
            p.mb-0 Los planos #[i as-built] o “según construido” registran cómo quedó realmente la instalación, con los cambios hechos en obra respecto al diseño original. Son la referencia para el mantenimiento y las ampliaciones, y un plano desactualizado conduce a errores y riesgos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img10.png', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t5/img11.svg', alt='' style="width: 70px")
          p.mb-0 Interpretar un plano exige un orden. Se lee el rótulo y la revisión, se identifican la escala y el método de proyección, se revisa la leyenda de símbolos, se sigue el recorrido del proceso o de la señal y se contrasta con el manual del fabricante. Los manuales técnicos complementan los planos con datos de conexión, dimensiones, torques de apriete y condiciones de operación.
      p.mb-5 La ruta de interpretación de un plano técnico se presenta a continuación:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Leer el rótulo
                    p.mb-0 Proyecto, número de plano y revisión vigente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img12.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img13.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Escala y proyección
                    p.mb-0 Identificar método ISO-E o ISO-A.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Revisar la leyenda
                    p.mb-0 Reconocer símbolos y abreviaturas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img14.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img15.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Seguir el recorrido
                    p.mb-0 Rastrear proceso, señal o circuito.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Contrastar
                    p.mb-0 Verificar con manuales y planos #[i as-built].
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img16.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img17.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Resultado
                    p.mb-0 Comprensión completa del plano antes de instalar.

</template>

<script>
export default {
  name: 'Tema5',
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
