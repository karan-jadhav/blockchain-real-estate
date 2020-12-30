export default function ({ app, store, redirect }, inject) {
    function setcookie(login, address) {
        app.$cookiz.set('isLoggedin', login);
        app.$cookiz.set('ethadd', address);
        redirect('/admin');
    }
    function getcookie() {
        const login = app.$cookiz.get('isLoggedin');
        const addr = app.$cookiz.get('ethadd');
        return {
            login, addr
        }
    }
    inject('setcookie', setcookie);
    inject('getcookie', getcookie);
}