export const getFilenameFromUri = (uri: string) => {
  const splited = uri.split('/');

  return splited[splited.length - 1];
};
