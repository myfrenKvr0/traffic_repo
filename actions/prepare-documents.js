/**
 * Prepare the customer repository entry to be persisted
 */
function main(params) {
  if (!params.name) {
    return Promise.reject({ error: 'all the fields have not been filled.'});
  }

  return {
    doc: {
      createdAt: new Date(),
       name: params.name,
       surname: params.surname,
       id: params.id,
       gender: params.gender,
       drivers_license: params.drivers_license,
       contact_number: params.contact_number,
       address: params.address,
       vehicle_make: params.vehicle_make,
       vehicle_series_name: params.vehicle_series_name,
       license_plate: params.license_plate,
       colour: params.colour,
       year: params.year
    }
  };
}
