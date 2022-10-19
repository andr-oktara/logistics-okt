export const errorHandler = (error: Partial<Error> & { traceId?: string }) => ({
  error: {
    message: error.message.replace("Error: ", ""),
    traceId: error.traceId,
  },
});
