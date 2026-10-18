# Investigación: los 200 vestiges

**Estado:** tanda 1. Investigadas 9 de 200 posiciones (vstg-0001 a vstg-0009). Quedan 191.

Este documento es de trabajo. No está publicado en el sitio. Los textos para la web están en inglés; las notas, en español.

---

## Cómo leer cada ficha

Cada ficha separa tres cosas, para que nunca se confunda un hecho con una lectura:

1. **Hechos.** Lo que las fuentes consultadas afirman. Cada hecho clave debe contrastarse con la fuente indicada en *Para verificar*.
2. **Hilo interpretativo.** La conexión que construye el archivo: qué futuro se cerró y cómo definió un presente. Es una lectura, no un hecho. Va marcada como tal y no debe presentarse como causa única.
3. **Texto para el sitio (EN).** `[desc.]` y `[f.f. expl.]`, listos para pegar en `src/data/vestiges.ts` cuando se aprueben.

Cada ficha lleva además **una fuente principal** (un enlace), una **sugerencia de imagen** y un **nivel de confianza**.

### Criterio para el año del código

El código público es `[VSTG.AAAA]`. Propongo esta regla: **el año en que el futuro deja de ser posible** (cancelación, tratado, muerte, decisión definitiva). Si la fuente no fija ese año con claridad, la ficha queda en `VSTG.NA` hasta que lo decidas.

### Sobre las fuentes

La mayoría de lo que pude consultar son fuentes secundarias: enciclopedias abiertas, artículos de prensa, páginas de museos y revistas académicas citadas por terceros. Las mejores de cada ficha están marcadas como principal. Antes de publicar, cada dato clave debería comprobarse en el libro o artículo académico que aparece en *Para verificar*.

## Nivel de cada ficha

Desde ahora cada ficha lleva un **nivel**, que se guarda en el campo `level` del archivo de datos:

- **Documented:** los hechos tienen fuente confiable. La conexión entre el futuro fallido y el presente puede ser una lectura, pero se presenta como tal dentro del texto.
- **Hypothesis:** la conexión o el futuro fallido es una suposición razonable, marcada como hipótesis en el texto. Se puede publicar siempre que el texto lo diga.
- **Pending:** todavía no investigada.

Un vestigio puede ser de intensidad baja, como un sueño o una trayectoria interrumpida, siempre que su texto distinga lo que consta de lo que se supone.

Las pirámides u otros restos de cosas que sí existieron no son vestigios: el archivo trata solo de lo que no llegó a ser.

Nivel de la tanda 1:

| Posición | Nivel |
|---|---|
| vstg-0001 Orion | Documented (hechos); la conexión es una lectura |
| vstg-0002 Tatlin | Documented |
| vstg-0003 Plan Voisin | Documented (cifras por contrastar) |
| vstg-0004 Hitler | Documented (hechos); la hipótesis sobre la política es Hypothesis |
| vstg-0005 Palacio de los Soviets | Documented |
| vstg-0006 Plan para Bagdad | Documented (la reutilización en Arizona, por verificar) |
| vstg-0007 Apolo 18–20 | Documented |
| vstg-0008 N1 | Documented |
| vstg-0009 Len Bias | Documented (hechos); la lectura sobre la ley es interpretación |

---

## Resumen de la tanda

| Posición | Vestige | Año propuesto | Categoría | Confianza |
|---|---|---|---|---|
| vstg-0001 | Project Orion | 1963 | Ciencia / espacio | Media |
| vstg-0002 | Monumento a la Tercera Internacional (Tatlin) | por decidir (NA) | Arquitectura | Media-alta |
| vstg-0003 | Plan Voisin | 1925 (presentado, no adoptado) | Urbanismo | Media |
| vstg-0004 | Solicitudes de Hitler a la Academia de Viena | 1908 | Trayectoria personal | Media |
| vstg-0005 | Palacio de los Soviets | por confirmar (c. 1941) | Arquitectura / política | Media-alta |
| vstg-0006 | Plan para la Gran Bagdad (Wright) | 1958 | Arquitectura / política | Media |
| vstg-0007 | Apolo 18, 19 y 20 | 1970 | Ciencia / espacio | Alta |
| vstg-0008 | Cohete N1 | 1976 | Ciencia / espacio | Media-alta |
| vstg-0009 | Len Bias | 1986 | Deporte / política | Media-alta |

