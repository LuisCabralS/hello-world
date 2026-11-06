// Datos de planificación. Consulta: 6 nov 2026. Un enlace de Maps identifica un lugar;
// no confirma sus horarios, reseñas, tarifas, seguridad ni acceso.
export const places = [
  ['gringos','Playa Los Gringos','playa','Nagua','Playa junto al alojamiento elegido; empezar aquí evita un traslado extra.','https://www.google.com/maps/search/?api=1&query=Playa+Los+Gringos+Nagua','referencia'],
  ['bojolo','Playa La Poza de Bojolo','playa','Matancitas, Nagua','Alternativa costera para explorar antes de entrar; comprobar acceso y oleaje.','https://www.google.com/maps/search/?api=1&query=Playa+La+Poza+de+Bojolo+Matancitas','pendiente'],
  ['boba','Playa Boba','playa','Nagua','Segunda playa de la zona; ruta y condiciones por comprobar.','https://www.google.com/maps/search/?api=1&query=Playa+Boba+Nagua','pendiente'],
  ['diamante','Playa Diamante','playa','Cabrera','Playa para una salida más larga hacia Cabrera; no combinar con otras excursiones largas.','https://www.google.com/maps/search/?api=1&query=Playa+Diamante+Cabrera','pendiente'],
  ['caleton','Playa Caletón','playa','Río San Juan','Opción para otro viaje o para un domingo largo; requiere confirmar tiempo de carretera.','https://www.google.com/maps/search/?api=1&query=Playa+Caleton+Rio+San+Juan','alternativa'],
  ['represa','Balneario La Represa','agua','Nagua / Matancitas por confirmar','Nombre aportado para investigar. Ubicación, operación y aptitud de baño sin confirmar.','https://www.google.com/maps/search/?api=1&query=Balneario+La+Represa+Nagua','pendiente'],
  ['dudu','Laguna Dudú','agua','La Entrada, Cabrera','Excursión de agua dulce con posible entrada de pago; confirmar tarifa y reglas directamente.','https://www.google.com/maps/search/?api=1&query=Laguna+Dudu+La+Entrada','pendiente'],
  ['saltadero','El Saltadero','agua','Cabrera','Cascada/poza que exige comprobar acceso y condiciones antes de considerarla.','https://www.google.com/maps/search/?api=1&query=El+Saltadero+Cabrera','alternativa'],
  ['grigri','Laguna Gri-Grí','agua','Río San Juan','Paseo de laguna, más lejos de Nagua; barco, precio y operación por confirmar.','https://www.google.com/maps/search/?api=1&query=Laguna+Gri+Gri+Rio+San+Juan','alternativa'],
  ['malecon','Malecón de Nagua','spot','Nagua','Paseo urbano sujeto a confirmar si las obras dejan un tramo abierto.','https://www.google.com/maps/search/?api=1&query=Malecon+de+Nagua','pendiente'],
  ['mercado','Centro de Nagua','spot','Nagua','Paseo breve y compras sin añadir otro municipio.','https://www.google.com/maps/search/?api=1&query=centro+de+Nagua','referencia'],
  ['matteos',"Matteo's",'comida','Nagua por confirmar','Candidato para comer fuera; revisar ficha, reseñas, menú y horario.','https://www.google.com/maps/search/?api=1&query=Matteos+Nagua','pendiente'],
  ['chefcito',"D'Chefcito",'comida','Nagua por confirmar','Candidato local; no hay precio ni valoración verificados.','https://www.google.com/maps/search/?api=1&query=D+Chefcito+Nagua','pendiente'],
  ['nany','Nany Delicias','comida','Nagua por confirmar','Candidato local; comprobar que esté abierto y su ubicación exacta.','https://www.google.com/maps/search/?api=1&query=Nany+Delicias+Nagua','pendiente'],
  ['sarante','Sarante Bar Restaurant','comida','Nagua por confirmar','Candidato local para una cena; comparar menú con el presupuesto.','https://www.google.com/maps/search/?api=1&query=Sarante+Bar+Restaurant+Nagua','pendiente'],
  ['marisco','El Mundo del Marisco','comida','Nagua por confirmar','Candidato para una sola comida especial; confirmar carta y cuenta final.','https://www.google.com/maps/search/?api=1&query=El+Mundo+del+Marisco+Nagua','pendiente'],
  ['chen','Comedor Chen','comida','Nagua por confirmar','Candidato de almuerzo económico; preguntar precio del plato antes de pedir.','https://www.google.com/maps/search/?api=1&query=Comedor+Chen+Nagua','pendiente'],
  ['super','Supermercado en Nagua','compra','Nagua','Comprar agua, desayuno y cena para ahorrar; elegir uno abierto según la ruta.','https://www.google.com/maps/search/?api=1&query=supermercado+Nagua','referencia']
].map(([id,name,kind,area,description,map,status])=>({id,name,kind,area,description,map,status,checked:'6 nov 2026'}));

