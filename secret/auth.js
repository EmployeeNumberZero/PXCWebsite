// secret/auth.js
// This script checks if the user has authenticated via the partner gateway.
// If not, it boots them back to the gateway page.
if (sessionStorage.getItem('pxc_partner_auth') !== 'true') {
    // Redirect to the login page (index.html)
    window.location.href = './index.html';
}
