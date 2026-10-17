// The archive. Every entry is a historical trace of a future that did not happen.
// Positions vstg-0001 to vstg-0080. Pending entries are placeholders until they are researched.
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
];
