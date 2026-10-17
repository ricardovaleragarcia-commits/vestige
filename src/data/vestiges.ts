// The archive. Every entry is a historical trace of a future that did not happen.
// Positions vstg-0001 to vstg-0200. Pending entries are placeholders until they are researched.
// Each image is /public/vestigios/<code>.png. Replace the file with the same name to update it.

export type Vestige = {
  code: string; // internal position, used for file names: vstg-0001
  year: number | null; // year the future failed. Shown as [VSTG.YYYY], or [VSTG.NA] when not confirmed
  name: string;
  image: string; // path under /public/vestigios/
  description: string; // [desc.]
  failedFuture: string; // [f.f. expl.]
  source: string; // citation: author, title, publisher, year
  link: string; // where to read more
  license: string; // reuse conditions for the image
  status: string; // working state, not shown on the site
};

export const VESTIGES: Vestige[] = [
  {
    "code": "vstg-0001",

    "year": 1963,
    "name": "Project Orion, 1958–1965",
    "description": "Study drawings of a spacecraft propelled by small nuclear explosions, developed by General Atomics.",
    "failedFuture": "A future in which people crossed the solar system on nuclear pulses. The 1963 Partial Test Ban Treaty ended the project. What remains are drawings, a test model, and a book that asks what we chose to leave behind.",
    "source": "Dyson, G. (2002). Project Orion: The True Story of the Atomic Spaceship. Henry Holt and Company. [pendiente: verificar]",
    "link": "https://en.wikipedia.org/wiki/Project_Orion_(nuclear_propulsion)",
    "license": "pendiente: verificar licencia de la imagen",
    "status": "Borrador: falta verificar fuente e imagen",
    "image": "/vestigios/vstg-0001.png"
  },
  {
    "code": "vstg-0002",

    "year": null,
    "name": "Monumento a la Tercera Internacional, 1919–1920",
    "description": "Model of a leaning spiral of iron and glass designed by Vladimir Tatlin for Petrograd.",
    "failedFuture": "A tower meant to house the new institutions of the revolution. It was never built. Its spiral still appears as a symbol of an arrival that did not come.",
    "source": "Lodder, C. (1983). Russian Constructivism. Yale University Press. [pendiente: verificar]",
    "link": "https://en.wikipedia.org/wiki/Monument_to_the_Third_International",
    "license": "pendiente: verificar licencia de la imagen",
    "status": "Borrador: falta verificar fuente e imagen",
    "image": "/vestigios/vstg-0002.png"
  },
  {
    "code": "vstg-0003",

    "year": null,
    "name": "Plan Voisin de Paris, 1925",
    "description": "Le Corbusier's proposal for central Paris: old streets replaced by cruciform glass towers set in parkland.",
    "failedFuture": "A city that would have traded its streets for towers and gardens. It was never built, yet it still shapes the debate about how cities should be renewed.",
    "source": "Le Corbusier (1925). Urbanisme. Paris: Éditions Crès. [pendiente: verificar]",
    "link": "https://en.wikipedia.org/wiki/Plan_Voisin",
    "license": "pendiente: verificar licencia de la imagen",
    "status": "Borrador: falta verificar fuente e imagen",
    "image": "/vestigios/vstg-0003.png"
  },
  {
    "code": "vstg-0004",

    "year": null,
    "name": "Solicitudes a la Academia de Bellas Artes de Viena, 1907–1908",
    "description": "Adolf Hitler applied twice to the Academy of Fine Arts Vienna. Both applications were rejected.",
    "failedFuture": "A path as a painter that closed in 1907 and again in 1908. What followed did not depend on that rejection alone. Historians debate how much weight a single turning point carries, and warn against reading history as a chain of single causes. The archive keeps the rejection as one thread among many.",
    "source": "Kershaw, I. (1998). Hitler: 1889–1936: Hubris. W. W. Norton & Company. [pendiente: verificar]",
    "link": "https://en.wikipedia.org/wiki/Adolf_Hitler",
    "license": "pendiente: verificar licencia de la imagen",
    "status": "Borrador: falta verificar fuente, imagen y encuadre",
    "image": "/vestigios/vstg-0004.png"
  },
  {
    "code": "vstg-0005",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0005.png"
  },
  {
    "code": "vstg-0006",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0006.png"
  },
  {
    "code": "vstg-0007",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0007.png"
  },
  {
    "code": "vstg-0008",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0008.png"
  },
  {
    "code": "vstg-0009",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0009.png"
  },
  {
    "code": "vstg-0010",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0010.png"
  },
  {
    "code": "vstg-0011",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0011.png"
  },
  {
    "code": "vstg-0012",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0012.png"
  },
  {
    "code": "vstg-0013",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0013.png"
  },
  {
    "code": "vstg-0014",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0014.png"
  },
  {
    "code": "vstg-0015",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0015.png"
  },
  {
    "code": "vstg-0016",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0016.png"
  },
  {
    "code": "vstg-0017",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0017.png"
  },
  {
    "code": "vstg-0018",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0018.png"
  },
  {
    "code": "vstg-0019",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0019.png"
  },
  {
    "code": "vstg-0020",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0020.png"
  },
  {
    "code": "vstg-0021",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0021.png"
  },
  {
    "code": "vstg-0022",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0022.png"
  },
  {
    "code": "vstg-0023",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0023.png"
  },
  {
    "code": "vstg-0024",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0024.png"
  },
  {
    "code": "vstg-0025",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0025.png"
  },
  {
    "code": "vstg-0026",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0026.png"
  },
  {
    "code": "vstg-0027",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0027.png"
  },
  {
    "code": "vstg-0028",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0028.png"
  },
  {
    "code": "vstg-0029",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0029.png"
  },
  {
    "code": "vstg-0030",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0030.png"
  },
  {
    "code": "vstg-0031",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0031.png"
  },
  {
    "code": "vstg-0032",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0032.png"
  },
  {
    "code": "vstg-0033",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0033.png"
  },
  {
    "code": "vstg-0034",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0034.png"
  },
  {
    "code": "vstg-0035",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0035.png"
  },
  {
    "code": "vstg-0036",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0036.png"
  },
  {
    "code": "vstg-0037",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0037.png"
  },
  {
    "code": "vstg-0038",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0038.png"
  },
  {
    "code": "vstg-0039",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0039.png"
  },
  {
    "code": "vstg-0040",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0040.png"
  },
  {
    "code": "vstg-0041",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0041.png"
  },
  {
    "code": "vstg-0042",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0042.png"
  },
  {
    "code": "vstg-0043",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0043.png"
  },
  {
    "code": "vstg-0044",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0044.png"
  },
  {
    "code": "vstg-0045",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0045.png"
  },
  {
    "code": "vstg-0046",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0046.png"
  },
  {
    "code": "vstg-0047",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0047.png"
  },
  {
    "code": "vstg-0048",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0048.png"
  },
  {
    "code": "vstg-0049",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0049.png"
  },
  {
    "code": "vstg-0050",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0050.png"
  },
  {
    "code": "vstg-0051",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0051.png"
  },
  {
    "code": "vstg-0052",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0052.png"
  },
  {
    "code": "vstg-0053",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0053.png"
  },
  {
    "code": "vstg-0054",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0054.png"
  },
  {
    "code": "vstg-0055",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0055.png"
  },
  {
    "code": "vstg-0056",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0056.png"
  },
  {
    "code": "vstg-0057",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0057.png"
  },
  {
    "code": "vstg-0058",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0058.png"
  },
  {
    "code": "vstg-0059",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0059.png"
  },
  {
    "code": "vstg-0060",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0060.png"
  },
  {
    "code": "vstg-0061",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0061.png"
  },
  {
    "code": "vstg-0062",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0062.png"
  },
  {
    "code": "vstg-0063",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0063.png"
  },
  {
    "code": "vstg-0064",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0064.png"
  },
  {
    "code": "vstg-0065",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0065.png"
  },
  {
    "code": "vstg-0066",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0066.png"
  },
  {
    "code": "vstg-0067",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0067.png"
  },
  {
    "code": "vstg-0068",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0068.png"
  },
  {
    "code": "vstg-0069",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0069.png"
  },
  {
    "code": "vstg-0070",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0070.png"
  },
  {
    "code": "vstg-0071",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0071.png"
  },
  {
    "code": "vstg-0072",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0072.png"
  },
  {
    "code": "vstg-0073",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0073.png"
  },
  {
    "code": "vstg-0074",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0074.png"
  },
  {
    "code": "vstg-0075",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0075.png"
  },
  {
    "code": "vstg-0076",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0076.png"
  },
  {
    "code": "vstg-0077",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0077.png"
  },
  {
    "code": "vstg-0078",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0078.png"
  },
  {
    "code": "vstg-0079",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0079.png"
  },
  {
    "code": "vstg-0080",

    "year": null,
    "name": "Pendiente",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente",
    "image": "/vestigios/vstg-0080.png"
  },
  {
    "code": "vstg-0081",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0081.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0082",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0082.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0083",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0083.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0084",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0084.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0085",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0085.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0086",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0086.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0087",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0087.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0088",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0088.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0089",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0089.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0090",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0090.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0091",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0091.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0092",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0092.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0093",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0093.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0094",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0094.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0095",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0095.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0096",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0096.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0097",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0097.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0098",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0098.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0099",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0099.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0100",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0100.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0101",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0101.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0102",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0102.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0103",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0103.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0104",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0104.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0105",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0105.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0106",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0106.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0107",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0107.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0108",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0108.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0109",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0109.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0110",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0110.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0111",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0111.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0112",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0112.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0113",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0113.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0114",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0114.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0115",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0115.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0116",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0116.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0117",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0117.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0118",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0118.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0119",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0119.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0120",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0120.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0121",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0121.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0122",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0122.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0123",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0123.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0124",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0124.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0125",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0125.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0126",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0126.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0127",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0127.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0128",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0128.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0129",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0129.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0130",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0130.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0131",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0131.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0132",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0132.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0133",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0133.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0134",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0134.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0135",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0135.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0136",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0136.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0137",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0137.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0138",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0138.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0139",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0139.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0140",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0140.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0141",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0141.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0142",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0142.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0143",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0143.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0144",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0144.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0145",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0145.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0146",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0146.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0147",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0147.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0148",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0148.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0149",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0149.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0150",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0150.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0151",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0151.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0152",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0152.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0153",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0153.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0154",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0154.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0155",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0155.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0156",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0156.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0157",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0157.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0158",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0158.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0159",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0159.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0160",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0160.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0161",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0161.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0162",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0162.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0163",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0163.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0164",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0164.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0165",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0165.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0166",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0166.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0167",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0167.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0168",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0168.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0169",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0169.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0170",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0170.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0171",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0171.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0172",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0172.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0173",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0173.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0174",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0174.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0175",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0175.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0176",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0176.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0177",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0177.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0178",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0178.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0179",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0179.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0180",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0180.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0181",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0181.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0182",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0182.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0183",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0183.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0184",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0184.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0185",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0185.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0186",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0186.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0187",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0187.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0188",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0188.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0189",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0189.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0190",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0190.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0191",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0191.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0192",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0192.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0193",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0193.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0194",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0194.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0195",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0195.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0196",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0196.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0197",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0197.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0198",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0198.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0199",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0199.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
  {
    "code": "vstg-0200",
    "year": null,
    "name": "Pendiente",
    "image": "/vestigios/vstg-0200.png",
    "description": "Pendiente de investigación.",
    "failedFuture": "Pendiente de investigación.",
    "source": "Pendiente.",
    "link": "",
    "license": "Pendiente.",
    "status": "Pendiente"
  },
];
