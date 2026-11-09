<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario formativo sobre fundamentos de instrumentación y automatismos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> refuerce sus conocimientos sobre unidades, electrotecnia, electrónica digital, planos, fabricación, cableado y control aplicados a la automatización agropecuaria.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'En un sistema de riego, usted lee una presión de 2 bar. ¿A cuántos kilopascales equivale?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '20 kPa',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '200 kPa',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '2.000 kPa',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '0,2 kPa',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Un transmisor entrega 20 mA a través de una resistencia de 250 Ω. ¿Qué tensión obtiene usted al aplicar la ley de Ohm?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,5 V',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '12,5 V',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5 V',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '50 V',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Para medir corriente con un multímetro convencional, ¿cómo debe conectarlo usted al circuito?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En paralelo con la carga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entre la fase y tierra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre los extremos de una resistencia desconectada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En serie y con el borne de corriente adecuado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué función cumple el regulador en una fuente regulada lineal que usted instala?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener constante la tensión de salida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la tensión mediante un transformador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rectificar la corriente alterna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suavizar el rizado mediante condensadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Usted necesita activar una bomba únicamente cuando hay agua y es hora de riego. ¿Qué compuerta lógica representa esta condición?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'OR',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'NOT',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'AND',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XOR',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué información debe consultar usted en un plano as-built?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La propuesta inicial sin cambios de obra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El estado real de la instalación construida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente los costos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo las dimensiones del papel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué caracteriza un proceso de fabricación por arranque de material que usted utiliza para elaborar soportes?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La deformación del material entre rodillos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El doblado de una lámina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La unión de piezas sin mecanizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La retirada de material en forma de viruta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Al marquillar los conductores de un tablero, ¿qué identificación debe colocar usted?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El código del plano en ambos extremos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un código diferente en cada extremo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el nombre del fabricante del cable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente la fecha de compra del conductor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Si usted configura una incubadora a 38 °C, ¿qué representa ese valor en el sistema de control?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La variable real medida por el sensor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La potencia de la resistencia calefactora.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El set point o valor de consigna.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La perturbación causada por abrir la puerta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Usted instala un riego que compara la humedad medida con el valor deseado y corrige su funcionamiento. ¿Qué tipo de control utiliza?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lazo abierto por temporizador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lazo cerrado con realimentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Accionamiento manual sin medición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lazo abierto sin sensor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Si usted conecta resistencias de 10 kΩ y 20 kΩ en serie, ¿qué resistencia total obtiene?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '6,67 kΩ.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '10 kΩ.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '30 kΩ.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '200 kΩ.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué instrumento debe utilizar usted para observar cómo cambia una tensión en el tiempo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Telurómetro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Osciloscopio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Megóhmetro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Óhmetro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué dispositivo debe seleccionar usted para conmutar una resistencia calefactora sin partes móviles?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Relé de estado sólido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Contactor electromecánico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pulsador normalmente abierto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Relé electromecánico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué símbolos utiliza usted para representar números en el sistema binario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Del 0 al 9.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Del 0 al 7.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Del 0 al 9 y de A a F.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '0 y 1.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Para qué utiliza usted un mapa de Karnaugh en electrónica digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir la resistencia de aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Simplificar funciones booleanas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Convertir corriente alterna en continua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar la escala de un plano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué instrumento debe utilizar usted para medir la resistencia de la puesta a tierra?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generador de funciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Osciloscopio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Telurómetro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pinza amperimétrica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué función cumple el blindaje de un cable de señal que usted instala?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger la señal de interferencias electromagnéticas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la frecuencia de la señal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transformar corriente alterna en continua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el aislamiento de los conductores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué elemento debe seleccionar usted para proteger un circuito en una zona húmeda contra fugas a tierra?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Relé temporizador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pulsador de marcha.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contactor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interruptor diferencial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Durante un ciclo de operación del PLC, ¿qué secuencia debe reconocer usted?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actualizar salidas, leer entradas y ejecutar el programa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Leer entradas, ejecutar el programa y actualizar salidas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ejecutar el programa, actualizar salidas y leer entradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Leer entradas y actualizar salidas sin ejecutar el programa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'En un control ON/OFF, ¿para qué utiliza usted una banda de histéresis?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar la unidad de temperatura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la medición de la variable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar conmutaciones continuas alrededor del valor de consigna.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Convertir el controlador en un sistema de lazo abierto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