export const plans = {
  calma:{title:'Playa y calma',tagline:'La playa manda; el alojamiento tiene espacio para disfrutarse.',tone:'mar',route:'Santo Domingo Este → Matancitas → Playa Los Gringos → Nagua',sat:[
    ['05:30','Salida de Santo Domingo Este','Desayuno y agua desde casa. Confirmar tráfico, combustible y peajes antes de salir.','mercado',['bojolo','gringos']],
    ['09:30','Pausa en Matancitas','Parada corta para estirar las piernas; si la llegada va tarde, sigan directos a Nagua.','bojolo',['gringos','mercado']],
    ['10:15','Mañana de playa','La Poza de Bojolo solo si se confirma el acceso; de lo contrario, Playa Los Gringos. Tiempo reservado para aparcar y cambiarse.','bojolo',['gringos','boba']],
    ['12:15','Almuerzo sin prisa','Picnic llevado con bolsa térmica, o Comedor Chen si la ficha y el menú se confirman.','chen',['super','matteos']],
    ['13:30','Compras y margen','Agua, fruta, cena y desayuno. Perecederos al final de la espera.','super',['mercado','gringos']],
    ['15:00','Check-in en Airbnb','La entrada anticipada requiere confirmación del anfitrión. Si no se concede, este es el primer momento para instalarse.','gringos',['mercado']],
    ['16:30','Playa o piscina','Disfruten el alojamiento; baño de mar solo con condiciones favorables y luz.','gringos',['boba']],
    ['19:00','Cena sencilla en casa','Preparar comida solo si la cocina está confirmada; alternativa sin cocinar: comida lista comprada.','super',['sarante']]],sun:[
    ['08:00','Desayuno llevado','Pan, fruta, café y agua. No asumir hora de checkout.','super',['chen']],
    ['09:00','Mañana tranquila','Playa Los Gringos o piscina según acceso y oleaje. Empaquen antes de la hora que indique el anfitrión.','gringos',['boba']],
    ['Después del checkout','Regreso con pausa','Almuerzo ligero en ruta y salida con margen para llegar a Santo Domingo Este sin agotarse.','chen',['super']]]},
  naturaleza:{title:'Naturaleza y agua',tagline:'Una aventura opcional, con regreso temprano al mar.',tone:'verde',route:'Santo Domingo Este → Nagua → La Entrada (opcional) → Playa Los Gringos',sat:[
    ['05:00','Salida de Santo Domingo Este','Desayuno y snacks de casa; pausa breve en carretera cuando sea seguro.','mercado',['super']],
    ['09:30','Llegada y decisión','Confirmen por teléfono o ficha actual si Laguna Dudú abre, cuánto cuesta y si el tiempo de ruta conviene. Si falla una condición, quédense en Nagua.','dudu',['bojolo','gringos']],
    ['10:00','Excursión a La Entrada','Reservar margen amplio para conducir, aparcar y volver. No sumar El Saltadero el mismo día.','dudu',['bojolo','represa']],
    ['12:00','Almuerzo','Picnic que resista el trayecto o comedor abierto en ruta; sin precio confirmado.','super',['chen']],
    ['13:00','Regreso a Nagua','Salgan con margen para comprar y llegar al check-in de las 15 h.','gringos',['mercado']],
    ['15:00','Check-in y descanso','Si el anfitrión permite entrar antes, dejen equipaje pero mantengan esta pausa.','gringos',['super']],
    ['17:00','Playa Los Gringos','Una tarde corta cerca del alojamiento, siempre según oleaje y luz.','gringos',['boba']],
    ['19:00','Cena llevada','Comida lista o cocina solo si existe y está disponible.','super',['sarante']]],sun:[
    ['08:00','Desayuno en el alojamiento','Salir sin prisa y consultar la hora real de checkout.','super',['chen']],
    ['09:30','Último baño o paseo','Piscina o playa cercana, sin conducir a otro municipio.','gringos',['bojolo']],
    ['Después del checkout','Vuelta a Santo Domingo Este','Una parada para comer y descansar en ruta; no añadir Río San Juan al regreso.','chen',['super']]]},
  pueblo:{title:'Costa y pueblo',tagline:'Conocer Nagua y reservar la mejor luz para la playa.',tone:'tierra',route:'Santo Domingo Este → Nagua → Playa Los Gringos',sat:[
    ['05:30','Salida de Santo Domingo Este','Desayuno en casa o para llevar. Revisión de ruta y pausas de conducción.','mercado',['super']],
    ['09:30','Llegada a la costa','Paseo por Playa Los Gringos. Si hay retraso, esta es la parada que se conserva.','gringos',['bojolo']],
    ['11:00','Nagua a pie','Centro y malecón solo si hay tramo abierto; verificar obras antes. No buscar calles vacías.','malecon',['mercado','gringos']],
    ['12:15','Una comida fuera','Elegir entre Comedor Chen o un restaurante con menú confirmado. Solo una parada gastronómica destacada.','chen',['matteos','marisco']],
    ['13:30','Supermercado y espera','Cena, desayuno y bebidas; aparcamiento y compras antes de entrar.','super',['mercado']],
    ['15:00','Check-in y pausa','No contar con acceso antes. Si el anfitrión lo concede, pueden descansar más.','gringos',['super']],
    ['16:30','Atardecer de playa','Playa Los Gringos; Playa Boba únicamente si Maps y oleaje justifican mover el auto.','gringos',['boba']],
    ['19:00','Cena en el Airbnb','Comida traída o lista para consumir; restaurante solo si siguen con ganas.','super',['sarante']]],sun:[
    ['08:00','Desayuno sin traslado','Comida guardada en el alojamiento. Confirmar checkout con el anfitrión.','super',['chen']],
    ['09:30','Despedida de la costa','Paseo corto, fotos y tiempo para empacar.','gringos',['boba']],
    ['Después del checkout','Regreso descansado','Almuerzo económico en ruta; evitar una excursión larga de último momento.','chen',['super']]]}
};
