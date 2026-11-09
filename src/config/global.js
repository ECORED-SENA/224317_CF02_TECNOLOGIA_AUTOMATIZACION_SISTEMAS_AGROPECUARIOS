export default {
  global: {
    Name: 'Fundamentos para instalar instrumentación y automatismos',
    Description:
      'Presenta los conceptos que sustentan la instalación de automatismos: sistemas de unidades, electrotecnia, electrónica digital, dibujo técnico, procesos industriales, electricidad y cableado, lógica de control, instrumentación, neumática, hidráulica, algoritmos, comunicación industrial e internet de las cosas aplicados al contexto agropecuario.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas de unidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de magnitud, unidad y sistema de unidades',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de sistemas de unidades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Magnitudes básicas, derivadas y simbología',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Prefijos, factores y tablas de conversión',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Aplicaciones de los sistemas de unidades en la automatización',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Electrotecnia de corriente continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Variables eléctricas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Puesto de trabajo, herramientas básicas y <i>protoboard</i>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ley de Ohm y ley de Watt',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Instrumentos de medición de variables eléctricas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Componentes pasivos y operaciones con ellos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Componentes activos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Electrotecnia de corriente alterna',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Naturaleza de las variables eléctricas en corriente alterna',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Generador de funciones y osciloscopio',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Fuentes reguladas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Dispositivos de potencia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Electrónica digital y sistemas embebidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Introducción a la electrónica digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Sistemas de numeración',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Compuertas lógicas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Álgebra de Boole',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Mapas de Karnaugh',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Lógica computacional y sistemas embebidos',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Dibujo técnico y normativa de planos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características del dibujo técnico',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Normas ISO-A, ISO-E y ANSI: formatos y doblado de planos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Simbología estandarizada y diagramas de instrumentos y tuberías',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Diagramas de proceso, de localización y tipos de montaje',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Diagramas eléctricos, mecánicos, electroneumáticos y electrohidráulicos',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo:
              'Planos <i>as-built</i>, interpretación de planos y manuales técnicos',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Procesos industriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y clasificación de los procesos industriales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Infraestructura, riesgos y restricciones',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Condiciones de producción, parámetros técnicos y límites de variación',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Procesos de fabricación por arranque de material',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Procesos de fabricación por conformado',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Electricidad y cableado en instalaciones de automatismos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Circuitos, variables y equipos de prueba eléctricos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Ductos eléctricos y polaridad',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Blindaje y conexión a tierra',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Terminación de conductores y elementos de protección',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Reglamento eléctrico',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo:
              'Cableado: tipos de cables, tendido, conexionado y marquillado',
            hash: 't_7_6',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Automatismos eléctricos y teoría de control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Lógica cableada',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Introducción a la lógica programada',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Concepto de sistema y control en lazo abierto y cerrado',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: '<i>Set point</i>, valor consigna y variable de proceso',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Control ON/OFF y control PID',
            hash: 't_8_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Actuador',
      significado:
        'dispositivo que convierte una señal de control en una acción física, como un cilindro, una válvula o un motor.',
    },
    {
      termino: '<i>As-built</i>',
      significado:
        'plano que registra cómo quedó construida realmente una instalación, incluyendo los cambios realizados durante la obra.',
    },
    {
      termino: 'Autorretención',
      significado:
        'conexión en la que un contacto del propio contactor mantiene energizada su bobina después de soltar el pulsador de marcha.',
    },
    {
      termino: 'Blindaje',
      significado:
        'malla o lámina metálica que rodea los conductores de señal para protegerlos de interferencias electromagnéticas.',
    },
    {
      termino: 'Histéresis',
      significado:
        'diferencia entre los puntos de conexión y desconexión de un control, o entre las lecturas obtenidas al aumentar y disminuir una variable.',
    },
    {
      termino: 'Hoja de datos',
      significado:
        'documento del fabricante que resume las especificaciones técnicas de un instrumento o componente.',
    },
    {
      termino: 'IoT',
      significado:
        'internet de las cosas (<i>Internet of Things</i>), red de objetos conectados que incorporan sensores y actuadores para intercambiar datos a través de internet.',
    },
    {
      termino: 'Lazo de control',
      significado:
        'conjunto de sensor, controlador y actuador que trabajan de manera coordinada para mantener una variable en su valor deseado.',
    },
    {
      termino: 'Microcontrolador',
      significado:
        'circuito integrado que reúne procesador, memoria y puertos de entrada y salida en un solo chip.',
    },
    {
      termino: 'P&ID',
      significado:
        'diagrama de tuberías e instrumentación (<i>Piping and Instrumentation Diagram</i>) que representa equipos, líneas de proceso, instrumentos y lazos de control.',
    },
    {
      termino: 'PLC',
      significado:
        'controlador lógico programable (<i>Programmable Logic Controller</i>), computador industrial que ejecuta programas para controlar máquinas y procesos.',
    },
    {
      termino: 'Protocolo de comunicación',
      significado:
        'conjunto de reglas que permite a dos o más equipos intercambiar datos de manera ordenada y confiable.',
    },
    {
      termino: 'RETIE',
      significado:
        'reglamento técnico de instalaciones eléctricas de Colombia, de obligatorio cumplimiento en las instalaciones comprendidas dentro de su ámbito de aplicación.',
    },
    {
      termino: '<i>Set point</i>',
      significado:
        'valor de consigna o valor deseado que un sistema de control debe alcanzar y mantener en la variable controlada.',
    },
    {
      termino: 'Transmisor',
      significado:
        'instrumento que convierte la medición de una variable física en una señal normalizada, como una señal de corriente de 4–20 mA.',
    },
  ],
  referencias: [
    {
      referencia:
        'Referencias corregidas según las normas APA, 7.ª edición, organizadas alfabéticamente, con títulos en cursiva, uso de mayúsculas y minúsculas y formato de edición normalizados.',
      link: '',
    },
    {
      referencia:
        'Arduino. (s. f.). Getting started with Arduino. Arduino Documentation. ',
      link: 'https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/',
    },
    {
      referencia:
        'Boylestad, R. L. (2011). Introducción al análisis de circuitos (12.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Carulla, M., & Lladonosa, V. (1993). Circuitos básicos de neumática. Marcombo.',
      link: '',
    },
    {
      referencia:
        'Creus, A. (2010). Instrumentación industrial (8.ª ed.). Marcombo.',
      link: '',
    },
    {
      referencia:
        'Floyd, T. L. (2006). Fundamentos de sistemas digitales (9.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Metrología. (2025). Guía sobre el uso del Sistema Internacional de Unidades (SI). ',
      link: 'https://inm.gov.co/wp-content/uploads/2025/04/Guia_de_uso_del_SI-v.20250407.pdf',
    },
    {
      referencia:
        'International Society of Automation. (2024). ANSI/ISA-5.1-2024: Instrumentation and control—Symbols and identification. ',
      link: 'https://www.isa.org/products/ansi-isa-5-1-2024-instrumentation-and-control-symb',
    },
    {
      referencia:
        'Kalpakjian, S., & Schmid, S. R. (2014). Manufactura, ingeniería y tecnología (7.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2024). Resolución 40117 de 2024, por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas (RETIE). ',
      link: 'https://www.minenergia.gov.co/documents/11563/Resoluci%C3%B3n_40117_de_2024.pdf',
    },
    {
      referencia:
        'Ogata, K. (2010). Ingeniería de control moderna (5.ª ed.). Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
