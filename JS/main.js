window.onload = function() {
    const buttons = document.querySelectorAll('.contacts_btn');
    const headerPhoneBox = document.querySelector('.js_header_phone_box');
    const footerPhoneBox = document.querySelector('.js_footer_phone_box');
    const btnHeader = document.querySelector('.header_contacts_btn');
    const btnFooter = document.querySelector('.footer_contacts_btn');

    for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = toggleClass;
    }

    function toggleClass() {

        let btnClass = this.getAttribute('class');
        
        if(btnClass === 'contacts_btn header_contacts_btn') {
            headerPhoneBox.setAttribute('class', 'phone_box header_phone_box js_header_phone_box');
            btnHeader.setAttribute('class', 'contacts_btn header_contacts_btn js_display_none');
        }
         else if (btnClass === 'contacts_btn footer_contacts_btn') {
            footerPhoneBox.setAttribute('class', 'phone_box footer_phone_box js_footer_phone_box');
            btnFooter.setAttribute('class', 'contacts_btn footer_contacts_btn js_display_none');
         }
         else if(btnClass === 'contacts_btn header_contacts_btn js_display_none') {
            headerPhoneBox.setAttribute('class', 'phone_box js_header_phone_box');
            btnHeader.setAttribute('class', 'contacts_btn header_contacts_btn');
         } 
         else if(btnClass === 'contacts_btn footer_contacts_btn js_display_none') {
            footerPhoneBox.setAttribute('class', 'phone_box js_footer_phone_box');
            btnFooter.setAttribute('class', 'contacts_btn footer_contacts_btn');
         }

    }

}