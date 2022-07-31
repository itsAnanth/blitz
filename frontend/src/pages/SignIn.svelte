<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Accounts from "../utils/accounts";
    import { client } from "../structures/Store";

    let user: { error: boolean; detail: any };

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
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    autocomplete="off"
                    required
                />
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
    </main>
</div>
