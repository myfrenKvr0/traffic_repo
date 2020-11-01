/**
 * Prepare the customer repository entry to be persisted
 */
function main(params) {
  if (!params.name || !params.comment) {
    return Promise.reject({ error: 'all the fields have not been filled.'});
  }

  return {
    doc: {
      createdAt: new Date(),
       name: params.name,
       surname: params.surname,
       id: parms.id,
       divers_license: parms.divers_license,
       contact_number: parms.contact_number,
       address: parms.address,
       vehicle_make: parms.vehicle_make,
       vehicle_series_name: parms.vehicle_series_name,
       license_plate: params.license_plate,
       colour: params.colour,
       year: parms.year
    }
  };
}