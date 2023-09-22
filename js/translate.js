
function googleTranslateElementInit() {
	new google.translate.TranslateElement({
        pageLanguage: 'es', includedLanguages: 'en,fr', 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, 
        gaTrack: true}, 'google_translate_element');
}


