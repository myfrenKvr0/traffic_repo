/**
 * Web application
 */
const apiUrl = 'https://c094c5b1.us-south.apigw.appdomain.cloud/repository2';
const repository = {
  // retrieve the existing repository entries
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entry`,
      dataType: 'json'
    });
  },
  // add a single repository entry
  search(name, surname) {
    console.log('Sending',{name, surname, id, gender, drivers_license, contact_number, address, vehicle_make, vehicle_series_name, license_plate, colour, year},_rev)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/entry`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        name,
		surname,
		id,
		gender,
		drivers_license,
		contact_number,
		address, vehicle_make,
		vehicle_series_name,
		license_plate,
		colour, 
		year,
      },_rev),
      dataType: 'json',
    });
  }
};

(function() {

  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entry-template').html());
  }

  // retrieve entries and update the UI
  function loadEntry() {
    console.log('Loading entry...');
    $('#entry').html('Loading entry...');
    repository.get().done(function(result) {
      if (!result.entry) {
        return;
      }

      const context = {
        entry: result.entry
      }
      $('#entry').html(entryTemplate(context));
    }).error(function(error) {
      $('#entry').html('No entry with the entered credentials.');
      console.log(error);
    });
  }

  // intercept the click on the submit button, add the guestbook entry and
  // reload entries on success
  $(document).on('submit', '#updateEntry', function(e) {
    e.preventDefault();
		repository.insert({
		$('#name').val().trim(),
		$('#surname').val().trim(),
		$('#id').val().trim(),
		$('#gender').val().trim(),
		$('#drivers_license').val().trim(),
		$('#contact_number').val().trim(),
		$('#address').val().trim(),
		$('#vehicle_make').val().trim(),
		$('#vehicle_series_name').val().trim(),
		$('#license_plate').val().trim(),
		$('#colour').val().trim(),
		$('#year').val().trim()
	    },$('#_rev').val().trim()).done(function(result) {
	      	// reload entries
	      	loadEntry();
	    	}).error(function(error) {
	      	console.log(error);
	    	});
	

  $(document).ready(function() {
    prepareTemplates();
    loadEntry();
  });
})();
