module.exports = {
  // https://json-schema.org/understanding-json-schema/reference/combining.html
  schema: {
    definitions: {
      address: {
        type: "object",
        properties: {
          street_address: { type: "string" },
          city: { type: "string" },
          state: { type: "string" },
        },
        required: ["street_address", "city", "state"],
      },
    },

    allOf: [
      { $ref: "#/definitions/address" },
      {
        properties: {
          type: { enum: ["residential", "business"] },
        },
      },
    ],
  },
  formData: {},
};
