export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    price: 1399,
    offerPrice: 1399,
    image: '/images/productos/samsungGalaxyUltraS23.jpeg',
    category: 'celulares',
    description: 'Innovación y potencia avanzada.',
    longDescription: 'El revolucionario Samsung Galaxy S23 Ultra, con cámara de 200 MP y pantalla Dynamic AMOLED 2X. Este modelo insignia de Samsung ofrece un rendimiento increíblemente rápido y fluido, ideal para profesionales y amantes de la fotografía.',
    specs: {
      screenSize: '6.8 inches',
      batteryLife: '5000mAh',
      processor: 'Snapdragon 8 Gen 2',
      camera: '200 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '228g'
    },
    colors: ['Phantom Black', 'Cream', 'Green', 'Lavender'],
    inStock: true
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 12',
    brand: 'Xiaomi',
    price: 499,
    offerPrice: 499,
    image: '/images/productos/XiaomiRedmiNote12.webp',
    category: 'celulares',
    description: 'Calidad al alcance.',
    longDescription: 'Xiaomi Redmi Note 12 cuenta con pantalla AMOLED, cámara de 50 MP y batería de larga duración. Diseñado para aquellos que buscan un excelente rendimiento a un precio accesible.',
    specs: {
      screenSize: '6.67 inches',
      batteryLife: '5000mAh',
      processor: 'Snapdragon 685',
      camera: '50 MP',
      connectivity: '4G, Wi-Fi 5',
      weight: '192g'
    },
    colors: ['Blue', 'Black', 'White'],
    inStock: false
  },
  {
    id: 3,
    name: 'Huawei MatePad Pro',
    brand: 'Huawei',
    price: 699,
    offerPrice: 649,
    image: '/images/productos/HuaweiMatePadPro.jpeg',
    category: 'tablets',
    description: 'Diseño premium.',
    longDescription: 'Huawei MatePad Pro combina un diseño ultradelgado con una pantalla FullView de 12.6 pulgadas. Perfecta para tareas de productividad y entretenimiento, con soporte para M-Pencil y teclado magnético.',
    specs: {
      screenSize: '12.6 inches',
      batteryLife: '7250mAh',
      processor: 'Kirin 9000E',
      storage: '128GB, 256GB',
      connectivity: 'Wi-Fi 6, 4G',
      weight: '609g'
    },
    colors: ['Grey', 'Silver'],
    inStock: true
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    price: 399,
    offerPrice: 369,
    image: '/images/productos/SonyWH1000XM5.webp',
    category: 'accesorios',
    description: 'Audio sin distracciones.',
    longDescription: 'Auriculares Sony WH-1000XM5 ofrecen una calidad de audio superior y cancelación activa de ruido líder en su clase. Perfectos para disfrutar de música, películas o llamadas sin interrupciones.',
    specs: {
      connectivity: 'Bluetooth 5.2',
      batteryLife: '30 horas',
      weight: '254g',
      noiseCancellation: 'Sí',
      compatibility: 'iOS, Android, Windows'
    },
    colors: ['Black', 'Silver'],
    inStock: false
  },
  {
    id: 5,
    name: 'Apple iPad Air (5ª Gen)',
    brand: 'Apple',
    price: 699,
    offerPrice: 699,
    image: '/images/productos/AppleipadAir5gen.jpeg',
    category: 'tablets',
    description: 'Potencia en tus manos.',
    longDescription: 'El iPad Air de quinta generación con chip M1 ofrece un rendimiento increíble para aplicaciones profesionales y juegos. Ideal para estudiantes, creativos y usuarios exigentes.',
    specs: {
      screenSize: '10.9 inches',
      batteryLife: '10 horas',
      processor: 'Apple M1',
      storage: '64GB, 256GB',
      connectivity: 'Wi-Fi 6, 5G',
      weight: '461g'
    },
    colors: ['Blue', 'Pink', 'Space Gray', 'Green', 'Purple'],
    inStock: true
  },
  {
    id: 6,
    name: 'Samsung Galaxy Tab S8 Ultra',
    brand: 'Samsung',
    price: 799,
    offerPrice: 749,
    image: '/images/productos/samsungTabS8Ultra.jpeg',
    category: 'tablets',
    description: 'Rendimiento de primera.',
    longDescription: 'La Galaxy Tab S8 con pantalla LCD de 11 pulgadas y procesador Snapdragon 8 Gen 1 es perfecta para trabajo y entretenimiento. Soporte para S Pen incluido.',
    specs: {
      screenSize: '11 inches',
      batteryLife: '8000mAh',
      processor: 'Snapdragon 8 Gen 1',
      storage: '128GB, 256GB',
      connectivity: 'Wi-Fi 6E',
      weight: '503g'
    },
    colors: ['Graphite', 'Silver'],
    inStock: true
  },
  {
    id: 7,
    name: 'Xiaomi Mi Band 7',
    brand: 'Xiaomi',
    price: 59,
    offerPrice: 59,
    image: '/images/productos/XiaomiMiBand7.webp',
    category: 'accesorios',
    description: 'Control total de tu actividad.',
    longDescription: 'La Xiaomi Mi Band 7 es una pulsera inteligente con monitor de actividad, pantalla AMOLED y más de 100 modos deportivos.',
    specs: {
      connectivity: 'Bluetooth 5.2',
      batteryLife: '14 días',
      weight: '13.5g',
      waterResistance: '5ATM',
      compatibility: 'iOS, Android'
    },
    colors: ['Black', 'Orange', 'Blue'],
    inStock: true
  },
  {
    id: 8,
    name: 'Samsung Galaxy A54',
    brand: 'Samsung',
    price: 449,
    offerPrice: 449,
    image: '/images/productos/SamsungGalaxyA54.jpeg',
    category: 'celulares',
    description: 'Equilibrio perfecto.',
    longDescription: 'El Samsung Galaxy A54 ofrece una pantalla Super AMOLED de 6.4 pulgadas y una cámara de 50 MP para fotos nítidas. Ideal para usuarios que buscan calidad y rendimiento a buen precio.',
    specs: {
      screenSize: '6.4 inches',
      batteryLife: '5000mAh',
      processor: 'Exynos 1380',
      camera: '50 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '202g'
    },
    colors: ['Black', 'White', 'Green', 'Violet'],
    inStock: true
  },
  {
    id: 9,
    name: 'Xiaomi Pad 6',
    brand: 'Xiaomi',
    price: 399,
    offerPrice: 369,
    image: '/images/productos/XiaomiPad6.jpg',
    category: 'tablets',
    description: 'Perfecta para el día a día.',
    longDescription: 'La Xiaomi Pad 6 cuenta con pantalla WQHD+ de 11 pulgadas, procesador Snapdragon 870 y batería de larga duración, ideal para trabajo y entretenimiento.',
    specs: {
      screenSize: '11 inches',
      batteryLife: '8840mAh',
      processor: 'Snapdragon 870',
      storage: '128GB, 256GB',
      connectivity: 'Wi-Fi 6',
      weight: '490g'
    },
    colors: ['Black', 'Blue', 'Gold'],
    inStock: true
  },
  {
    id: 10,
    name: 'Huawei FreeBuds Pro 2',
    brand: 'Huawei',
    price: 199,
    offerPrice: 179,
    image: '/images/productos/HuaweiFreeBudsPro2.jpeg',
    category: 'accesorios',
    description: 'Sonido premium sin cables.',
    longDescription: 'Los Huawei FreeBuds Pro 2 cuentan con cancelación de ruido activa y calidad de audio de alta fidelidad. Ideales para llamadas, música y juegos.',
    specs: {
      connectivity: 'Bluetooth 5.2',
      batteryLife: '6 horas (20 horas con estuche)',
      noiseCancellation: 'Sí',
      weight: '6.1g por auricular',
      compatibility: 'iOS, Android'
    },
    colors: ['Silver Frost', 'Ceramic White', 'Carbon Black'],
    inStock: true
  },
  {
    id: 11,
    name: 'Sony Xperia 10 V',
    brand: 'Sony',
    price: 449,
    offerPrice: 429,
    image: '/images/productos/SonyXperia10V.webp',
    category: 'celulares',
    description: 'Diseño compacto y potente.',
    longDescription: 'El Sony Xperia 10 V combina diseño compacto con pantalla OLED de 6 pulgadas y batería de larga duración. Perfecto para quienes buscan calidad en tamaño reducido.',
    specs: {
      screenSize: '6 inches',
      batteryLife: '5000mAh',
      processor: 'Snapdragon 695',
      camera: '48 MP',
      connectivity: '5G, Wi-Fi 5',
      weight: '159g'
    },
    colors: ['Black', 'White', 'Lavender'],
    inStock: false
  },
  {
    id: 12,
    name: 'Apple AirPods Pro (2ª Gen)',
    brand: 'Apple',
    price: 249,
    offerPrice: 229,
    image: '/images/productos/AppleAirpadsPro2gen.jpeg',
    category: 'accesorios',
    description: 'Calidad de audio avanzada.',
    longDescription: 'Los AirPods Pro de segunda generación cuentan con cancelación activa de ruido, audio espacial y mayor duración de batería. Perfectos para una experiencia de sonido inmersiva.',
    specs: {
      connectivity: 'Bluetooth 5.3',
      batteryLife: '6 horas (30 horas con estuche)',
      noiseCancellation: 'Sí',
      weight: '5.3g por auricular',
      compatibility: 'iOS, Android'
    },
    colors: ['White'],
    inStock: true
  },
  {
    id: 13,
    name: 'Samsung Galaxy Buds 2 Pro',
    brand: 'Samsung',
    price: 229,
    offerPrice: 209,
    image: '/images/productos/SamsungGalaxyBruds2.jpeg',
    category: 'accesorios',
    description: 'Sonido premium portátil.',
    longDescription: 'Los Galaxy Buds 2 Pro ofrecen una experiencia de audio inmersiva con cancelación de ruido activa y diseño ergonómico para mayor comodidad.',
    specs: {
      connectivity: 'Bluetooth 5.3',
      batteryLife: '5 horas (18 horas con estuche)',
      noiseCancellation: 'Sí',
      weight: '5g por auricular',
      compatibility: 'iOS, Android'
    },
    colors: ['Graphite', 'White', 'Bora Purple'],
    inStock: false
  },
  {
    id: 14,
    name: 'Xiaomi Poco X5 Pro',
    brand: 'Xiaomi',
    price: 349,
    offerPrice: 329,
    image: '/images/productos/XiaomiPocoX5Pro.webp',
    category: 'celulares',
    description: 'Rendimiento al mejor precio.',
    longDescription: 'El Poco X5 Pro cuenta con pantalla AMOLED de 6.67 pulgadas, cámara de 108 MP y procesador Snapdragon 778G. Un excelente equilibrio entre precio y prestaciones.',
    specs: {
      screenSize: '6.67 inches',
      batteryLife: '5000mAh',
      processor: 'Snapdragon 778G',
      camera: '108 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '181g'
    },
    colors: ['Black', 'Blue', 'Yellow'],
    inStock: true
  },
  {
    id: 15,
    name: 'Samsung Galaxy Z Fold 5',
    brand: 'Samsung',
    price: 1799,
    offerPrice: 1699,
    image: '/images/productos/GalaxyZfold5.jpeg',
    category: 'celulares',
    description: 'El futuro de los smartphones.',
    longDescription: 'El Samsung Galaxy Z Fold 5 es un teléfono plegable con pantalla de 7.6 pulgadas que se pliega para ofrecer un formato más compacto. Perfecto para multitareas y productividad, sin comprometer el diseño.',
    specs: {
      screenSize: '7.6 inches (pliegue)',
      batteryLife: '4400mAh',
      processor: 'Snapdragon 8 Gen 2',
      camera: '50 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '263g'
    },
    colors: ['Phantom Black', 'Cream'],
    inStock: true
  },
  {
    id: 16,
    name: 'Xiaomi Mi 11 Ultra',
    brand: 'Xiaomi',
    price: 749,
    offerPrice: 699,
    image: '/images/productos/XiaomiMi11Ultra.webp',
    category: 'celulares',
    description: 'Rendimiento sin límites.',
    longDescription: 'El Xiaomi Mi 11 Ultra es un dispositivo de alta gama con cámara principal de 50 MP, pantalla AMOLED y Snapdragon 888. Ideal para los que buscan una experiencia premium en fotografía y rendimiento.',
    specs: {
      screenSize: '6.81 inches',
      batteryLife: '5000mAh',
      processor: 'Snapdragon 888',
      camera: '50 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '234g'
    },
    colors: ['Black', 'White'],
    inStock: true
  },
  {
    id: 17,
    name: 'Huawei Mate 50 Pro',
    brand: 'Huawei',
    price: 1299,
    offerPrice: 1299,
    image: '/images/productos/HuaweiMate50Pro.jpeg',
    category: 'celulares',
    description: 'Innovación fotográfica al máximo.',
    longDescription: 'El Huawei Mate 50 Pro destaca por su cámara de 50 MP con tecnología avanzada, pantalla OLED de 6.74 pulgadas y procesador Kirin 9000. El dispositivo perfecto para quienes buscan un rendimiento excepcional en fotografía y conectividad.',
    specs: {
      screenSize: '6.74 inches',
      batteryLife: '4700mAh',
      processor: 'Kirin 9000',
      camera: '50 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '209g'
    },
    colors: ['Black', 'Silver'],
    inStock: false
  },
  {
    id: 18,
    name: 'Sony Xperia 1 IV',
    brand: 'Sony',
    price: 1299,
    offerPrice: 1299,
    image: '/images/productos/SonyXperia1iv.webp',
    category: 'celulares',
    description: 'El teléfono de los creadores.',
    longDescription: 'El Sony Xperia 1 IV está diseñado para creadores de contenido. Con su cámara de 12 MP, pantalla 4K OLED de 6.5 pulgadas y el poder de un Snapdragon 8 Gen 1, es el aliado perfecto para profesionales.',
    specs: {
      screenSize: '6.5 inches',
      batteryLife: '5000mAh',
      processor: 'Snapdragon 8 Gen 1',
      camera: '12 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '185g'
    },
    colors: ['Black', 'Purple'],
    inStock: true
  },
  {
    id: 19,
    name: 'Apple iPhone 15 Pro Max',
    brand: 'Apple',
    price: 1599,
    offerPrice: 1599,
    image: '/images/productos/Appleiphone15proMax.jpeg',
    category: 'celulares',
    description: 'El más avanzado de Apple.',
    longDescription: 'El iPhone 15 Pro Max cuenta con la potente A17 Bionic, cámara de 48 MP y una pantalla Super Retina XDR de 6.7 pulgadas. Perfecto para quienes buscan el mejor rendimiento en un dispositivo premium.',
    specs: {
      screenSize: '6.7 inches',
      batteryLife: '4323mAh',
      processor: 'A17 Bionic',
      camera: '48 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '221g'
    },
    colors: ['Titanium Gray', 'Silver', 'Gold', 'Blue'],
    inStock: true
  },
  {
    id: 20,
    name: 'Xiaomi Mi Pad 5',
    brand: 'Xiaomi',
    price: 399,
    offerPrice: 369,
    image: '/images/productos/XiaomiMiPad5.jpg',
    category: 'tablets',
    description: 'Productividad y entretenimiento en una tableta.',
    longDescription: 'La Xiaomi Mi Pad 5 ofrece una pantalla de 11 pulgadas con resolución 2.5K, procesador Snapdragon 860 y gran autonomía, siendo ideal tanto para el trabajo como para el ocio.',
    specs: {
      screenSize: '11 inches',
      batteryLife: '8720mAh',
      processor: 'Snapdragon 860',
      storage: '128GB, 256GB',
      connectivity: 'Wi-Fi 6',
      weight: '511g'
    },
    colors: ['White', 'Black'],
    inStock: true
  },
  {
    id: 21,
    name: 'Huawei MatePad 11',
    brand: 'Huawei',
    price: 499,
    offerPrice: 459,
    image: '/images/productos/HuaweiMatePad11.jpeg',
    category: 'tablets',
    description: 'Tu productividad mejorada.',
    longDescription: 'La Huawei MatePad 11 ofrece una pantalla de 120 Hz de 11 pulgadas, procesador Snapdragon 865 y una gran experiencia para trabajar y disfrutar contenido multimedia.',
    specs: {
      screenSize: '11 inches',
      batteryLife: '7250mAh',
      processor: 'Snapdragon 865',
      storage: '128GB, 256GB',
      connectivity: 'Wi-Fi 6',
      weight: '499g'
    },
    colors: ['Gray', 'Silver'],
    inStock: true
  },
  {
    id: 22,
    name: 'Apple Magic Keyboard',
    brand: 'Apple',
    price: 349,
    offerPrice: 319,
    image: '/images/productos/AppleMagicKeyboard.jpeg',
    category: 'accesorios',
    description: 'Teclado premium para iPad',
    longDescription: 'El Magic Keyboard de Apple proporciona una experiencia de escritura fluida con retroiluminación y trackpad, siendo el accesorio ideal para iPad Pro y iPad Air. Sus dimensiones son de 29.7 cm x 1.9 cm x 24.3 cm y está construido con material de aluminio. Es compatible con iPad Pro y iPad Air.',
    specs: {
    screenSize: 'N/A',
    batteryLife: 'Hasta 1 mes',
    processor: 'N/A',
    storage: 'N/A',
    connectivity: 'Bluetooth 5.0',
    weight: '710g'
    },
    colors: ['White'],
    inStock: true
    },
  {
    id: 23,
    name: 'Sony WH-1000XM4',
    brand: 'Sony',
    price: 349,
    offerPrice: 319,
    image: '/images/productos/SonyWHXM4.jpg',
    category: 'accesorios',
    description: 'Cancelación de ruido de última generación.',
    longDescription: 'Los Sony WH-1000XM4 ofrecen una experiencia acústica de alta calidad con cancelación de ruido activa. Perfectos para quienes buscan comodidad y sonido excepcional.',
    specs: {
      connectivity: 'Bluetooth 5.0',
      batteryLife: '30 horas',
      weight: '254g',
      noiseCancellation: 'Sí',
      compatibility: 'iOS, Android, Windows'
    },
    colors: ['Black', 'Silver'],
    inStock: false
  },
  {
    id: 24,
    name: 'Samsung Galaxy S23',
    brand: 'Samsung',
    price: 1199,
    offerPrice: 1099,
    image: '/images/productos/samsungGalaxyS23.jpeg',
    category: 'celulares',
    description: 'La mejor cámara para tu bolsillo.',
    longDescription: 'El Samsung Galaxy S23 Ultra cuenta con una cámara de 200 MP, pantalla Dynamic AMOLED 2X de 6.8 pulgadas y el potente procesador Snapdragon 8 Gen 2. Perfecto para profesionales y entusiastas de la fotografía móvil.',
    specs: {
      screenSize: '6.8 inches',
      batteryLife: '5000mAh',
      processor: 'Snapdragon 8 Gen 2',
      camera: '200 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '228g'
    },
    colors: ['Phantom Black', 'Green'],
    inStock: true
  },
  {
    id: 25,
    name: 'Xiaomi Redmi Note 12 Pro',
    brand: 'Xiaomi',
    price: 399,
    offerPrice: 359,
    image: '/images/productos/XiaomiRedmiNOTE12PRO.jpeg',
    category: 'celulares',
    description: 'Gran rendimiento a un precio accesible.',
    longDescription: 'El Xiaomi Redmi Note 12 Pro ofrece una excelente relación calidad-precio con una cámara de 50 MP, pantalla AMOLED de 6.67 pulgadas y el potente procesador MediaTek Dimensity 1080.',
    specs: {
      screenSize: '6.67 inches',
      batteryLife: '5000mAh',
      processor: 'MediaTek Dimensity 1080',
      camera: '50 MP',
      connectivity: '5G, Wi-Fi 5',
      weight: '202g'
    },
    colors: ['Blue', 'Black', 'White'],
    inStock: true
  },
  {
    id: 26,
    name: 'Huawei P50 Pro',
    brand: 'Huawei',
    price: 899,
    offerPrice: 849,
    image: '/images/productos/HuaweiP50Pro.jpeg',
    category: 'celulares',
    description: 'Diseño y potencia en uno.',
    longDescription: 'El Huawei P50 Pro cuenta con una cámara de 50 MP, pantalla OLED de 6.6 pulgadas y el procesador Kirin 9000. Ideal para quienes buscan innovación y estilo.',
    specs: {
      screenSize: '6.6 inches',
      batteryLife: '4360mAh',
      processor: 'Kirin 9000',
      camera: '50 MP',
      connectivity: '5G, Wi-Fi 6',
      weight: '195g'
    },
    colors: ['Black', 'Golden'],
    inStock: true
  },
  {
    id: 27,
    name: 'Sony Xperia 10 IV',
    brand: 'Sony',
    price: 499,
    offerPrice: 449,
    image: '/images/productos/SonyXperia10iv.jpg',
    category: 'celulares',
    description: 'Rendimiento y duración de batería.',
    longDescription: 'El Sony Xperia 10 IV es un teléfono económico con una pantalla OLED de 6 pulgadas, cámara triple de 12 MP y una batería de larga duración que supera las 2 días de uso.',
    specs: {
      screenSize: '6 inches',
      batteryLife: '5000mAh',
      processor: 'Snapdragon 695',
      camera: '12 MP (triple)',
      connectivity: '5G, Wi-Fi 5',
      weight: '161g'
    },
    colors: ['Black', 'White'],
    inStock: true
  },
  {
    id: 28,
    name: 'Apple iPad Pro 12.9" (6ta generación)',
    brand: 'Apple',
    price: 1099,
    offerPrice: 1049,
    image: '/images/productos/ApplePadPro129.jpeg',
    category: 'tablets',
    description: 'Pantalla increíble, rendimiento imparable.',
    longDescription: 'El iPad Pro de 12.9" ofrece una pantalla Liquid Retina XDR, el potente chip M2 y 5G, ideal para el trabajo y el entretenimiento de alta gama.',
    specs: {
      screenSize: '12.9 inches',
      batteryLife: '10 horas',
      processor: 'M2 Chip',
      storage: '128GB, 256GB, 512GB, 1TB',
      connectivity: 'Wi-Fi 6, 5G',
      weight: '682g'
    },
    colors: ['Space Gray', 'Silver'],
    inStock: true
  },
  {
    id: 29,
    name: 'Xiaomi Mi Pad 5 Pro',
    brand: 'Xiaomi',
    price: 599,
    offerPrice: 569,
    image: '/images/productos/XiaomiMiPad5PRO.jpg',
    category: 'tablets',
    description: 'Rendimiento impresionante en una tablet.',
    longDescription: 'Con su pantalla de 11 pulgadas y resolución 2.5K, el Xiaomi Mi Pad 5 Pro ofrece una gran experiencia visual y de rendimiento con Snapdragon 870, ideal para profesionales y estudiantes.',
    specs: {
      screenSize: '11 inches',
      batteryLife: '8600mAh',
      processor: 'Snapdragon 870',
      storage: '128GB, 256GB',
      connectivity: 'Wi-Fi 6',
      weight: '515g'
    },
    colors: ['Black', 'White'],
    inStock: true
  },
  {
    id: 30,
    name: 'Huawei MatePad Pro 12.6',
    brand: 'Huawei',
    price: 799,
    offerPrice: 749,
    image: '/images/productos/HuaweiMatePadPro126.jpeg',
    category: 'tablets',
    description: 'Potente y profesional.',
    longDescription: 'La Huawei MatePad Pro de 12.6 pulgadas es ideal para productividad y entretenimiento, con su pantalla AMOLED y el procesador Kirin 990. Compatible con el M-Pencil para una mejor experiencia.',
    specs: {
      screenSize: '12.6 inches',
      batteryLife: '7250mAh',
      processor: 'Kirin 990',
      storage: '128GB, 256GB',
      connectivity: 'Wi-Fi 6',
      weight: '609g'
    },
    colors: ['Gray', 'Silver'],
    inStock: true
  },
  {
    id: 31,
    name: 'Sony WH-1000XM3',
    brand: 'Sony',
    price: 399,
    offerPrice: 379,
    image: '/images/productos/SonyWH1000XM3.jpeg',
    category: 'accesorios',
    description: 'Sonido premium con cancelación de ruido.',
    longDescription: 'Los Sony WH-1000XM3 son unos audífonos inalámbricos con cancelación de ruido líder en la industria, perfectos para quienes buscan calidad de sonido y comodidad durante largas horas.',
    specs: {
      connectivity: 'Bluetooth 5.2',
      batteryLife: '30 horas',
      weight: '250g',
      noiseCancellation: 'Sí',
      compatibility: 'iOS, Android, Windows'
    },
    colors: ['Black', 'Silver'],
    inStock: true
  },
  {
    id: 32,
    name: 'Apple AirPods Pro 2',
    brand: 'Apple',
    price: 249,
    offerPrice: 229,
    image: '/images/productos/AppleAirpodsPro2.jpeg',
    category: 'accesorios',
    description: 'Sonido increíble y cancelación de ruido.',
    longDescription: 'Los nuevos AirPods Pro 2 de Apple ofrecen una cancelación activa de ruido mejorada, junto con un sonido de calidad superior y la comodidad característica de los AirPods.',
    specs: {
      connectivity: 'Bluetooth 5.0',
      batteryLife: '6 horas',
      noiseCancellation: 'Sí',
      weight: '5.3g',
      compatibility: 'iOS, Android'
    },
    colors: ['Black', 'White'],
    inStock: true
  }
];


export const brands = [
  { id: 1, name: 'Samsung', logo: '/images/logo-marcas/tm_0012_Samsung-Logo.jpg' },
  { id: 2, name: 'Xiaomi', logo: '/images/logo-marcas/Xiaomi-Logo-2014.png' },
  { id: 3, name: 'Huawei', logo: '/images/logo-marcas/Huawei-Logo-600x338.png' },
  { id: 4, name: 'Sony', logo: '/images/logo-marcas/Sony-Logo-tumb.jpg' },
  { id: 5, name: 'Apple', logo: '/images/logo-marcas/loAPPLE.jpg' },
];

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByBrand = (brandName) => {
  return products.filter(product => product.brand.toLowerCase() === brandName.toLowerCase());
};