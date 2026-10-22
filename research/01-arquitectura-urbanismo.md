# 01. Arquitectura y urbanismo

**Fichas:** 40 de 40  ·  **Nivel:** documented en 40, hypothesis en 0, pending en 0

Este documento sirve a dos publicaciones con el mismo contenido:

- **Plataforma (repositorio):** para cada vestigio, solo lo que se ve en la web: código, nombre, [desc.], [f.f. expl.] y dónde ver la información (fuente y enlace). Va en inglés. Está en `research/json/01-arquitectura-urbanismo.json`, que se importa desde `/admin`.
- **Editorial:** lo que no cabe en la web: contexto, la conexión con el presente, notas de verificación y el estado de cada dato. Va en español en este documento. Es la base del libro y del texto editorial.

## Decisiones que hay que confirmar

1. **Código público.** Se usa `vstg.AAAA` (año), con punto, como se propuso: por ejemplo `vstg.1920`. Cuando dos o más vestigios comparten año se añade una letra (`vstg.1922.a`, `vstg.1922.b`). La letra es el sufijo `suffix` del JSON. En esta categoría hay 7 años con colisión, que afectan a 17 vestigios. El código de la web (`displayCode` en `src/lib/demo-collection.ts`) ya usa `vstg.${year}`; solo hay que añadir el sufijo: `vstg.${year}.${suffix}`. Esto no está hecho todavía.
2. **Año NA.** Solo el Palacio de los Soviets queda con `vstg.NA`, porque su año de fracaso no está confirmado.
3. **Tatlin.** Cambié su año a 1920 (año del modelo) en lugar de NA. Confírmalo.
4. **Identificador interno.** `vstg-0001` … `vstg-0040` sigue siendo el ID de inventario. No se muestra en la web.

## Cómo leer las fichas

- **Nivel `documented`:** existe en una fuente publicada. Los detalles marcados como pendientes se confirman antes de publicar la pieza.
- **Nivel `hypothesis`:** no hay fuente que lo documente. Se marca así en el texto. Ninguna ficha de esta categoría llega a ese nivel.
- **Lectura (conexión con el presente):** es interpretación editorial, no un hecho. Siempre se presenta como lectura.

---

## vstg.1920 — Monument to the Third International, 1919–1920

**Código ID:** vstg-0001  ·  **Nivel:** documented  ·  **Estado:** Investigada. Año cambiado a 1920 (año del modelo). Falta la imagen.

### Plataforma

**[desc.]** Model of a 400-metre double helix of iron and glass designed by Vladimir Tatlin in 1919–1920 as the headquarters of the Communist International in Petrograd. Only models were built.

**[f.f. expl.]** A tower meant to be both headquarters and monument of a new international order. It was never built. The model survives, and so do reconstructions made decades later: a future that exists today only as a replica of its own promise.

**Fuente:** Leleu, N. (2007). The Model of Vladimir Tatlin's Monument to the Third International. Tate Papers.

**Enlace:** https://www.tate.org.uk/documents/400/tate_papers_8_nathalie_leleu_the_model_of_vladimir_tatlins_monument_to_the_thi_96awbvl.pdf

**Licencia de la imagen:** Pendiente: verificar licencia de la imagen

### Editorial

**Contexto.** Proyecto de 1919–1920 para la sede de la Tercera Internacional. Nunca se construyó; sobrevivieron maquetas y reconstrucciones posteriores.

**Lectura (interpretación editorial).** El edificio como promesa: una obra que existe solo como réplica de su propia ambición. Sirve de contrapunto a la idea de que la arquitectura anuncia el futuro y que el futuro la desmiente.

**Notas de verificación.** El año de 1920 es el del modelo, no el del fracaso definitivo; se usa como código porque la fecha de cancelación formal no está documentada.

---

## vstg.1925.a — Plan Voisin de Paris, 1925

**Código ID:** vstg-0002  ·  **Nivel:** documented  ·  **Estado:** Investigada. Cifras de torres (18 o 20) y altura por contrastar.

### Plataforma

**[desc.]** Le Corbusier's 1925 proposal to replace part of central Paris, including the Marais, with glass towers set in parkland. Shown as a diorama at the Esprit Nouveau pavilion.

**[f.f. expl.]** A Paris cleared and rebuilt as a machine for modern life. It was never carried out, and the pavilion that displayed it was demolished in 1926. A replica of that pavilion stands in Bologna, and the argument about whether cities should be renewed or kept goes on.

