<script>
    import { Router, Route, Link } from "svelte-navigator";
    import Chat from './Chat.svelte';
    import SignIn from "./SignIn.svelte";
    import SignUp from "./SignUp.svelte";
</script>

<Router>
    <Route path="/" component={SignUp} />
    <Route path="signin" component={SignIn} />
    <Route path="chat" component={Chat} />
</Router>