**Orden cronológico del libro (por año propuesto):** 0004 (1908) → 0002 (c. 1920) → 0003 (1925) → 0005 (c. 1941) → 0006 (1958) → 0001 (1963) → 0007 (1970) → 0008 (1976) → 0009 (1986).

---

## vstg-0001 — Project Orion

**Año propuesto:** 1963 (firma del Tratado de Prohibición Parcial de Pruebas Nucleares)
**Categoría:** Ciencia / espacio. **Confianza:** media.

### Hechos
- El proyecto estudiaba la propulsión por pulsos nucleares: explosiones sucesivas detrás de una gran placa empujadora para impulsar una nave. Lo dirigieron Ted Taylor, en General Atomics, y el físico Freeman Dyson.
- Empezó formalmente en 1958, con patrocinio de una agencia del gobierno de EE. UU. Se hicieron pruebas con modelos no nucleares.
- El tratado de 1963 prohibió las explosiones nucleares en la atmósfera y en el espacio, y redujo el apoyo político al proyecto.
- Las fuentes **discrepan en la fecha de cancelación**: unas dicen 1964 y otras 1965. El año 1963 (tratado) es el único que coincide en todas.
- Una de las fuentes menciona un estudio posterior de la NASA sobre lanzar piezas de la nave con cohetes Saturn V y ensamblarla en órbita, que se consideró inviable.

### Hilo interpretativo
Un camino de ingeniería se cerró por una decisión diplomática, no por un límite físico. La preocupación por la lluvia radiactiva produjo el tratado, y el tratado cerró la propulsión nuclear en el espacio. Lo que hoy se considera posible fuera de la Tierra se decidió, en parte, en una sala de negociación. La pregunta que deja: ¿qué otra era espacial pudo haber existido?

### Texto para el sitio (EN)
- **[desc.]** Study drawings and test models of a spacecraft driven by nuclear explosions, designed at General Atomics between 1958 and 1965.
- **[f.f. expl.]** A future in which large crews crossed the solar system on nuclear pulses. In 1963 a treaty banned nuclear explosions in the atmosphere and in space, and the project lost its political ground. The drawings remain, along with the question of which kind of space age was decided in a negotiating room rather than in a laboratory.

### Fuente principal
https://en.wikipedia.org/wiki/Project_Orion_(nuclear_propulsion)

### Para verificar
Dyson, G. (2002). *Project Orion: The True Story of the Atomic Spaceship.* (confirmar editorial). Contrastar la fecha de cancelación (1964 o 1965).

### Imagen
Dibujos y modelos de General Atomics o material de la NASA. Buscar en NASA Image Library y Wikimedia Commons. **Licencia por verificar.**

---

## vstg-0002 — Monumento a la Tercera Internacional (Torre de Tatlin)

**Año propuesto:** por decidir (NA). **Categoría:** arquitectura. **Confianza:** media-alta.

### Hechos
- Diseño de Vladimir Tatlin, 1919–1920, para Petrogrado: sede y monumento de la Internacional Comunista.
- Doble hélice de hierro, vidrio y acero, de 400 m de altura, con estructuras interiores que rotarían a distintas velocidades. Nunca se construyó.
- El 8 de noviembre de 1920, aniversario de la Revolución, Tatlin expuso un modelo de unos cinco metros.
- En 1925 construyó una torre más pequeña (de unos tres metros) para la Exposición de Artes Decorativas de París.
- Existen reconstrucciones posteriores, entre ellas una hecha en Suecia. En 2011 se levantó un modelo a escala 1:42 en la Royal Academy de Londres.
- **Las fuentes consultadas no fijan una fecha de cancelación formal.** Por eso el año queda sin asignar.

