/**
 * Format the Cloudant documents to be consumed by the user interface
 */
function main(params) {
  // params contain the "rows" coming from Cloudant including the full documents
  return {
    entries: params.rows.map((row) => { return {
      
	name: row.doc.name,
	surname: row.doc.surname,
       	id: row.doc.id,
	gender: row.doc.gender,
       	drivers_license: row.doc.drivers_license,
       	contact_number: row.doc.contact_number,
       	address: row.doc.address,
       	vehicle_make: row.doc.vehicle_make,
       	vehicle_series_name: row.doc.vehicle_series_name,
       	license_plate: row.doc.license_plate,
       	colour: row.doc.colour,
       	year: row.doc.year
       
    }})
	};
}
