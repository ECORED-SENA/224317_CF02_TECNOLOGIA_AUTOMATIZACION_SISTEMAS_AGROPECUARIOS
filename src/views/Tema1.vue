<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Sistemas de unidades
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right")
            p.mb-0 Instalar un instrumento exige medir, comparar y registrar valores, como la presión de una línea de riego, la temperatura de un cuarto frío, el voltaje de una fuente o el caudal de una bomba. Si esas cantidades no se expresan en unidades claras y comunes, los datos del fabricante, los planos y las lecturas en campo no coinciden. Por eso el estudio de la instalación de automatismos comienza con los sistemas de unidades, que son el idioma común de la medición técnica.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='' style="max-width: 400px").m-auto
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto de magnitud, unidad y sistema de unidades
      p.mb-5 Para expresar correctamente cualquier medida es necesario distinguir tres conceptos, que se presentan a continuación (Instituto Nacional de Metrología [INM], 2025):
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img2.png', alt="" ).m-auto
              h4.text-center Magnitud
              .box___card_sinbordes_p
                p.mb-0.text-center Propiedad de un cuerpo, fenómeno o sustancia que se puede medir y expresar con un número, como la longitud, la masa, la temperatura o la corriente eléctrica.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img3.png', alt="" ).m-auto
              h4.text-center Unidad
              .box___card_sinbordes_p
                p.mb-0.text-center Cantidad de referencia, definida por convenio, con la que se compara una magnitud. Decir que un tanque tiene 2 m de altura significa que su altura equivale a dos veces el metro.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img4.png', alt="" ).m-auto
              h4.text-center Sistema de unidades
              .box___card_sinbordes_p
                p.mb-0.text-center Conjunto ordenado de unidades básicas y derivadas, con reglas para nombrarlas y escribirlas.
      p.mb-0 Toda medida completa tiene tres partes, que son el valor numérico, la unidad y, cuando se requiere precisión, la incertidumbre. La lectura “3,5” en la pantalla de un transmisor no dice nada si no se sabe si son bar, psi o kilopascales. En un invernadero de flores de la sabana de Bogotá, confundir 3,5 bar con 3,5 psi en la presión de nebulización significa trabajar con una presión casi quince veces menor que la requerida.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Tipos de sistemas de unidades
      p.mb-5 A lo largo de la historia se han usado distintos sistemas. El Sistema Internacional de Unidades (SI) es el sistema oficial en Colombia y el que emplean la metrología legal, los reglamentos técnicos y la mayoría de los fabricantes. Sin embargo, en campo todavía aparecen equipos, tuberías y manómetros con unidades del sistema inglés, sobre todo en maquinaria importada de Estados Unidos. Los sistemas más frecuentes y dónde se encuentran se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 1.
        span Sistemas de unidades presentes en la instrumentación
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Sistema
              th.ajuste-border-tabla.texto-left Unidades características
              th.texto-left Dónde aparece
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Internacional (SI)
              td.ajuste-border-tabla.texto-left metro, kilogramo, segundo, amperio, kelvin, mol, candela
              td.texto-left Normas, reglamentos, fichas técnicas modernas
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Cegesimal (CGS)
              td.ajuste-border-tabla.texto-left centímetro, gramo, segundo
              td.texto-left Laboratorios y textos científicos antiguos
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Inglés o imperial
              td.ajuste-border-tabla.texto-left pulgada, pie, libra, galón, °F
              td.texto-left Roscas NPT, tuberías, manómetros en psi
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Técnico o gravitacional
              td.ajuste-border-tabla.texto-left kilogramo-fuerza (kgf), kgf/cm²
              td.texto-left Manómetros y compresores antiguos
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Magnitudes básicas, derivadas y simbología
      p.mb-5 El SI se construye sobre siete magnitudes básicas, y todas las demás se obtienen combinándolas y se llaman derivadas. Desde 2019, las siete unidades básicas se definen a partir de constantes de la naturaleza, lo que garantiza que un metro o un amperio sean iguales en cualquier laboratorio del mundo (INM, 2025). La simbología del SI tiene reglas precisas, que se presentan a continuación:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Letra recta
                  p.mb-0.text-center Los símbolos se escriben en letra recta, nunca en cursiva.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Sin punto ni plural
                  p.mb-0.text-center Los símbolos no llevan punto final ni se pluralizan. Se escribe 5 m y no 5 m. o 5 ms.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Espacio entre número y símbolo
                  p.mb-0.text-center Se deja un espacio entre el número y el símbolo, como en 25 °C, 220 V o 4 mA.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mayúsculas y minúsculas
                  p.mb-0.text-center Cambian el significado del símbolo. “mA” es miliamperio y “MA” sería mega amperio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Separador decimal
                  p.mb-0.text-center En Colombia el separador decimal es la coma, como en 3,5 bar.
      p.mb-5 Las magnitudes de uso frecuente en los automatismos, con su unidad, su símbolo y un ejemplo del contexto agroindustrial, se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 2.
        span Magnitudes de uso frecuente en automatismos
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Magnitud
              th.ajuste-border-tabla.texto-left Unidad SI
              th.ajuste-border-tabla.texto-left Símbolo
              th.texto-left Ejemplo de aplicación
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Longitud (básica)
              td.ajuste-border-tabla.texto-left Metro
              td.ajuste-border-tabla.texto-left m
              td.texto-left Distancia de tendido de un cable.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Masa (básica)
              td.ajuste-border-tabla.texto-left Kilogramo
              td.ajuste-border-tabla.texto-left kg
              td.texto-left Pesaje de bultos de café.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Tiempo (básica)
              td.ajuste-border-tabla.texto-left Segundo
              td.ajuste-border-tabla.texto-left s
              td.texto-left Temporizado de un riego.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Corriente eléctrica (básica)
              td.ajuste-border-tabla.texto-left Amperio
              td.ajuste-border-tabla.texto-left A
              td.texto-left Consumo de un motor de bomba.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura (básica)
              td.ajuste-border-tabla.texto-left Kelvin
              td.ajuste-border-tabla.texto-left K (se usa también °C)
              td.texto-left Control de un cuarto frío.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Presión (derivada)
              td.ajuste-border-tabla.texto-left Pascal
              td.ajuste-border-tabla.texto-left Pa
              td.texto-left Presión en línea de riego (kPa).
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Potencia (derivada)
              td.ajuste-border-tabla.texto-left Vatio
              td.ajuste-border-tabla.texto-left W
              td.texto-left Potencia de un ventilador.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Tensión eléctrica (derivada)
              td.ajuste-border-tabla.texto-left Voltio
              td.ajuste-border-tabla.texto-left V
              td.texto-left Alimentación de 24 V de un sensor.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Prefijos, factores y tablas de conversión
      p Los prefijos del SI permiten expresar valores muy grandes o muy pequeños sin escribir muchos ceros. Kilo (k) multiplica por mil, mega (M) por un millón, mili (m) divide entre mil y micro (µ) entre un millón. Convertir entre múltiplos y submúltiplos consiste en correr la coma decimal tres posiciones por cada escalón de mil.
      p.mb-5 Para pasar de un sistema a otro se usan factores de conversión, que son cocientes iguales a uno. Como 1 in = 25,4 mm, multiplicar por (25,4 mm / 1 in) cambia la unidad sin cambiar la cantidad. Las equivalencias útiles para interpretar placas, manuales y manómetros se presentan a continuación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Factores de conversión de uso común en campo
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Magnitud
                  th.ajuste-border-tabla.texto-left Equivalencia
                  th.texto-left Uso típico
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Presión
                  td.ajuste-border-tabla.texto-left 1 bar = 100 kPa ≈ 14,5 psi
                  td.texto-left Manómetros de riego y compresores
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Longitud
                  td.ajuste-border-tabla.texto-left 1 in = 25,4 mm
                  td.texto-left Diámetro de tuberías y roscas
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Potencia
                  td.ajuste-border-tabla.texto-left 1 hp ≈ 745,7 W
                  td.texto-left Placa de motores de bombas
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Volumen
                  td.ajuste-border-tabla.texto-left 1 galón (EE. UU.) ≈ 3,785 L
                  td.texto-left Tanques de fumigación
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura
                  td.ajuste-border-tabla.texto-left °F = (°C × 1,8) + 32
                  td.texto-left Termómetros importados
      p.mb-5 La aplicación de estas equivalencias en una instalación de riego se presenta a continuación:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img11.png', alt=''  style="max-width: 400px").m-auto
        .col-xl
          .box___style_2.fit___box_2(data-aos="fade-left")
            .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
              h4.mb-0 Ejemplo resuelto
            p.mb-0 Un manómetro importado marca 45 psi en la línea de un sistema de riego por goteo y el manual del gotero indica trabajar entre 1,0 y 3,5 bar. Para comparar: 45 psi ÷ 14,5 psi/bar ≈ 3,1 bar. La presión está dentro del rango recomendado. Si la motobomba tiene una placa de 2 hp, su potencia equivale a 2 × 745,7 W ≈ 1.491 W, es decir, cerca de 1,5 kW.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Aplicaciones de los sistemas de unidades en la automatización
      p.mb-5 En un automatismo, las unidades aparecen en todas partes. Leerlas bien evita seleccionar un instrumento con un rango inadecuado o conectar un equipo a una tensión que lo destruye. Los datos con unidades más frecuentes en un tablero se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Rango del transmisor
                  p.mb-0 Valores que puede medir el instrumento, por ejemplo, de 0 a 10 bar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Señal de salida
                  p.mb-0 Señal normalizada que entrega el transmisor, por ejemplo, de 4 a 20 mA.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tensión de alimentación
                  p.mb-0 Tensión con la que funciona el equipo, por ejemplo, 24 V c.c.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Corriente nominal
                  p.mb-0 Corriente que soporta un elemento en servicio continuo, por ejemplo, 9 A en un contactor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Velocidad
                  p.mb-0 Velocidad de giro de un motor, por ejemplo, 1.750 r/min.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La coherencia de unidades también es la base de los cálculos del sistema. Una fórmula como P = V × I solo entrega vatios si la tensión está en voltios y la corriente en amperios. Si la corriente se toma en miliamperios, el resultado queda mil veces menor.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img17.png', alt=''  style="max-width: 300px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_3(data-aos="fade-left")
            .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
              h4.mb-0 Para reflexionar
            p.mb-0 Antes de conectar cualquier equipo conviene preguntarse en qué unidad está la placa, si la escala del instrumento coincide con la del manual y si el resultado del cálculo tiene sentido físico. Un valor absurdo suele revelar un error de unidades.
      p.mb-5 La ruta para trabajar con unidades en un automatismo se presenta a continuación:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Identificar la magnitud
                    p.mb-0 Presión, temperatura, corriente, potencia u otra.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img18.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img19.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Reconocer la unidad
                    p.mb-0 Leer símbolo, prefijo y sistema de origen.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Elegir el factor
                    p.mb-0 Usar tablas oficiales de conversión.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img20.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img21.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Convertir
                    p.mb-0 Multiplicar por el factor o correr la coma decimal.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Verificar
                    p.mb-0 Comparar con el rango del manual del fabricante.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img22.png', alt='' style="width: 160px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img23.png', alt='' style="width: 160px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Resultado
                    p.mb-0 Datos técnicos coherentes y comparables.

</template>

<script>
export default {
  name: 'Tema1',
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
