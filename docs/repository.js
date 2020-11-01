/**
 * Web application
 */
const apiUrl = 'https://3e5da97c.us-south.apigw.appdomain.cloud/repository';
const repository = {
  // retrieve the existing repository entries
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entries`,
      dataType: 'json'
    });
  },
  // add a single guestbood entry
  add(name, surname, id, drivers_license, contact_number, address, vehicle_make, vehicle_series_name, license_plate, colour, year) {
    console.log('Sending',name, surname, id, drivers_license, contact_number, address, vehicle_make, vehicle_series_name, license_plate, colour, year)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/entries`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        name,
		surname,
		id,
		drivers_license,
		contact_number,
		address, vehicle_make,
		vehicle_series_name,
		license_plate,
		colour, 
		year,
      }),
      dataType: 'json',
    });
  }
};

(function() {

  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entries-template').html());
  }

  // retrieve entries and update the UI
  function loadEntries() {
    console.log('Loading entries...');
    $('#entries').html('Loading entries...');
    repository.get().done(function(result) {
      if (!result.entries) {
        return;
      }

      const context = {
        entries: result.entries
      }
      $('#entries').html(entriesTemplate(context));
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }

  // intercept the click on the submit button, add the guestbook entry and
  // reload entries on success
  $(document).on('submit', '#addEntry', function(e) {
    e.preventDefault();

    guestbook.add(
	$('#name').val().trim(),
	$('#surname').val().trim(),
	$('#id').val().trim(),
	$('#drivers_license').val().trim(),
	$('#contact_number').val().trim(),
	$('#address').val().trim(),
	$('#vehicle_make').val().trim(),
	$('#vehicle_series_name').val().trim(),
	$('#license_plate').val().trim(),
	$('#colour').val().trim(),
	$('#year').val().trim()
    ).done(function(result) {
      // reload entries
      loadEntries();
    }).error(function(error) {
      console.log(error);
    });
  });

  $(document).ready(function() {
    prepareTemplates();
    loadEntries();
  });
})();