### Hilo interpretativo
Es el vestige más literal del archivo: un futuro que solo existió como maqueta. Lo que sobrevive no es el edificio, sino su modelo y las réplicas que se han hecho décadas después. El futuro persiste como imagen de sí mismo. La pregunta: ¿cuántos proyectos solo existen como representación de lo que prometían?

### Texto para el sitio (EN)
- **[desc.]** A 400-metre double helix of iron and glass, designed by Vladimir Tatlin in 1919–1920 as a headquarters for the Communist International in Petrograd. Only models were built.
- **[f.f. expl.]** A tower meant to be both the headquarters and the monument of a new international order. It was never built. The model survives, and so do reconstructions made decades later: a future that exists today only as a replica of its own promise.

### Fuente principal
Leleu, N. (2007). *The Model of Vladimir Tatlin's Monument to the Third International.* Tate Papers.
https://www.tate.org.uk/documents/400/tate_papers_8_nathalie_leleu_the_model_of_vladimir_tatlins_monument_to_the_thi_96awbvl.pdf

### Para verificar
Lynton, N. (2008). *Tatlin's Tower: Monument to Revolution.* Yale University Press. Fecha y causa del abandono del proyecto.

### Imagen
Fotografía de Tatlin con el modelo (1920, atribuida a Nikolai Punin), que aparece como dominio público en Wikimedia Commons. **Licencia por verificar.**

---

## vstg-0003 — Plan Voisin

**Año propuesto:** 1925 (año en que se presentó y no se adoptó). **Categoría:** urbanismo. **Confianza:** media.

### Hechos
- Le Corbusier presentó el plan en 1925, dentro del Pabellón de l'Esprit Nouveau, en la Exposición de Artes Decorativas de París. El pabellón incluía dioramas de este plan y del plan para una ciudad de tres millones de habitantes (1922).
- Proponía demoler una gran parte del centro de París, incluidos los barrios del Marais, Archives y Temple, y reemplazarla por torres de oficinas de vidrio en un parque. Las fuentes dan unas 240 hectáreas.
- **Las cifras varían entre fuentes:** unas hablan de 18 torres cruciformes y otras de 20; la altura se da como 200 m o 60 pisos. Hay que contrastarlas con el *Oeuvre complète* o con la Fundación Le Corbusier.
- El plan no se realizó. El pabellón se demolió medio año después de la exposición, en 1926, y en 1977 se inauguró en Bolonia una réplica exacta.
- Una fuente señala que Brasilia se construyó como realización de ideas de Le Corbusier (conexión por confirmar).

### Hilo interpretativo
París se salvó por no ser aprobado un plan. Lo que quedó fue la discusión: si las ciudades se renuevan o se conservan. El mismo pabellón que mostró el plan desapareció y fue reconstruido como réplica, así que el rastro es doble: un plan que no se hizo y un edificio que se perdió y volvió a levantarse. La pregunta: ¿qué barrios actuales existen porque una propuesta radical no se aprobó?

### Texto para el sitio (EN)
- **[desc.]** Le Corbusier's 1925 proposal to replace part of central Paris, including the Marais, with glass towers set in parkland, shown as a diorama at the Esprit Nouveau pavilion.
- **[f.f. expl.]** A Paris cleared and rebuilt as a machine for modern life. It was never carried out, and the pavilion that displayed it was demolished in 1926. A replica of that pavilion stands in Bologna, and the argument about whether cities should be renewed or kept as they are goes on.

### Fuente principal
Página del Pabellón de l'Esprit Nouveau, con un extracto del propio Le Corbusier (*Oeuvre complète*, vol. 1):
https://www.archiweb.cz/en/b/pavilon-l-esprit-nouveau

### Para verificar
Shaw, M. *Promoting an Urban Vision: Le Corbusier and the Plan Voisin* (citado en la prensa). Le Corbusier (1925), *Urbanisme* (cita de memoria en el borrador anterior; no la he confirmado). Cifras de torres y hectáreas.

