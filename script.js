jQuery('.wpcf7-intl-tel').each(function(){
    var intl_tel_input = jQuery(this);
    var additional_settings={};
    if( undefined!=intl_tel_input.data('preferredcountries') && ''!=intl_tel_input.data('preferredcountries') ){
        additional_settings.preferredCountries=intl_tel_input.data('preferredcountries').split( '-' );
    }
    intl_tel_input.intlTelInput( intl_tel_object_assign(["gb", additional_settings]) );
    
    var intl_tel_container = intl_tel_input.parents('span')[0];
    var intl_tel_form = intl_tel_input.parents('form');
    intl_tel_form.submit(function(){
        jQuery(intl_tel_container).children('input.wpcf7-intl-tel-full').val("+"+intl_tel_input.intlTelInput('getSelectedCountryData').dialCode+" "+intl_tel_input.val());
        jQuery(intl_tel_container).children('input.wpcf7-intl-tel-country-name').val(intl_tel_input.intlTelInput('getSelectedCountryData').name);
        jQuery(intl_tel_container).children('input.wpcf7-intl-tel-country-code').val(intl_tel_input.intlTelInput('getSelectedCountryData').dialCode);
        jQuery(intl_tel_container).children('input.wpcf7-intl-tel-country-iso2').val(intl_tel_input.intlTelInput('getSelectedCountryData').iso2);
    });
});

function intl_tel_object_assign(allObjects){
    var result={};
    allObjects.forEach(function(currentObject){
        Object.keys(currentObject).forEach(function(key){
            if( currentObject.hasOwnProperty(key) ){
                result[key]=currentObject[key];
            }
        });
    });
    return result;
}