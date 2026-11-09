<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre los fundamentos para instalar instrumentación y automatismos, organizado en seis áreas: medición técnica, bases eléctricas, instalación segura, control automático, accionamiento y conectividad, que integran sistemas de unidades, instrumentación, electricidad, electrónica, normativa, procesos industriales, sistemas de control, neumática, hidráulica y comunicación industrial. ")
        .col-auto
          a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