### Imagen
Dibujos del plan en la Fundación Le Corbusier. **Derechos reservados (ADAGP/FLC): pedir autorización o elegir otra imagen.** Alternativa: la réplica del pabellón en Bolonia (fotografía con licencia abierta, por buscar).

---

## vstg-0004 — Solicitudes a la Academia de Bellas Artes de Viena

**Año propuesto:** 1908 (segundo rechazo). **Categoría:** trayectoria personal. **Confianza:** media.

### Hechos
- Adolf Hitler solicitó ingreso a la Academia de Bellas Artes de Viena en 1907 y en 1908, y fue rechazado las dos veces.
- Según el biógrafo Volker Ullrich, el primer rechazo ocurrió antes de que se mudara a Viena, en 1908.
- Un material académico que cita a Price y a Fest dice que en octubre de 1907 se presentaron 113 candidatos y se aceptaron 28.
- Los jurados valoraron su dibujo de arquitectura, pero consideraron débil su dibujo de figuras humanas.
- La carrera de arquitectura quedaba cerrada porque no había terminado la secundaria.
- Su amigo August Kubizek sí fue aceptado en el conservatorio, y Hitler no se lo contó.
- **Las fuentes no coinciden en quién le aconsejó probar arquitectura**: hablan de un profesor, del director y del jurado. Ninguna da un nombre. No se puede identificar a «el profesor».
- Algunas fuentes sostienen que en 1908 no llegó a hacer el examen; otras, que fue rechazado de nuevo.

### Hilo interpretativo
Dos puertas se cerraron a la vez: la pintura, por el juicio de un jurado, y la arquitectura, por un requisito académico. Esa estructura de doble cierre es lo que hace de esta pieza un vestige. Más tarde, según History.com, la historia del artista frustrado pasó a formar parte del mito que él y sus seguidores construyeron. **El archivo no afirma una causalidad.** Presenta el rechazo como un hilo entre muchos y deja la conexión abierta. Hay que encontrar una fuente historiográfica (Kershaw o Ullrich) que respalde la cautela contra las explicaciones de una sola causa.

### Texto para el sitio (EN)
- **[desc.]** Two applications to the Academy of Fine Arts Vienna, in 1907 and 1908, both rejected.
- **[f.f. expl.]** A path as a painter that closed twice. The academy's jury judged his figure drawing weak, and the architecture route was blocked as well, because he had no secondary school diploma. Later, the story of the frustrated artist became part of the myth that he and his followers built around him. The archive keeps the closed door, not a cause.

### Fuente principal
Pruitt, S. History.com (basado en Ullrich, *Hitler: Ascent, 1889–1939*):
https://www.history.com/articles/adolf-hitler-artist-paintings-vienna

### Para verificar
Ullrich, V. (2016). *Hitler: Ascent, 1889–1939.* Kershaw, I. *Hitler: 1889–1936: Hubris.* Fest, J. *Hitler* (1973), p. 49. Museo del Holocausto de EE. UU., artículo «Adolf Hitler: Early Years, 1889–1913». Qué ocurrió exactamente en 1908.

### Imagen
**Decisión editorial pendiente.** Sugiero no usar pinturas de Hitler. Alternativas: la fachada de la Academia (Schillerplatz) o un documento de la época.

---

## vstg-0005 — Palacio de los Soviets

**Año propuesto:** por confirmar (c. 1941). **Categoría:** arquitectura / política. **Confianza:** media-alta.

### Hechos
- El palacio iba a ser un gran centro de congresos y administración cerca del Kremlin, sobre el solar de la Catedral de Cristo Salvador. Habría sido la estructura más alta del mundo (las fuentes dan 416 o 420 m).
- La catedral, consagrada en 1883, fue dinamitada el 5 de diciembre de 1931 por orden de Stalin.
- El palacio nunca se completó. El armazón de acero ya instalado se desmontó durante la Segunda Guerra Mundial para usarlo en puentes e infraestructuras. Las fuentes consultadas no dan el año exacto.
- Entre 1958 y 1960 los cimientos se convirtieron en la piscina Moskva, la mayor al aire libre de la Unión Soviética y una de las mayores del mundo.
- La piscina se demolió en 1994 y la catedral se reconstruyó entre 1995 y 2000 (hay una diferencia de un año según la fuente). La nueva catedral se consagró en 2000.
- Las fuentes dan razones distintas para la parálisis: la guerra y la falta de fondos.

