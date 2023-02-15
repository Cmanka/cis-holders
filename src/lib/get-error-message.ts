export const getErrorMessage = (error: unknown, unexpected: string = 'Unexpected error') => {
  if (error instanceof Error) {
    return error.message;
  }

  return unexpected;
};
