export default function ({ cookie, redirect }) {
    if (!cookie.isLoggedin) {
        console.log('not logged in');
        redirect('/wait')
    }
}