### Hilo interpretativo
Un futuro fallido que dejó un hueco, y el hueco fue cambiando de uso: obra, piscina, catedral. Para construir un futuro se destruyó un pasado, y cuando el futuro fracasó, ese pasado fue reconstruido encima. Un artículo académico citado en una exposición de Harvard lee la reconstrucción como un intento de abandonar el pasado ateo y volver a las raíces rusas. La pregunta: ¿qué lugares actuales son, en realidad, el segundo capítulo de un proyecto abandonado?

### Texto para el sitio (EN)
- **[desc.]** Foundations and plans of the Palace of the Soviets, designed in Moscow as the tallest building in the world, on the site of the Cathedral of Christ the Saviour.
- **[f.f. expl.]** To build the palace, the cathedral was demolished in 1931. The palace was never finished: its steel frame was dismantled during the Second World War, and the foundation pit became one of the largest open-air swimming pools in the world. In the 1990s the pool was removed and the cathedral rebuilt on the same ground. A failed future left a hole, and the past was reconstructed inside it.

### Fuente principal
Architectuul, «Palace of the Soviets»:
https://architectuul.com/architecture/palace-of-the-soviets

### Para verificar
«Russia's Postcommunist Past: The Cathedral of Christ the Savior and the Reimagining of National Identity», *History and Memory* 21.1 (2009): 25–62. Año del desmontaje del armazón. Año de inicio de la reconstrucción (1994 o 1995).

### Imagen
Fotografías de la piscina Moskva o del solar. Buscar en Wikimedia Commons. **Licencia por verificar.**

---

## vstg-0006 — Plan para la Gran Bagdad

**Año propuesto:** 1958 (golpe de Estado de julio). **Categoría:** arquitectura / política. **Confianza:** media.

### Hechos
- Frank Lloyd Wright recibió en enero de 1957 el encargo de una ópera para Bagdad. Visitó la ciudad en mayo de 1957 y amplió el proyecto a un centro cultural, una universidad, museos, jardines y un bazar, en una isla del Tigris que rebautizó como «Edena».
- El rey Faisal II invitó también a Le Corbusier, Alvar Aalto, Gio Ponti, Walter Gropius y otros.
- En julio de 1958 un golpe militar derrocó a la monarquía y asesinó a Faisal II. El nuevo gobierno juzgó el plan demasiado extravagante y demasiado ligado al régimen anterior. Muchos planos se perdieron en el golpe.
- Según una fuente, el diseño de la ópera se reutilizó para el Grady Gammage Memorial Auditorium de la Universidad Estatal de Arizona. **Dato por verificar con la propia universidad.**
- La isla de Edena fue después un centro vacacional de las fuerzas de seguridad de Saddam Hussein.
- Una fuente añade que Zaha Hadid fue elegida para diseñar una ópera para Bagdad, y que después se le negó la financiación (por verificar).

### Hilo interpretativo
Un proyecto de modernización que dependía de un régimen que cayó antes de que nada se construyera. El futuro de una ciudad cambió con un golpe, no con un debate arquitectónico. Lo que sobrevivió fue el diseño, que viajó a otro lugar y sirvió a otro propósito. La pregunta: ¿cómo habría sido una capital pensada por arquitectos extranjeros para un país que ya no existe como se imaginaba?

### Texto para el sitio (EN)
- **[desc.]** Drawings of Frank Lloyd Wright's Plan for Greater Baghdad (1957–1958), a cultural centre, opera house and university planned for an island in the Tigris.
- **[f.f. expl.]** A modern capital imagined for a monarchy that was overthrown in 1958, before anything was built. The new government considered the plan too grand and too tied to the old regime. Part of the design lives on elsewhere: an opera house drawn for Baghdad was reused for a university auditorium in Arizona. The island later became a holiday resort for Saddam Hussein's security forces.

