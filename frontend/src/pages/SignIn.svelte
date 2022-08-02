<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Accounts from "../utils/accounts";
    import { client } from "../structures/Store";
    import { Link, useNavigate, useLocation } from "svelte-navigator";

    let user: { error: boolean; detail: any };

    const navigate = useNavigate();
    const location = useLocation();



    if ($client.signedIn) {
        navigate("/chat", {
            state: { from: $location.pathname },
            replace: true,
        });
    }

    const dispatch = createEventDispatcher();
    async function onSubmit(ev: any) {
        const btn: HTMLButtonElement = document.getElementById(
            "signin-btn"
        ) as any;
        ev.preventDefault();
        let email = ev.target.email.value,
            password = ev.target.password.value;

        btn.disabled = true;
        user = await Accounts.signIn(email, password);

        if (!user.error) {
            $client.signedIn = true;
            $client.username = user.detail.displayName;
            dispatch("signin", { username: user.detail.displayName });
        }

        btn.disabled = false;
    }
</script>

<div class="join-container">
    <header class="join-header">
        <h1><i />Blitz</h1>
    </header>
    <main class="join-main">
        {#if user && user.error}
            <div class="join-main-error">
                {user.detail.split("/")[1].split("-").join(" ")}
            </div>
        {/if}
        <form on:submit={onSubmit}>
            <div class="form-control">
                <label for="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    autocomplete="off"
                    required
                />
                <label for="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    autocomplete="off"
                    required
                />
            </div>
            <button type="submit" id="signin-btn" class="btn">Sign In</button>
        </form>
        <div class="signup">Don't have an Account? <Link to="/signup">sign up</Link></div>
    </main>
</div>
