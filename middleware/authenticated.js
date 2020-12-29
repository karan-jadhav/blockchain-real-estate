export default function ({ store, redirect }) {
    if (!store.state.isLoggedin) {
        console.log('not logged in');
        redirect('/wait')
    }
}