**Fuente:** Le Corbusier, Oeuvre complète, vol. 1 (extracto publicado por Archiweb sobre el Pavillon de l'Esprit Nouveau).

**Enlace:** https://www.archiweb.cz/en/b/pavilon-l-esprit-nouveau

**Licencia de la imagen:** Derechos reservados (ADAGP/FLC): pedir autorización o buscar otra imagen

### Editorial

**Contexto.** Maqueta presentada en el Pavillon de l'Esprit Nouveau (1925). Continúa la Ville Contemporaine de 1922 y precede a la Ville Radieuse.

**Lectura (interpretación editorial).** Demoler para construir de nuevo como método. El plan dejó una pregunta que el siglo XX no resolvió: si una ciudad se renueva o se conserva.

**Notas de verificación.** Año 1925 colisiona con el código de Lissitzky; se usa el sufijo 'a' para Plan Voisin.

---

## vstg.NA — Palace of the Soviets, Moscow, 1931

**Código ID:** vstg-0003  ·  **Nivel:** documented  ·  **Estado:** Investigada. Altura (416 o 420 m), año del desmontaje y año de la reconstrucción (1994 o 1995) por contrastar. Año sin confirmar: código NA.

### Plataforma

**[desc.]** Plans for the Palace of the Soviets, a congress hall and administrative centre planned on the site of the Cathedral of Christ the Saviour, near the Kremlin.

**[f.f. expl.]** To build the palace, the cathedral was dynamited in 1931. The palace was never finished: its steel frame was dismantled during the Second World War, and the foundations became one of the largest open-air swimming pools in the world. In the 1990s the pool was removed and the cathedral rebuilt on the same ground. A failed future left a hole, and the past was reconstructed inside it.

**Fuente:** Architectuul, "Palace of the Soviets". Y Tsereteli reconstruction: Harvard, Russia's Postcommunist Past, History and Memory 21.1 (2009).

**Enlace:** https://architectuul.com/architecture/palace-of-the-soviets

**Licencia de la imagen:** Pendiente: verificar licencia de la imagen

### Editorial

**Contexto.** Proyecto soviético de 1931 para un gran palacio de congresos en el lugar de la catedral del Cristo Salvador, junto al Kremlin.

**Lectura (interpretación editorial).** Un futuro que dejó un hueco. La reconstrucción de la catedral en el mismo solar convierte el fracaso en una pregunta sobre qué pasado se reconstruye.

**Notas de verificación.** Año NA por regla del proyecto (año no confirmado). Hipótesis si se decide: c. 1941, por el desmontaje de la estructura durante la guerra.

---

## vstg.1958.d — Plan for Greater Baghdad, 1957–1958

**Código ID:** vstg-0004  ·  **Nivel:** documented  ·  **Estado:** Investigada. Corregido: se quitó del texto público la afirmación sobre el uso de la isla por la seguridad de Sadam Husein (no verificada). Pendiente: reutilización de la ópera en Arizona.

### Plataforma

**[desc.]** Drawings of Frank Lloyd Wright's Plan for Greater Baghdad: a cultural centre, opera house and university planned for an island in the Tigris.

**[f.f. expl.]** A modern capital imagined for a monarchy that was overthrown in 1958, before anything was built.

**Fuente:** WNYC / NYC Municipal Archives, "Frank Lloyd Wright's Plan for Iraq" (2010). Allison, J. (2008), "Arabian Opera Nights", Opera 59/1.

**Enlace:** https://wnyc.org/story/44467-frank-lloyd-wrights-plan-for-iraq/

**Licencia de la imagen:** Derechos reservados (Frank Lloyd Wright Foundation Archives): pedir autorización

### Editorial

**Contexto.** Plan de Wright para Bagdad, 1957–1958, con centro cultural, ópera y universidad en una isla del Tigris. La monarquía iraquí cayó en julio de 1958.

**Lectura (interpretación editorial).** Una capital moderna diseñada para un régimen que ya no existía al terminar el dibujo. El futuro era de otro.

**Notas de verificación.** Pendiente de verificar: (1) la reutilización del diseño de la ópera en el Gammage Auditorium de Arizona State University, según un artículo del Observer; (2) el uso posterior de la isla como complejo vacacional de los servicios de seguridad.

---

## vstg.1784 — Cenotaph for Isaac Newton

**Código ID:** vstg-0005  ·  **Nivel:** documented  ·  **Estado:** Investigada: fecha y autoría confirmadas en el repositorio del MIT.

### Plataforma

**[desc.]** Étienne-Louis Boullée's design for a spherical cenotaph to Isaac Newton: a vast sphere whose interior, pierced by points of light, would represent the night sky.

**[f.f. expl.]** An architecture that would have made the building itself an astronomical instrument. Designed as a monument to science, the sphere was never raised, but its drawings became a reference for visionary architecture.

**Fuente:** MIT Libraries, Dome, "Cenotaph for Newton" (1784). Library of Congress, item 2021669836.

**Enlace:** https://dome.mit.edu/handle/1721.3/21287

**Licencia de la imagen:** Dominio público (dibujo de 1784; Boullée murió en 1799). Verificar la fuente de la imagen.

### Editorial

**Contexto.** Proyecto de Boullée para un cenotafio de Newton, de forma esférica, hacia 1784. Es un monumento a la ciencia y no a una persona.

**Lectura (interpretación editorial).** Un edificio que pretende ser el propio cosmos. Sirve para hablar de la ambición de la arquitectura ilustrada de convertirse en instrumento de conocimiento.

**Notas de verificación.** Año 1784 confirmado en la ficha del MIT.

---

## vstg.1834 — Royal Palace on the Acropolis, Athens

**Código ID:** vstg-0006  ·  **Nivel:** documented  ·  **Estado:** Investigada con fuente secundaria. Fecha 1834 por confirmar en fuente primaria (Schinkel, Late Projects).

### Plataforma

**[desc.]** Karl Friedrich Schinkel's plan for a royal palace on the Acropolis of Athens, drawn for King Otto of Greece, placing a new classical palace among the ancient ruins.

**[f.f. expl.]** A Greece in which the Acropolis would have housed a modern royal residence beside its ruins. The state chose the ruin; the palace was built elsewhere, in the centre of Athens.

**Fuente:** Archaeology Wiki, "Royal palace and Greek architecture: K. F. Schinkel's plans for the palace on the Acropolis of Athens".

**Enlace:** https://www.archaeology.wiki/blog/issue/royal-palace-and-greek-architecture-k-f-schinkels-plans-for-the-palace-on-the-acropolis-of-athens/

**Licencia de la imagen:** Dibujos de Schinkel (murió en 1841): dominio público. Verificar la imagen.

### Editorial

**Contexto.** Propuesta de Schinkel para Otto de Grecia. El palacio real se construyó finalmente en la plaza Syntagma (1836–1842).

**Lectura (interpretación editorial).** La pregunta de qué época tiene derecho a ocupar un monumento. El Acropolis fue una capital de la antigüedad y un proyecto de la modernidad que el Estado griego rechazó.

**Notas de verificación.** Fuente de calidad media. Confirmar con Schinkel: Late Projects (2004) o la colección de la Schinkel-Museum.

---

## vstg.1904 — Cité Industrielle

**Código ID:** vstg-0007  ·  **Nivel:** documented  ·  **Estado:** Investigada. Cifra de 35.000 habitantes por confirmar en el libro original de 1917.

### Plataforma

**[desc.]** Tony Garnier's model city for about 35,000 inhabitants, with separate zones for industry, housing and leisure, developed between 1901 and 1904 and published in 1917.

**[f.f. expl.]** A city planned as a single industrial organism: separated zones, public housing, hospitals and sports grounds laid out on hills and along the river. It stayed a set of drawings. Its zoning ideas reached later planners; the city itself was never built.

**Fuente:** Britannica, "Cité Industrielle".

**Enlace:** https://britannica.com/print/article/118760

**Licencia de la imagen:** Tony Garnier (murió en 1948): dominio público en la UE desde 2019. Verificar la imagen.

### Editorial

**Contexto.** Ciudad modelo de Garnier, desarrollada entre 1901 y 1904 y publicada en 1917. Anticipa la zonificación del urbanismo funcionalista.

**Lectura (interpretación editorial).** Una ciudad que separa el trabajo, la casa y el ocio como si fueran órganos. La zonificación que aquí es utopía acabó siendo norma en casi todas las ciudades del siglo XX.

**Notas de verificación.** Cifras por confirmar con la edición original (Une cité industrielle, 1917).

---

## vstg.1908 — Hotel project for New York

**Código ID:** vstg-0008  ·  **Nivel:** documented  ·  **Estado:** Investigada con fuente secundaria. Fecha y altura por confirmar en fuentes de la Fundación Gaudí.

### Plataforma

**[desc.]** Antoni Gaudí's unbuilt skyscraper hotel for Manhattan, designed in 1908: a tower of about 360 metres, with the organic forms of his Catalan work applied to the American skyline.

**[f.f. expl.]** A New York where Catalan modernism would have crowned Manhattan with a hotel tower. Gaudí never left Barcelona for this project, and the tower was never raised.

**Fuente:** 6sqft, "A La Sagrada Familia in Manhattan? See the Unbuilt NYC Gaudí".

**Enlace:** https://www.6sqft.com/a-la-sagrada-familia-in-manhattan-see-the-unbuilt-nyc-gaudi/

**Licencia de la imagen:** Dibujos de Gaudí (murió en 1926): dominio público. Verificar la imagen.

### Editorial

**Contexto.** Proyecto de hotel en Nueva York atribuido a Gaudí hacia 1908, con una torre de unos 1.180 pies.

**Lectura (interpretación editorial).** El modernismo catalán imaginado en el centro financiero del mundo. Un ejemplo de cómo un estilo local aspira a la escala global.

**Notas de verificación.** Revisar en el catálogo de la Fundació Gaudí si la fecha de 1908 se confirma. La fuente es un artículo de divulgación.

---

## vstg.1914 — Città Nuova

**Código ID:** vstg-0009  ·  **Nivel:** documented  ·  **Estado:** Investigada. Fuentes de Google Arts & Culture (Pinacoteca Civica di Como) disponibles para la imagen.

### Plataforma

**[desc.]** Antonio Sant'Elia's drawings for the Città Nuova, a futurist city of towers, elevated roads and multi-level stations, shown in 1914 in Milan.

**[f.f. expl.]** A city where traffic runs on several levels and the old street is replaced by the machine. Sant'Elia died in 1916 in the war; the city was never built.

**Fuente:** Britannica, "Città Nuova".

**Enlace:** https://www.britannica.com/topic/Citta-Nuova

**Licencia de la imagen:** Dibujos de Sant'Elia (murió en 1916): dominio público. Verificar la imagen.

### Editorial

**Contexto.** Serie de dibujos de 1914, presentados en el marco de la exposición de Nuove Tendenze. Manifiesto futurista de arquitectura.

**Lectura (interpretación editorial).** El futuro como infraestructura: la ciudad como red de movimiento. Es el futuro que el siglo XX heredó como autopista.

**Notas de verificación.** Año de muerte de Sant'Elia (1916) confirmado en Britannica.

---

## vstg.1917 — Alpine Architecture

**Código ID:** vstg-0010  ·  **Nivel:** documented  ·  **Estado:** Investigada. Fecha de dibujo (1917) y de publicación (1919) confirmadas en la ADK.

### Plataforma

**[desc.]** Bruno Taut's series of glass and crystal buildings for an alpine landscape, drawn in 1917 and published in 1919 as Alpine Architektur: temples, towers and houses of glass.

**[f.f. expl.]** An architecture of light in which cities give way to mountain temples and glass cathedrals. Its drawings were never built; the ideas passed into the Glass Chain of 1919–1920.

**Fuente:** Akademie der Künste (ADK), "Bruno Taut. Alpine Architektur".

**Enlace:** https://digital.adk.de/en/bruno-taut-alpine-architektur

**Licencia de la imagen:** Taut (murió en 1938): dominio público. Verificar la licencia de la imagen de la ADK.

### Editorial

**Contexto.** Serie de dibujos de Taut de 1917, publicada en 1919. Prolonga la idea de arquitectura de vidrio.

**Lectura (interpretación editorial).** La utopía de vidrio como respuesta a la guerra: un proyecto para un país que todavía no existe tras el fin del conflicto.

**Notas de verificación.** Año de dibujo 1917, año de publicación 1919: se usa 1917.

---

## vstg.1919 — Glass Chain correspondence

**Código ID:** vstg-0011  ·  **Nivel:** documented  ·  **Estado:** Investigada. Miembros y fechas confirmados en Wikipedia; falta una fuente primaria.

### Plataforma

**[desc.]** A chain of letters, November 1919 to December 1920, among German architects started by Bruno Taut. Each member proposed glass buildings and utopian cities under a pseudonym.

**[f.f. expl.]** A visionary architecture written in letters rather than built. Its members' glass towers and crystal cathedrals were never realised, though the correspondence laid groundwork for German Expressionist architecture.

**Fuente:** Wikipedia, "Glass Chain" (the correspondence, 1919–1920; members listed with pseudonyms).

**Enlace:** https://en.wikipedia.org/wiki/Glass_Chain

**Licencia de la imagen:** Obras de los miembros con derechos vigentes en varios casos (Gropius, Scharoun). Verificar cada imagen.

### Editorial

**Contexto.** Correspondencia de 1919–1920 entre arquitectos alemanes, iniciada por Taut, con seudónimos. Trece miembros.

**Lectura (interpretación editorial).** Una comunidad de arquitectos que imagina sin construir: la carta como espacio de la utopía. Pregunta qué hace falta para que una propuesta llegue a existir.

**Notas de verificación.** Código 1919 para evitar colisión con Tatlin (1920). Miembros: Brückman, Finsterlin, Gösch, Göttel, Gropius, Hablik, Hansen, Krayl, Luckhardt (W. y H.), Scharoun, B. Taut y M. Taut.

---

## vstg.1921 — Glass Skyscraper, Berlin

**Código ID:** vstg-0012  ·  **Nivel:** documented  ·  **Estado:** Investigada con fuente secundaria. Fecha 1921 y nombre del concurso por confirmar en el catálogo del MoMA o la Galerie Grisebach.

### Plataforma

**[desc.]** Ludwig Mies van der Rohe's unbuilt glass skyscraper for Friedrichstraße, Berlin: a free-form tower whose walls are entirely glass, submitted to a competition and shown in models and drawings.

**[f.f. expl.]** A tower in which the whole facade is glass, so that the city is reflected in its walls. The Berlin tower was never built; similar towers were erected decades later in other cities.

**Fuente:** designboom, "unbuilt Mies van der Rohe skyscrapers brought to life in ZUMO's digital tribute" (2021).

**Enlace:** https://www.designboom.com/architecture/unbuilt-mies-van-der-rohe-skyscrapers-brought-to-life-zumo-04-27-2021/

**Licencia de la imagen:** Dibujos de Mies (murió en 1969): derechos vigentes (Mies van der Rohe Archive, MoMA). Pedir autorización.

### Editorial

**Contexto.** Proyecto de rascacielos de cristal para Friedrichstraße, 1921–1922. Uno de los primeros proyectos de Mies sin estructura visible.

**Lectura (interpretación editorial).** Un edificio que no tiene interior ni exterior: el cristal convierte la ciudad en su propia fachada. Un futuro estético que el siglo XX construyó sin el manifiesto.

**Notas de verificación.** Fuente secundaria. Confirmar fecha y concurso con el MoMA o la Galerie Grisebach.

---

## vstg.1922.a — Ville Contemporaine

**Código ID:** vstg-0013  ·  **Nivel:** documented  ·  **Estado:** Investigada. Cifra de tres millones de habitantes confirmada en Wikipedia; falta fuente primaria.

### Plataforma

**[desc.]** Le Corbusier's Contemporary City for three million inhabitants, shown at the 1922 Salon d'Automne: cruciform skyscrapers set in parkland, with traffic on elevated roads.

**[f.f. expl.]** A city that would empty the old streets and replace them with towers in a park, for three million people. It was never built; its ideas returned in the Plan Voisin and the Ville Radieuse.

**Fuente:** Wikipedia, "Ville Contemporaine".

**Enlace:** https://en.wikipedia.org/wiki/Ville_Contemporaine

**Licencia de la imagen:** Obras de Le Corbusier (murió en 1965): derechos vigentes (FLC/ADAGP). Pedir autorización.

### Editorial

**Contexto.** Propuesta presentada en el Salon d'Automne de 1922. Precursora del Plan Voisin de 1925.

**Lectura (interpretación editorial).** La ciudad como máquina de vivir: la idea de que el suelo urbano es un recurso que se libera para los edificios. Una lógica que todavía organiza muchos barrios de vivienda.

**Notas de verificación.** Año 1922 colisiona con el código de Gropius y Meyer. Sufijo 'a' asignado a Le Corbusier.

---

## vstg.1922.b — Chicago Tribune Tower competition entry

**Código ID:** vstg-0014  ·  **Nivel:** documented  ·  **Estado:** Investigada. Participación confirmada en Wikipedia. Falta el número del concurso y la fuente primaria.

### Plataforma

**[desc.]** Walter Gropius and Adolf Meyer's entry to the 1922 Chicago Tribune Tower competition: a sheer, modern steel-and-glass tower, submitted and not chosen.

**[f.f. expl.]** The modern tower competed with the Gothic one and lost. Chicago built the Gothic tower; the modern proposal stayed on paper, and the competition became a branching point in the history of the skyscraper.

**Fuente:** Wikipedia, "Adolf Meyer (architect)".

**Enlace:** https://en.wikipedia.org/wiki/Adolf_Meyer_(architect)

**Licencia de la imagen:** Derechos vigentes de los autores (Gropius d. 1969, Meyer d. 1929). Verificar la imagen.

### Editorial

**Contexto.** Entrada de Gropius y Meyer al concurso del Tribune (1922). Ganó la propuesta neogótica de Howells y Hood.

**Lectura (interpretación editorial).** Un concurso como encrucijada: la misma pregunta, dos respuestas, y el futuro que gana es el pasado con otro nombre. El Bauhaus perdió en Chicago.

**Notas de verificación.** Año 1922 colisiona con Le Corbusier. Sufijo 'b'. El Tribune dedicó un concurso a 263 entradas; confirmar cifra antes de publicar.

---

## vstg.1923 — Palace of Labour, Moscow

**Código ID:** vstg-0015  ·  **Nivel:** documented  ·  **Estado:** Investigada con fuente secundaria. Año 1923 y estructura por confirmar en fuente primaria.

### Plataforma

**[desc.]** The brothers Alexander and Leonid Vesnin's constructivist design for a Palace of Labour in Moscow: stacked volumes and bridges for workers' organizations.

**[f.f. expl.]** A palace where the workers' organizations would have their city centre. The project remained a design; the constructivist ideals it expressed were overtaken by Stalin's classicism.

**Fuente:** Wikipedia, "Alexander Vesnin".

**Enlace:** https://en.wikipedia.org/wiki/Alexander_Vesnin

**Licencia de la imagen:** Dibujos de los Vesnin (Alexander murió en 1959; Leonid en 1933): verificar la licencia de cada imagen.

### Editorial

**Contexto.** Proyecto de concurso de los hermanos Vesnin, Moscú, hacia 1923.

**Lectura (interpretación editorial).** El constructivismo como promesa de un edificio para el trabajo. Su derrota es el fin de un vocabulario: el de la fábrica como forma de la ciudad.

**Notas de verificación.** Detalles del proyecto pendientes de fuente primaria (Museo Thyssen, colección Vesnin).

---

## vstg.1924.a — High-Rise City (Hochhausstadt)

**Código ID:** vstg-0016  ·  **Nivel:** documented  ·  **Estado:** Investigada. Obra en el Art Institute of Chicago confirmada.

### Plataforma

**[desc.]** Ludwig Hilberseimer's High-Rise City, 1924: a city of uniform skyscrapers arranged on a grid, with traffic and green space separated from the towers.

**[f.f. expl.]** A city made entirely of towers on a grid, where the street at human scale disappears. It was never built; its separation of traffic and housing shaped later zoning debates.

**Fuente:** Art Institute of Chicago, "Highrise City (Hochhausstadt): Perspective View: North-South Street".

**Enlace:** https://www.artic.edu/artworks/101044/highrise-city-hochhausstadt-perspective-view-north-south-street

**Licencia de la imagen:** Dominio público o licencia del Art Institute of Chicago (verificar en la ficha del museo).

### Editorial

**Contexto.** Dibujo de Hilberseimer, 1924, de su propuesta para una ciudad de rascacielos. Ligada a la Bauhaus y a su teoría urbana.

**Lectura (interpretación editorial).** La ciudad como retícula absoluta. Una idea que el urbanismo del siglo XX aplicó en partes y rechazó en el conjunto.

**Notas de verificación.** Año 1924 colisiona con Wright. Sufijo 'a' asignado a Hilberseimer.

---

## vstg.1924.b — Gordon Strong Automobile Objective

**Código ID:** vstg-0017  ·  **Nivel:** documented  ·  **Estado:** Investigada con fuente secundaria. Año 1924 y ubicación por confirmar en la Frank Lloyd Wright Foundation.

### Plataforma

**[desc.]** Frank Lloyd Wright's design for a ziggurat-shaped tower on a Maryland hill, with a spiral ramp that let motorists drive to the top.

**[f.f. expl.]** A monument designed for the car: the ramp replaces the stair. The tower was never built; it reads now as a precursor to the car-based landscape of the twentieth century.

**Fuente:** Hagerty Media, "Frank Lloyd Wright's unbuilt ziggurat revolved around the automobile".

**Enlace:** https://hagerty.com/media/?p=80686

**Licencia de la imagen:** Obra de Frank Lloyd Wright (murió en 1959): derechos de la Frank Lloyd Wright Foundation. Pedir autorización.

### Editorial

**Contexto.** Diseño de Wright de 1924 para Gordon Strong, para una colina cerca de Baltimore.

**Lectura (interpretación editorial).** Un monumento para el automóvil: el paisaje como vista que se recorre en coche. Una pregunta que el siglo XX respondió con carreteras y no con torres.

**Notas de verificación.** Año 1924 colisiona con Hilberseimer. Sufijo 'b' asignado a Wright.

---

## vstg.1925.b — Wolkenbügel (Cloud Iron)

**Código ID:** vstg-0018  ·  **Nivel:** documented  ·  **Estado:** Investigada con fuente secundaria (conferencia y libro de Anderson). Fecha 1924–1925 por confirmar.

### Plataforma

**[desc.]** El Lissitzky's Wolkenbügel, a 1924–1925 project for a horizontal skyscraper: a slab carried on towers across the city, like a bridge.

**[f.f. expl.]** A skyscraper laid flat across the city, with the bridge replacing the tower. It remained on paper; the idea of a building that spans the city reappeared in later megastructures.

**Fuente:** Richard Anderson, "Wolkenbügel: El Lissitzky as Architect" (MIT Press, 2026), presentación en archiweb.

**Enlace:** https://www.archiweb.cz/en/e/richard-anderson-wolkenb-gel-el-lissitzky-as-architect

**Licencia de la imagen:** Obra de Lissitzky (murió en 1941): dominio público. Verificar la imagen.

### Editorial

**Contexto.** Proyecto de Lissitzky de 1924–1925 para un rascacielos horizontal sobre Moscú.

**Lectura (interpretación editorial).** El rascacielos horizontal: una idea que anticipa las infraestructuras que cruzan la ciudad. Un futuro que se construyó como autopista elevada.

**Notas de verificación.** Año 1925 colisiona con Plan Voisin. Sufijo 'b' asignado a Lissitzky.

---

## vstg.1927 — Lenin Institute and Library, Moscow

**Código ID:** vstg-0019  ·  **Nivel:** documented  ·  **Estado:** Investigada. Modelo en el CCA confirmado; año 1927 de diploma por confirmar en Wikipedia.

### Plataforma

**[desc.]** Ivan Leonidov's diploma project for the Lenin Institute and Library in Moscow: a cascade of glass-and-metal blocks rising like a machine, designed as a city of books.

**[f.f. expl.]** A library-city for the state's knowledge. Its cascading blocks became an icon of the Soviet avant-garde; the project was never built, and the regime turned to a different architecture.

**Fuente:** Canadian Centre for Architecture (CCA), "View of the diploma project model for the Lenin Institute and Library, Moscow".

**Enlace:** https://cca.qc.ca/en/search/details/collection/object/301268

**Licencia de la imagen:** Obra de Leonidov (murió en 1984): derechos vigentes. Verificar la licencia del CCA.

### Editorial

**Contexto.** Proyecto de diploma de Leonidov, 1927, en el Vjutemas de Moscú.

**Lectura (interpretación editorial).** La biblioteca como forma de Estado: el conocimiento colectivo como edificio. Se pregunta qué ciudad necesita un Estado que dice gobernar con libros.

**Notas de verificación.** Fuente de imagen con licencia del CCA; verificar términos de uso.

---

## vstg.1929 — Glass Tower, Alexanderplatz, Berlin

**Código ID:** vstg-0020  ·  **Nivel:** documented  ·  **Estado:** Investigada con fuentes secundarias. Año 1929 y dimensiones por confirmar en el archivo del MoMA.

### Plataforma

**[desc.]** Ludwig Mies van der Rohe's project for a glass skyscraper at Alexanderplatz, Berlin: a tower of glass planes in models and photographs, not built.

**[f.f. expl.]** A glass tower for the centre of Berlin, dropped as the city changed. The Alexanderplatz tower was never built; a later Berlin was reshaped around other towers.

**Fuente:** designboom, "unbuilt Mies van der Rohe skyscrapers" (2021); Domus, "Legendary but never built" (2024).

**Enlace:** https://domusweb.it/en/architecture/gallery/2024/09/16/architecture-never-built-10-unrealized-masterpieces.amp.html

**Licencia de la imagen:** Obras de Mies (murió en 1969): derechos vigentes. Pedir autorización.

### Editorial

**Contexto.** Proyecto de rascacielos para Alexanderplatz, hacia 1929, dentro de la serie de torres de Mies.

**Lectura (interpretación editorial).** Una torre que se diseñó para un lugar que luego fue reconstruido después de la guerra. La ciudad que no llegó se reconoce en su vacío.

**Notas de verificación.** Fecha por confirmar. Fuentes secundarias.

---

## vstg.1930 — Ville Radieuse

**Código ID:** vstg-0021  ·  **Nivel:** documented  ·  **Estado:** Investigada. Ficha del MoMA y Wikipedia consultadas.

### Plataforma

**[desc.]** Le Corbusier's Radiant City, a 1930 plan for a city of towers in parkland, with housing blocks on pilotis, offices and elevated highways.

**[f.f. expl.]** A city that dissolves the street into parks and towers. It was never built as a whole; its principles underwrote many postwar housing estates, several of which later became the object of public debate.

**Fuente:** Museum of Modern Art (MoMA), "Le Corbusier" (collection, work 961).

**Enlace:** https://www.moma.org/collection/works/961

**Licencia de la imagen:** Obras de Le Corbusier: derechos vigentes (FLC). Pedir autorización o usar la ficha del MoMA.

### Editorial

**Contexto.** Plan publicado en 1930 que resume las ideas urbanas de Le Corbusier.

**Lectura (interpretación editorial).** El urbanismo que se convirtió en vivienda masiva: la idea de la torre en el parque, sin la ciudad alrededor. Lo que el siglo XX heredó como barrios de vivienda.

**Notas de verificación.** Año 1930. Verificar la ficha de la Fondation Le Corbusier para la fecha exacta del plan.

---

## vstg.1932 — Broadacre City

**Código ID:** vstg-0022  ·  **Nivel:** documented  ·  **Estado:** Investigada. Fecha 1932 confirmada en Open Culture y en el Harvard Urban Design Survey.

### Plataforma

**[desc.]** Frank Lloyd Wright's Broadacre City, a 1932 plan for a decentralised American landscape in which every family would have an acre, linked by roads and cars.

**[f.f. expl.]** An America without cities: each family on one acre, connected by automobile. It was never built as designed, but the car and the suburb followed a version of the idea without its design.

**Fuente:** Open Culture, "Frank Lloyd Wright Designs an Urban Utopia: See His Hand-Drawn Sketches of Broadacre City (1932)".

**Enlace:** https://www.openculture.com/page/667

**Licencia de la imagen:** Obras de Wright: derechos vigentes de la Frank Lloyd Wright Foundation. Pedir autorización.

### Editorial

**Contexto.** Plan de Wright de 1932, con maqueta mostrada en exposiciones de los años treinta.

**Lectura (interpretación editorial).** El sueño de la ciudad disuelta en el territorio: una utopía que, en parte, se cumplió sin su diseño. Permite preguntar qué queda de un futuro cuando se hace realidad sin arquitectos.

**Notas de verificación.** Fuente de referencia: Harvard UDCSA, proyecto 106.

---

## vstg.1942 — Plan Obus, Algiers, 1930–1942

**Código ID:** vstg-0023  ·  **Nivel:** documented  ·  **Estado:** Investigada. Proyecto, fechas y nunca construido confirmados en fuentes del MIT y la Fondation Le Corbusier. Cifras de población y longitud por confirmar.

### Plataforma

**[desc.]** Le Corbusier's Plan Obus for Algiers: a long, curved housing viaduct around the bay, with a new business district on the Casbah promontory, drawn between 1930 and 1942.

**[f.f. expl.]** A plan for a long curved housing block over the existing city, justified by the logic of colonial order. Le Corbusier worked on it for about a decade without a commission. It was dropped in 1942, and nothing was built.

**Fuente:** MIT Libraries, Dome: Algiers Plans (1931–1942). Fondation Le Corbusier, Urbanisme (Garland, 1983).

**Enlace:** https://dome.mit.edu/handle/1721.3/21261

**Licencia de la imagen:** Dibujos de Le Corbusier: derechos reservados. Dome indica 'All rights reserved'. Pedir autorización o buscar otra imagen.

### Editorial

**Contexto.** Propuesta para Argel entre 1930 y 1942. Abandonada en 1942, durante el régimen de Vichy.

**Lectura (interpretación editorial).** Un plan moderno sobre un territorio colonial: la modernidad como herramienta de orden. Pregunta qué futuro se imagina para quienes no son los destinatarios del plan.

**Notas de verificación.** Año 1942 por abandono. Cifras por confirmar (la cifra de habitantes y la longitud que circulan no están verificadas en las fuentes consultadas).

---

## vstg.1943 — Germania

**Código ID:** vstg-0024  ·  **Nivel:** documented  ·  **Estado:** Investigada. Fechas 1938 (demolición), 1939 (eje este-oeste), 1943 (suspensión) confirmadas en Wikipedia.

### Plataforma

**[desc.]** Albert Speer's plan for Germania, the planned capital of a Nazi empire: an east–west axis, a Great Hall about 200 metres high, and a triumphal arch of almost 100 metres. Demolition began in 1938.

**[f.f. expl.]** A Berlin that would be the capital of a thousand-year empire. Construction was halted in March 1943. Almost nothing was built; a Soviet war memorial was later put where the arch was to stand.

**Fuente:** Wikipedia, "Germania (city)".

**Enlace:** https://en.wikipedia.org/wiki/Germania_(city)

**Licencia de la imagen:** Obras de Speer (murió en 1981): derechos vigentes. Verificar la licencia de cada imagen.

### Editorial

**Contexto.** Plan de Speer y Hitler para la capital del Reich, 1938–1943. Maqueta mostrada en 1939.

**Lectura (interpretación editorial).** El futuro como propaganda y la demolición del presente para construir un pasado ficticio. Lo que no ocurrió es un aviso sobre el poder que decide qué ciudad merece existir.

**Notas de verificación.** Tema sensible. El texto editorial debe nombrar al régimen y su objetivo sin estetizar el proyecto.

---

## vstg.1956 — Mile High Illinois

**Código ID:** vstg-0025  ·  **Nivel:** documented  ·  **Estado:** Investigada. Año 1956 y nombre confirmados en la ASCE. Número de plantas por verificar.

### Plataforma

**[desc.]** Frank Lloyd Wright's Mile High Illinois, a 1956 proposal for a skyscraper one mile (about 1,600 metres) tall in Chicago.

**[f.f. expl.]** A tower that would have been the tallest building ever built, planned for a city already famous for its skyline. It was never built; a 2023 visualisation revived it as an engineering question.

**Fuente:** American Society of Civil Engineers (ASCE), "Visualization unveiled for unbuilt Frank Lloyd Wright tower" (2023).

**Enlace:** https://www.asce.org/publications-and-news/civil-engineering-source/civil-engineering-magazine/article/2023/02/visualization-unveiled-for-unbuilt-frank-lloyd-wright-tower

**Licencia de la imagen:** Obra de Wright: derechos vigentes. Verificar la licencia de la visualización de la ASCE.

### Editorial

**Contexto.** Proyecto de Wright de 1956 para Chicago. Su altura de una milla lo convierte en uno de los proyectos más extremos del siglo XX.

**Lectura (interpretación editorial).** El rascacielos como fantasía de la escala. Se pregunta hasta dónde puede crecer una ciudad antes de dejar de ser ciudad.

**Notas de verificación.** Altura de una milla: cifra de la ASCE. Número de plantas que circula en divulgación no verificado.

---

## vstg.1958.a — Marine City

**Código ID:** vstg-0026  ·  **Nivel:** documented  ·  **Estado:** Investigada con fuente secundaria. Año 1958 y características por confirmar en fuente primaria.

### Plataforma

**[desc.]** Kiyonori Kikutake's Marine City, a project for floating cities on the sea, built on pillars and platforms, with housing and farms over the water.

**[f.f. expl.]** A city that would grow out over the water, an answer to the pressure of Japan's cities. It was never built; the Metabolist group proposed many expandable cities and built few.

**Fuente:** Architecture Lab, "Kiyonori Kikutake: Biography, Works, Awards".

**Enlace:** https://www.architecturelab.net/architect/famous/kiyonori-kikutake/

**Licencia de la imagen:** Obra de Kikutake (murió en 2011): derechos vigentes. Pedir autorización.

### Editorial

**Contexto.** Proyecto de Kikutake del movimiento Metabolista japonés, hacia 1958.

**Lectura (interpretación editorial).** Una ciudad que crece como organismo: la infraestructura que se añade a sí misma. Pregunta si el futuro es expansión o reparación.

**Notas de verificación.** Año 1958 colisiona con Spatial City. Sufijo 'a' asignado a Kikutake.

---

## vstg.1958.b — Spatial City

**Código ID:** vstg-0027  ·  **Nivel:** documented  ·  **Estado:** Investigada. Ficha del MoMA confirmada. Fechas 1958–1960 por confirmar en el archivo de Friedman.

### Plataforma

**[desc.]** Yona Friedman's Spatial City (Ville Spatiale), 1958–1960: a lattice of elevated structures built above existing cities, into which inhabitants fill their own dwellings.

**[f.f. expl.]** A city built above the one that already exists, where each inhabitant designs their own home. It was never realised; it became a model for participatory architecture.

**Fuente:** Museum of Modern Art (MoMA), "Yona Friedman. Spatial City, Elevated Blocks, project" (work 104694).

**Enlace:** https://www.moma.org/collection/works/104694

**Licencia de la imagen:** Obra de Friedman: verificar fecha de fallecimiento y derechos antes de usar la imagen.

### Editorial

**Contexto.** Proyecto de Friedman, 1958–1960, para una estructura que se superpone a la ciudad existente.

**Lectura (interpretación editorial).** La ciudad sin arquitecto: la estructura pública y la vivienda privada. Un futuro que se propuso como alternativa a la vivienda masiva de Estado.

**Notas de verificación.** Año 1958 colisiona con Marine City. Sufijo 'b' asignado a Friedman. Verificar fecha de fallecimiento antes de publicar la licencia.

---

## vstg.1958.c — Hauptstadt Berlin ideas competition

**Código ID:** vstg-0028  ·  **Nivel:** documented  ·  **Estado:** Investigada con la colección de la Berlinische Galerie. Ganadores y autores por confirmar.

### Plataforma

**[desc.]** The 1958 international ideas competition for the urban development of a future capital Berlin. Its prize-winning schemes were never built.

**[f.f. expl.]** A reunified Berlin with a new centre. Three years later the Wall divided the city; the plan of a united capital was never carried out.

**Fuente:** Berlinische Galerie, collection item "International Urban Development Ideas Competition 'Hauptstadt Berlin' (Unbuilt), 3. Prize – Spatial Organization, 1958".

**Enlace:** https://sammlung-online.berlinischegalerie.de/en/collection/item/223654

**Licencia de la imagen:** Berlinische Galerie: verificar términos de uso de imágenes del museo.

### Editorial

**Contexto.** Concurso internacional de ideas de 1958 para la capital de Alemania. Tres años antes del Muro de Berlín (1961).

**Lectura (interpretación editorial).** Un concurso para una ciudad que se dividió. El futuro de la capital se planteó en el momento en que la división ya estaba en marcha.

**Notas de verificación.** Año 1958 colisiona con Marine City y Spatial City. Sufijo 'c'. Ganadores y autores pendientes de la ficha completa.

---

## vstg.1959.a — New Babylon

**Código ID:** vstg-0029  ·  **Nivel:** documented  ·  **Estado:** Investigada. Periodo 1959–1974 confirmado en Wikipedia. Falta la fuente del archivo Constant.

### Plataforma

**[desc.]** Constant Nieuwenhuys's New Babylon, 1959–1974: a utopian city of linked sectors raised above ground, where residents, 'homo ludens', move between games and leisure without work.

**[f.f. expl.]** A city without work, in which play organises the day. The paintings, models and texts exist; the city does not.

**Fuente:** Wikipedia, "New Babylon (Constant Nieuwenhuys)".

**Enlace:** https://en.wikipedia.org/wiki/New_Babylon_(Constant_Nieuwenhuys)

**Licencia de la imagen:** Obras de Constant (murió en 2005): derechos vigentes. Verificar en la Stichting Constant.

### Editorial

**Contexto.** Proyecto de Constant del grupo Situacionista, 1959–1974. Originalmente llamado Dériville.

**Lectura (interpretación editorial).** El ocio como forma de la ciudad: una utopía que quería liberar a la gente del trabajo. Pregunta qué ciudad queda cuando el trabajo deja de ser su centro.

**Notas de verificación.** Año 1959 colisiona con Kiesler. Sufijo 'a' asignado a Constant.

---

## vstg.1959.b — Endless House

**Código ID:** vstg-0030  ·  **Nivel:** documented  ·  **Estado:** Investigada. Ficha del Whitney y del MoMA consultadas. Fechas 1947–1960 por confirmar.

### Plataforma

**[desc.]** Frederick Kiesler's Endless House, a continuous egg-shaped dwelling without corners, developed from 1947 to 1960, shown as models and drawings.

**[f.f. expl.]** A house without separate rooms, in which living becomes continuous. The house was never built as a dwelling; its models shaped the debate about domestic space.

**Fuente:** Whitney Museum of American Art, "Frederick Kiesler" (work 7371). MoMA, "The animation of Frederick Kiesler's Endless House" (2015).

**Enlace:** https://whitney.org/collection/works/7371

**Licencia de la imagen:** Obra de Kiesler (murió en 1965): derechos vigentes. Verificar en la ficha del Whitney.

### Editorial

**Contexto.** Proyecto de Kiesler, 1947–1960. Maqueta de 1959 en exposición.

**Lectura (interpretación editorial).** La casa sin esquinas: la vida como continuidad y no como compartimentos. Una pregunta sobre si el espacio doméstico tiene que ser una habitación.

**Notas de verificación.** Año 1959 colisiona con New Babylon. Sufijo 'b' asignado a Kiesler.

---

## vstg.1960 — Plan for Tokyo (Tokyo Bay Plan)

**Código ID:** vstg-0031  ·  **Nivel:** documented  ·  **Estado:** Investigada. Año 1960 confirmado en Harvard UDCSA y Shinkenchiku. Ver la tesis de KAIST sobre la movilidad del plan.

### Plataforma

**[desc.]** Kenzo Tange's 1960 Plan for Tokyo: a linear city extending across Tokyo Bay on a spine of highways and rail.

**[f.f. expl.]** A city that grows out across the bay on a spine of traffic. The plan was not carried out as designed; parts of Tokyo's later waterfront development echo its logic.

**Fuente:** Harvard Urban Design Survey, project 64, "Kenzo Tange: A Plan for Tokyo, 1960".

**Enlace:** https://udcsa.gsd.harvard.edu/projects/64

**Licencia de la imagen:** Obra de Tange (murió en 2005): derechos vigentes. Pedir autorización.

### Editorial

**Contexto.** Plan de Tange para Tokio, 1960, con una columna vertebral de autopistas y tren que avanza hacia la bahía.

**Lectura (interpretación editorial).** La ciudad como eje, no como centro: un futuro de expansión sobre el mar. Pregunta cuánto de Tokio se decidió en un plan y cuánto en la crisis.

**Notas de verificación.** Tesis de KAIST sobre la movilidad del plan: dspace.kaist.ac.kr/handle/10203/246345.

---

## vstg.1961 — Fun Palace

**Código ID:** vstg-0032  ·  **Nivel:** documented  ·  **Estado:** Investigada. Origen 1961 y revival 2014 confirmados en Wikipedia.

### Plataforma

**[desc.]** Cedric Price and Joan Littlewood's Fun Palace, a flexible building for culture, science and play, designed from 1961 with movable walls, cranes and rooms that users could reconfigure.

**[f.f. expl.]** A building that would be rebuilt daily by its users. The local authorities refused to donate land and the building was never constructed. It was revived in 2014 as an annual community event.

**Fuente:** Wikipedia, "Fun Palaces". Museum of Modern Art (MoMA), "Cedric Price. Fun Palace for Joan Littlewood" (work 842).

**Enlace:** https://en.wikipedia.org/wiki/Fun_Palaces

**Licencia de la imagen:** Obras de Price (murió en 2003): derechos vigentes. Pedir autorización o usar la ficha del MoMA.

### Editorial

**Contexto.** Proyecto de Price con Joan Littlewood, desde 1961. Cerrado por la falta de terreno y financiación.

**Lectura (interpretación editorial).** La arquitectura como herramienta de participación. La idea de un edificio que cambia con quien lo usa vuelve en los centros comunitarios de hoy.

**Notas de verificación.** Nombre del lugar (Stratford East) no confirmado en la fuente de Wikipedia; ubicarlo solo si se verifica.

---

## vstg.1964.a — Plug-In City

**Código ID:** vstg-0033  ·  **Nivel:** documented  ·  **Estado:** Investigada. Ficha del MoMA confirmada. Año 1964 confirmado en la ficha.

### Plataforma

**[desc.]** Peter Cook's Plug-In City (Archigram), 1964: a megastructure into which capsules of housing and offices plug like components, in a city that can change over time.

**[f.f. expl.]** A city of replaceable living units, never built. Its ideas of a fixed infrastructure with mobile parts fed the megastructure debate of the 1960s and later.

**Fuente:** Museum of Modern Art (MoMA), "Peter Cook. Plug-in City: Maximum Pressure Area, project" (work 795–797).

**Enlace:** https://www.moma.org/collection/works/795

**Licencia de la imagen:** Obras de Archigram: derechos vigentes. Pedir autorización o usar la ficha del MoMA.

### Editorial

**Contexto.** Proyecto de Archigram de 1964, con dibujos axonométricos y secciones.

**Lectura (interpretación editorial).** La ciudad como infraestructura y unidades intercambiables. Un futuro que se hizo realidad en fragmentos (contenedores, módulos) pero no como ciudad.

**Notas de verificación.** Año 1964 colisiona con Walking City y Hollein. Sufijo 'a' asignado a Cook.

---

## vstg.1964.b — Walking City

**Código ID:** vstg-0034  ·  **Nivel:** documented  ·  **Estado:** Investigada. Fechas 1964–1966 confirmadas en Wikipedia.

### Plataforma

**[desc.]** Ron Herron's Walking City, published in Archigram between 1964 and 1966: giant mechanical cities that walk on telescopic legs to wherever they are needed.

**[f.f. expl.]** A city that could move, drawn but never built. The drawings show a survival pod rather than a weapon, and the idea of a city that can relocate became one of the emblems of Archigram.

**Fuente:** Wikipedia, "Ron Herron". Centre Pompidou, collection "Walking City".

**Enlace:** https://en.wikipedia.org/wiki/Ron_Herron

**Licencia de la imagen:** Obras de Herron (murió en 1994): derechos vigentes. Pedir autorización.

### Editorial

**Contexto.** Concepto de Herron para Archigram, publicado 1964–1966.

**Lectura (interpretación editorial).** Una ciudad que se va. El futuro como migración permanente, con un mensaje de supervivencia que hoy se lee de otra manera.

**Notas de verificación.** Año 1964 colisiona con Plug-In City y Hollein. Sufijo 'b' asignado a Herron.

---

## vstg.1964.c — Aircraft Carrier City in Landscape

**Código ID:** vstg-0035  ·  **Nivel:** documented  ·  **Estado:** Investigada. Ficha del MoMA confirmada.

### Plataforma

**[desc.]** Hans Hollein's Aircraft Carrier City in Landscape (1964): a city shaped like a carrier, laid flat over a landscape, shown in drawings and photomontages.

**[f.f. expl.]** A city that is a ship on land, with the flight deck as a public square. It was never built; the project remains a classic image of the 1960s megastructure.

**Fuente:** Museum of Modern Art (MoMA), "Hans Hollein. Aircraft Carrier City in Landscape, project" (work 636).

**Enlace:** https://www.moma.org/collection/works/636

**Licencia de la imagen:** Obras de Hollein (murió en 2014): derechos vigentes. Pedir autorización o usar la ficha del MoMA.

### Editorial

**Contexto.** Proyecto de Hollein de 1964, con perspectivas aéreas y de exterior.

**Lectura (interpretación editorial).** La ciudad como barco, el territorio como mar. Pregunta por el poder de las imágenes que construyen un futuro que nunca se levanta.

**Notas de verificación.** Año 1964 colisiona con Plug-In City y Walking City. Sufijo 'c' asignado a Hollein.

---

## vstg.1968 — Instant City

**Código ID:** vstg-0036  ·  **Nivel:** documented  ·  **Estado:** Investigada con fuente secundaria. Año 1968 y las ciudades de las acciones por confirmar.

### Plataforma

**[desc.]** Archigram's Instant City (1968–1969): a travelling event-city that lands in a town for a week, with inflatables, screens and performance, then leaves.

**[f.f. expl.]** A city that lasts a week. It was staged only as short events in British towns; the permanent network of cities it proposed was never built.

**Fuente:** Dezeen, "Archigram's Instant City concept enables 'a village to become a kind of city for a week', says Peter Cook".

**Enlace:** https://www.dezeen.com/?p=1505137

**Licencia de la imagen:** Obras de Archigram: derechos vigentes. Pedir autorización.

### Editorial

**Contexto.** Proyecto de Archigram de 1968, con eventos temporales en ciudades británicas.

**Lectura (interpretación editorial).** La ciudad efímera: un futuro que se monta y desmonta. La urbanidad como acontecimiento y no como edificio.

**Notas de verificación.** Fuente de Dezeen (entrevistas). Confirmar fechas y lugares en el archivo de Archigram.

---

## vstg.1969.a — No-Stop City

**Código ID:** vstg-0037  ·  **Nivel:** documented  ·  **Estado:** Investigada. Ficha del MoMA confirmada. Año 1969 por confirmar (el proyecto se desarrolló entre 1968 y 1972).

### Plataforma

**[desc.]** Archizoom's No-Stop City (1969): an endless grid of undifferentiated space, a residential park with uniform floors and no limits, shown in plans and perspectives.

**[f.f. expl.]** A city with no places, in which a continuous grid replaces the city. It was never built; its image of a city without architecture became central to radical design.

**Fuente:** Museum of Modern Art (MoMA), "Andrea Branzi. Residential Park, No-Stop City project" (work 794).

**Enlace:** https://www.moma.org/collection/works/794

**Licencia de la imagen:** Obras de Archizoom (Branzi murió en 2023): derechos vigentes. Pedir autorización.

### Editorial

**Contexto.** Proyecto de Archizoom Associati, 1969, con plantas de parque residencial.

**Lectura (interpretación editorial).** La ciudad sin lugar: la retícula como única forma. Una idea que se leyó como crítica al consumo y que el urbanismo posterior practicó sin reconocerla.

**Notas de verificación.** Año 1969 colisiona con Continuous Monument. Sufijo 'a' asignado a Archizoom.

---

## vstg.1969.b — Continuous Monument

**Código ID:** vstg-0038  ·  **Nivel:** documented  ·  **Estado:** Investigada. Ficha del MoMA confirmada. Año 1969 aceptado como fecha de referencia.

### Plataforma

**[desc.]** Superstudio's Continuous Monument (1969): a photomontage of a monumental grid laid across the planet, where one continuous monolith covers the world.

**[f.f. expl.]** A world with no cities, only one continuous grid. The project was never built; it was a critique of consumer architecture and of the modern city's dependence on the grid.

**Fuente:** Museum of Modern Art (MoMA), "Superstudio, Continuous Monument" (work 938).

**Enlace:** https://www.moma.org/collection/works/938

**Licencia de la imagen:** Obras de Superstudio: derechos vigentes. Pedir autorización o usar la ficha del MoMA.

### Editorial

**Contexto.** Serie de Superstudio, 1969, con fotomontajes en blanco y negro.

**Lectura (interpretación editorial).** Un monumento que cubre el mundo: la ciudad como una sola superficie. Se pregunta si la arquitectura puede imaginar un futuro que no sea una continuación del presente.

**Notas de verificación.** Año 1969 colisiona con No-Stop City. Sufijo 'b' asignado a Superstudio.

---

## vstg.1972 — Exodus, or the Voluntary Prisoners of Architecture

**Código ID:** vstg-0039  ·  **Nivel:** documented  ·  **Estado:** Investigada. Ficha del MoMA confirmada. Año 1972 por confirmar en la publicación original.

### Plataforma

**[desc.]** Rem Koolhaas, Elia and Zoe Zenghelis and Madelon Vriesendorp's Exodus (1972): a city of walled zones in which people live as 'voluntary prisoners' of architecture, shown in drawings and text.

**[f.f. expl.]** A city in which urban life is divided into bounded zones, each with its own restrictions. It was never built; it is a speculative reading of how cities control behaviour.

**Fuente:** Museum of Modern Art (MoMA), "Exodus" (work 104692). JSTOR Daily, "Rem Koolhaas and the voluntary prisoners of architecture".

**Enlace:** https://www.moma.org/collection/works/104692

**Licencia de la imagen:** Obras de OMA y Zenghelis/Vriesendorp: derechos vigentes. Pedir autorización.

### Editorial

**Contexto.** Proyecto de Koolhaas y los Zenghelis (Office for Metropolitan Architecture) de 1972, con la Architectural Association.

**Lectura (interpretación editorial).** La ciudad que controla el comportamiento: la libertad como encierro voluntario. Pregunta cuánto de nuestra vida cotidiana es ya un Exodus sin que lo hayamos decidido.

**Notas de verificación.** Año 1972 por confirmar en la publicación original de OMA.

---

## vstg.1995 — Cardiff Bay Opera House

**Código ID:** vstg-0040  ·  **Nivel:** documented  ·  **Estado:** Investigada. Fecha 22 de diciembre de 1995 confirmada en Wikipedia; falta la fuente primaria de la Millennium Commission.

### Plataforma

**[desc.]** Zaha Hadid's design for the Cardiff Bay Opera House, a glass structure around the theatre, for the Welsh National Opera. Her design won the competition's first and later rounds.

**[f.f. expl.]** A Welsh opera house that would have crowned the Cardiff Bay redevelopment. The Millennium Commission refused the funding on 22 December 1995. The site was later used for the Wales Millennium Centre, opened in 2004.

**Fuente:** Wikipedia, "Cardiff Bay Opera House".

**Enlace:** https://en.wikipedia.org/wiki/Cardiff_Bay_Opera_House

**Licencia de la imagen:** Obra de Hadid (murió en 2016): derechos vigentes de Zaha Hadid Architects. Pedir autorización.

### Editorial

**Contexto.** Proyecto de Hadid para la Welsh National Opera, 1994–1995. Finalmente cancelado y sustituido por el Wales Millennium Centre (2004).

**Lectura (interpretación editorial).** Una ópera de vidrio como símbolo de una ciudad que quiso reinventarse. Su rechazo dejó un hueco que otro edificio ocupó. Pregunta quién decide qué futuro financia el Estado.

**Notas de verificación.** Año 1995 por el rechazo de la financiación. El proyecto se concibió en los años noventa sin año exacto.

---

## Pendientes para publicar la categoría

- Confirmar las cifras marcadas en cada ficha (años, alturas, habitantes) con fuente primaria. Las fuentes de divulgación se sustituirán cuando haya una mejor.
- Sustituir las imágenes de marcador por imágenes con licencia verificada, en `public/vestigios/vstg-####.png`.
- Añadir el sufijo al código de la web (decisión 1): `vstg.AAAA` más letra.
- Verificar la reutilización de la ópera de Bagdad en Arizona y las cifras del Tribune, la Ville Radieuse y el Obus.
