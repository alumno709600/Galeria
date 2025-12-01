
const imagenes = [
  {
    id: 1,
    titulo: "Puente de piedra",
    descripcion: "Hermosa arquitectura de puente clásico",
    srcset: {
      small: { "1x": "resize_img/output-adv/bridge-7377716-small-1x..jpg", "2x": "resize_img/output-adv/bridge-7377716-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/bridge-7377716-medium-1x..jpg", "2x": "resize_img/output-adv/bridge-7377716-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/bridge-7377716-large-1x..jpg", "2x": "resize_img/output-adv/bridge-7377716-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/bridge-7377716-xlarge-1x..jpg", "2x": "resize_img/output-adv/bridge-7377716-xlarge-2x..jpg" }
    }
  },
  {
    id: 2,
    titulo: "Centro urbano",
    descripcion: "Vida en el centro de la ciudad",
    srcset: {
      small: { "1x": "resize_img/output-adv/center-271294-small-1x..jpg", "2x": "resize_img/output-adv/center-271294-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/center-271294-medium-1x..jpg", "2x": "resize_img/output-adv/center-271294-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/center-271294-large-1x..jpg", "2x": "resize_img/output-adv/center-271294-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/center-271294-xlarge-1x..jpg", "2x": "resize_img/output-adv/center-271294-xlarge-2x..jpg" }
    }
  },
  {
    id: 3,
    titulo: "Pirámides de Egipto",
    descripcion: "Maravilla antigua del mundo",
    srcset: {
      small: { "1x": "resize_img/output-adv/egypt-1002916-small-1x..jpg", "2x": "resize_img/output-adv/egypt-1002916-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/egypt-1002916-medium-1x..jpg", "2x": "resize_img/output-adv/egypt-1002916-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/egypt-1002916-large-1x..jpg", "2x": "resize_img/output-adv/egypt-1002916-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/egypt-1002916-xlarge-1x..jpg", "2x": "resize_img/output-adv/egypt-1002916-xlarge-2x..jpg" }
    }
  },
  {
    id: 4,
    titulo: "Gdansk",
    descripcion: "Puerto histórico de Polonia",
    srcset: {
      small: { "1x": "resize_img/output-adv/gdansk-4622101-small-1x..jpg", "2x": "resize_img/output-adv/gdansk-4622101-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/gdansk-4622101-medium-1x..jpg", "2x": "resize_img/output-adv/gdansk-4622101-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/gdansk-4622101-large-1x..jpg", "2x": "resize_img/output-adv/gdansk-4622101-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/gdansk-4622101-xlarge-1x..jpg", "2x": "resize_img/output-adv/gdansk-4622101-xlarge-2x..jpg" }
    }
  },
  {
    id: 5,
    titulo: "Paisaje italiano",
    descripcion: "Belleza de la Toscana",
    srcset: {
      small: { "1x": "resize_img/output-adv/italy-3768629-small-1x..jpg", "2x": "resize_img/output-adv/italy-3768629-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/italy-3768629-medium-1x..jpg", "2x": "resize_img/output-adv/italy-3768629-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/italy-3768629-large-1x..jpg", "2x": "resize_img/output-adv/italy-3768629-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/italy-3768629-xlarge-1x..jpg", "2x": "resize_img/output-adv/italy-3768629-xlarge-2x..jpg" }
    }
  },
  {
    id: 6,
    titulo: "Kotor",
    descripcion: "Bahía de Kotor en Montenegro",
    srcset: {
      small: { "1x": "resize_img/output-adv/kotor-8320794-small-1x..jpg", "2x": "resize_img/output-adv/kotor-8320794-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/kotor-8320794-medium-1x..jpg", "2x": "resize_img/output-adv/kotor-8320794-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/kotor-8320794-large-1x..jpg", "2x": "resize_img/output-adv/kotor-8320794-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/kotor-8320794-xlarge-1x..jpg", "2x": "resize_img/output-adv/kotor-8320794-xlarge-2x..jpg" }
    }
  },
  {
    id: 7,
    titulo: "Monasterio antiguo",
    descripcion: "Arquitectura religiosa histórica",
    srcset: {
      small: { "1x": "resize_img/output-adv/monastery-696111-small-1x..jpg", "2x": "resize_img/output-adv/monastery-696111-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/monastery-696111-medium-1x..jpg", "2x": "resize_img/output-adv/monastery-696111-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/monastery-696111-large-1x..jpg", "2x": "resize_img/output-adv/monastery-696111-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/monastery-696111-xlarge-1x..jpg", "2x": "resize_img/output-adv/monastery-696111-xlarge-2x..jpg" }
    }
  },
  {
    id: 8,
    titulo: "Monumentos históricos",
    descripcion: "Legado del patrimonio mundial",
    srcset: {
      small: { "1x": "resize_img/output-adv/monuments-5350109-small-1x..jpg", "2x": "resize_img/output-adv/monuments-5350109-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/monuments-5350109-medium-1x..jpg", "2x": "resize_img/output-adv/monuments-5350109-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/monuments-5350109-large-1x..jpg", "2x": "resize_img/output-adv/monuments-5350109-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/monuments-5350109-xlarge-1x..jpg", "2x": "resize_img/output-adv/monuments-5350109-xlarge-2x..jpg" }
    }
  },
  {
    id: 9,
    titulo: "París",
    descripcion: "La ciudad de la luz",
    srcset: {
      small: { "1x": "resize_img/output-adv/paris-2499022-small-1x..jpg", "2x": "resize_img/output-adv/paris-2499022-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/paris-2499022-medium-1x..jpg", "2x": "resize_img/output-adv/paris-2499022-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/paris-2499022-large-1x..jpg", "2x": "resize_img/output-adv/paris-2499022-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/paris-2499022-xlarge-1x..jpg", "2x": "resize_img/output-adv/paris-2499022-xlarge-2x..jpg" }
    }
  },
  {
    id: 10,
    titulo: "Paisaje natural",
    descripcion: "Naturaleza en su máxima expresión",
    srcset: {
      small: { "1x": "resize_img/output-adv/paysage-5346523-small-1x..jpg", "2x": "resize_img/output-adv/paysage-5346523-small-2x..jpg" },
      medium: { "1x": "resize_img/output-adv/paysage-5346523-medium-1x..jpg", "2x": "resize_img/output-adv/paysage-5346523-medium-2x..jpg" },
      large: { "1x": "resize_img/output-adv/paysage-5346523-large-1x..jpg", "2x": "resize_img/output-adv/paysage-5346523-large-2x..jpg" },
      xlarge: { "1x": "resize_img/output-adv/paysage-5346523-xlarge-1x..jpg", "2x": "resize_img/output-adv/paysage-5346523-xlarge-2x..jpg" }
    }
  }
];