### Fuente principal
WNYC / Archivo Municipal de Nueva York, «Frank Lloyd Wright's Plan for Iraq»:
https://wnyc.org/story/44467-frank-lloyd-wrights-plan-for-iraq/

### Para verificar
Allison, J. (2008). «Arabian Opera Nights». *Opera* 59/1, pp. 26–30. Levine, N. *The Urbanism of Frank Lloyd Wright.* Sitio del Gammage Auditorium (ASU). Archivo de la Frank Lloyd Wright Foundation (MoMA / Avery Library).

### Imagen
Dibujos del Plan for Greater Baghdad (Frank Lloyd Wright Foundation Archives). **Derechos reservados: pedir autorización o buscar una imagen alternativa.**

---

## vstg-0007 — Apolo 18, 19 y 20

**Año propuesto:** 1970. **Categoría:** ciencia / espacio. **Confianza:** alta.

### Hechos
- El plan original del programa Apolo incluía misiones hasta la 20. La NASA canceló la Apolo 20 en enero de 1970, para usar su cohete Saturn V en la estación Skylab. En septiembre de 1970 canceló otras dos misiones tras más recortes.
- **La numeración es ambigua.** Según la NASA, las cancelaciones de septiembre fueron las misiones 15 y 19 del plan original, y las demás se renumeraron como 15 a 17. Por eso otras fuentes hablan de «Apolo 18 y 19».
- La producción de Saturn V se limitó a las 15 unidades ya encargadas.
- El presupuesto de la NASA bajó de más de 5.000 millones de dólares a mediados de los años sesenta a menos de 4.000 millones en 1969 y 1970. El presupuesto de Apolo se redujo casi a la mitad.
- Harrison Schmitt, que iba a ir en una de las misiones canceladas, fue reasignado a la Apolo 17.
- Skylab usó el último Saturn V y se estrelló el 11 de julio de 1979.
- Según una fuente (un pódcast, a contrastar), el módulo lunar de la Apolo 19 nunca se terminó y se expone en el Cradle of Aviation Museum, en Long Island.

### Hilo interpretativo
Tres alunizajes que desaparecieron por presupuesto, y no por fallo técnico. La falta de interés público se tradujo en falta de interés del Congreso, y eso en menos dinero. Los cohetes que quedaron se reasignaron a otro futuro: una estación en órbita baja. La pregunta: ¿qué se habría descubierto en esos lugares, y qué dirección habría tomado la exploración humana?

### Texto para el sitio (EN)
- **[desc.]** Flight plans, landing-site studies and unfinished hardware of the lunar missions that followed Apollo 17, cancelled in 1970.
- **[f.f. expl.]** More lunar landings were planned and then cancelled as budgets shrank. Their rockets were reassigned: the last Saturn V launched the Skylab station. A lunar module built for the later missions was never completed. The cancelled landings remain as a list of places that no one visited.

### Fuente principal
NASA NSSDC, «Apollo 18 through 20 – The Cancelled Missions»:
https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_18_20.html

### Para verificar
Benson, C. y Faherty, W. *Moonport: A History of Apollo Launch Facilities and Operations* (NASA SP-4204). Ubicación actual del módulo lunar de la Apolo 19. Aclarar la numeración antes de publicar.

### Imagen
Material de la NASA (en general de dominio público, pero conviene verificar cada imagen). Opción: el módulo lunar expuesto en el museo.

---

## vstg-0008 — Cohete N1

**Año propuesto:** 1976 (cancelación oficial; el programa se suspendió en 1974). **Categoría:** ciencia / espacio. **Confianza:** media-alta.

