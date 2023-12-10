export const convertToDataUrl = (image) => {
  if (!image) {
    return "";
  }

  return `data:${image.mimeType};base64,${image.image}`;
};

export const calculMoyenneAvis = (avis) => {
  return avis.map(({ note }) => note).reduce((p, c) => p + c, 0) / avis.length;
};
