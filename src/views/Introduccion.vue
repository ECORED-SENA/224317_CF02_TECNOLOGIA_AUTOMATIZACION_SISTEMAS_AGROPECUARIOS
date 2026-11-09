<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="fade-right")
            p.mb-0 Un sistema de riego que se enciende cuando el suelo está seco, un cuarto frío que conserva la temperatura de las flores de exportación o una incubadora que mantiene 38 °C sin vigilancia permanente tienen algo en común. Detrás de cada uno hay instrumentos que miden, controladores que deciden y actuadores que ejecutan. Para que esos automatismos funcionen de manera segura y confiable, quien los instala necesita comprender los principios eléctricos, electrónicos, mecánicos y de control que los hacen posibles.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='' style="max-width: 400px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p Este componente reúne los conceptos y principios que sustentan la instalación de instrumentación industrial en procesos agropecuarios y agroindustriales. Recorre los sistemas de unidades, la electrotecnia de corriente continua y alterna, la electrónica digital, el dibujo técnico y su normativa, los procesos industriales, la electricidad y el cableado según el RETIE, los automatismos y la teoría de control, la instrumentación y los equipos de prueba, la neumática e hidráulica y, finalmente, los algoritmos, protocolos de comunicación e internet de las cosas.
          br
          br
          p Dominar estos fundamentos permite leer planos y hojas de datos, alistar herramientas e instrumentos, reconocer qué hace cada elemento de un tablero, interpretar una señal de 4–20 mA o comprender por qué un lazo de control corrige una desviación. Son saberes que se aplican a diario en fincas, invernaderos, plantas de beneficio, salas de ordeño y agroindustrias de todas las regiones del país. Además, sirven de base para diagnosticar fallas, comunicarse con técnicos y proveedores con un lenguaje preciso y tomar decisiones seguras frente a los riesgos eléctricos y mecánicos presentes en cualquier instalación.
      p.mb-0 El texto está pensado para el estudio autónomo, sin necesidad de un instructor al lado. Cada término técnico se explica al aparecer y cada tema avanza de lo simple a lo complejo. Se incluyen tablas de síntesis, ejemplos resueltos con cifras del contexto colombiano, recuadros para reflexionar y recursos interactivos por tema. En un documento complementario se reúne una selección de videos y herramientas gratuitas de apoyo, como simuladores de circuitos en línea, que permiten reforzar los conceptos desde un computador sin necesidad de un laboratorio ni de equipos especializados.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