### Hechos
- El N1 era el cohete superpesado soviético concebido para llevar cosmonautas a la Luna, contraparte del Saturn V.
- Los cuatro lanzamientos, entre 1969 y 1972, fallaron. El segundo cayó sobre su propia plataforma poco después del despegue.
- Una fuente atribuye los fallos a que no se hicieron pruebas estáticas del conjunto de 30 motores y de su sistema de alimentación.
- El desarrollo del N1-L3 empezó en octubre de 1965, casi cuatro años después del Saturn V, con poca financiación. La muerte del diseñador jefe Sergei Korolev, en 1966, afectó al programa.
- El programa se suspendió en 1974 y se canceló oficialmente en 1976.
- Los motores NK-33, construidos para una versión mejorada del N1 cancelada en 1974, se adaptaron a partir de 2013 para cohetes actuales: el Antares estadounidense y el Soyuz 2.1v ruso.

### Hilo interpretativo
Una carrera que uno de los participantes perdió antes de que se supiera. Los motores sobrevivieron al cohete, y siguen volando en otros: el futuro fallido está, literalmente, en el presente. Hay que investigar con qué rapidez y de qué modo se hizo pública la existencia del programa (dato no confirmado aquí). La pregunta: ¿cuánto de lo que funciona hoy proviene de algo que fracasó?

### Texto para el sitio (EN)
- **[desc.]** The N1, the Soviet super-heavy rocket designed to take cosmonauts to the Moon. All four launch attempts, between 1969 and 1972, failed.
- **[f.f. expl.]** A lunar landing that was prepared and never achieved. The programme was suspended in 1974 and cancelled in 1976. Its engines outlived it: the NK-33, built for an improved version of the N1, was adapted from 2013 for rockets that fly today.

### Fuente principal
https://en.wikipedia.org/wiki/N1_(rocket)

### Para verificar
Lardier, C. y Barensky, S. (2013). *The Soviet Space Race with Apollo.* (confirmar referencia). Año en que el programa se hizo público.

### Imagen
Fotografías del N1 en Baikonur (1969), probablemente de dominio público en Wikimedia Commons. **Licencia por verificar.**

---

## vstg-0009 — Len Bias

**Año propuesto:** 1986. **Categoría:** deporte / política. **Confianza:** media-alta.

*Nota de tono:* esta ficha trata de una muerte. El texto debe mantenerse factual y respetuoso.

### Hechos
- Len Bias, delantero de la Universidad de Maryland, fue elegido segundo en el draft de la NBA de 1986 por los Boston Celtics, campeones vigentes.
- Murió el 19 de junio de 1986, dos días después, a los 22 años, por una arritmia cardíaca provocada por cocaína.
- En el Congreso se empezó a redactar legislación contra las drogas pocas semanas después. La Ley Contra el Abuso de Drogas de 1986 se firmó el 27 de octubre de 1986 y se conoce como «Len Bias Law». Estableció condenas mínimas obligatorias.
- Un artículo de derecho señala que su muerte se citó once veces en el debate legislativo, aunque murió por cocaína en polvo, mientras el temor público giraba en torno al crack. El representante Tip O'Neill, por Boston, impulsó la ley.
- Una ley posterior (Fair Sentencing Act) cambió los umbrales de las condenas; el artículo indica que las mínimas obligatorias siguieron vigentes durante décadas.
- Los Celtics le entregaron a su madre el jersey número 30 que nunca llegó a usar. En 2021 ingresó en el Salón de la Fama del baloncesto universitario.

### Hilo interpretativo
Dos futuros cortados a la vez. El deportivo: el jugador que la prensa comparaba con Michael Jordan. El social: una ley aprobada con rapidez bajo el impacto de su muerte, que después se interpretó como desproporcionada. El primero lo perdió una persona; el segundo, muchas otras. El vestige físico es el jersey sin usar. La pregunta: ¿qué decisiones colectivas se toman a partir de una sola imagen?

### Texto para el sitio (EN)
- **[desc.]** The unused number 30 Celtics jersey of Len Bias, chosen second overall in the 1986 NBA draft and dead two days later, at 22.
- **[f.f. expl.]** A career that the press already compared to Michael Jordan's. His death in June 1986 became the face of a national alarm about cocaine. Within months Congress passed the Anti-Drug Abuse Act, known as the Len Bias law, which set mandatory minimum sentences that stayed in force for decades. The future that failed was a player's; the one that followed belonged to many people who never knew him.

