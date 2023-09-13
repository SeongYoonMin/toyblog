export default defineEventHandler((event) => {
  if (event.context.params) {
    const id = parseInt(getQuery(event).id) as Number;
    if (!Number.isInteger(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: "ID should be an integer",
      });
    }
    return "All good";
  } else {
    throw createError({
      statusCode: 400,
      statusMessage: "Don't have Params",
    });
  }
});
