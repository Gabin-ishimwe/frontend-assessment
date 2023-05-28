function createData(field, type) {
  return { field, type };
}

export const dataRows = [
  createData("date", "date"),
  createData("device_type", "character varying"),
  createData("country", "character varying"),
  createData("session", "integer"),
  createData("revenue", "integer"),
];