### Fuente principal
Lassen, F. (2015). «A Cracked Remedy: The Anti-Drug Abuse Act». *Temple Law Review* 87: 645.
https://www.templelawreview.org/lawreview/assets/uploads/2015/06/Fabens-Lassen-87-Temp.-L.-Rev.-645.pdf

### Para verificar
Duración exacta de las condenas mínimas y fecha de su reforma. Detalles de la causa de la muerte y del debate legislativo en fuentes primarias (Congressional Record).

### Imagen
**Evitar fotografías de la persona** (derechos y tono). Opción: un jersey de los Celtics con el número 30, o un objeto neutro de archivo.

---

## Discrepancias entre fuentes (resumen)

- **Orion:** cancelación en 1964 o 1965.
- **Plan Voisin:** 18 o 20 torres; 200 m o 60 pisos.
- **Hitler:** quién le sugirió probar arquitectura (profesor, director, jurado); si en 1908 llegó a examinarse.
- **Palacio de los Soviets:** inicio de la reconstrucción de la catedral (1994 o 1995); altura (416 o 420 m); motivo de la parálisis.
- **Apolo:** qué misiones se cancelaron en septiembre de 1970, según la numeración original o la renumerada.
- **N1:** suspensión en 1974 o cancelación en 1976.

---

## Correcciones al sitio actual

El sitio publicado todavía muestra los borradores de las posiciones 0001 a 0004 con la leyenda `[pendiente: verificar]` bajo la fuente. Recomiendo:

1. **Ocultar o reemplazar** esas entradas hasta que estén revisadas.
2. **Hitler (0004):** el texto actual dice que los historiadores discuten cuánto pesa un solo punto de inflexión. Esa afirmación la escribí de memoria y no tengo una fuente que la respalde. Sustituir por el texto de esta ficha.
3. **Tatlin (0002) y Plan Voisin (0003):** las citas del borrador (Lodder, 1983; Le Corbusier, *Urbanisme*, 1925) no las he podido confirmar. Usar las fuentes de estas fichas.

---

## Plan para las 191 posiciones restantes

Propongo avanzar en tandas de 10 a 15 fichas. Una distribución de partida, que puedes cambiar:

| Categoría | Posiciones |
|---|---|
| Arquitectura y urbanismo (proyectos no construidos, ciudades planeadas) | 35 |
| Ciencia, tecnología y espacio (programas cancelados, inventos abandonados) | 35 |
| Política y acuerdos (tratados, reformas, constituciones, movimientos truncados) | 30 |
| Trayectorias personales (deporte, arte, ciencia, música, política) | 40 |
| Cultura, lengua e instituciones (idiomas, calendarios, escrituras, bibliotecas) | 25 |
| Vida cotidiana y colectiva (oficios, barrios, costumbres que desaparecieron) | 26 |

**Cómo construyo las conexiones cuando el futuro fallido no es explícito.** Cada ficha sigue la misma cadena: el hecho que cerró el camino, el rastro que queda hoy, y la pregunta que deja. Las lecturas se marcan siempre como interpretación, con su fuente cuando existe.

**Para la categoría de trayectorias personales,** el criterio es que la caída esté documentada en prensa o en biografías, y que el archivo describa el camino cerrado sin atribuirle causas únicas.

### Candidatos para la próxima tanda (sin verificar, de memoria)

Estos nombres son ideas de búsqueda. No son hechos y no deben usarse hasta que cada uno tenga su ficha:

- El caballo de Leonardo da Vinci (*Il Cavallo*).
- El Senado de EE. UU. y la Sociedad de Naciones (1919–1920).
- El avión de propulsión nuclear (programa de EE. UU.).
- La Operación Plowshare (usos pacíficos de explosiones nucleares).
- El zepelín tras el desastre del Hindenburg (1937).
- Trayectorias deportivas interrumpidas por lesiones (por investigar, con casos de prensa documentados).
- Calendarios y sistemas de medida alternativos (calendario republicano francés, hora decimal).
- Lenguas planificadas (esperanto) y su declive.
