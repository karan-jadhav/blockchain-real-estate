export default function ({ store, redirect }) {
    console.log('middleware logging');
    console.log(store.state.isLoggedin);
    if (!store.state.isLoggedin) {
        console.log('not logged in');
        redirect('/wait')
    }
}