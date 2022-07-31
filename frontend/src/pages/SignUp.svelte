<script lang="ts">
    import Accounts from "../utils/accounts";
    import { navigate } from "svelte-navigator";

    let user: { error: boolean; detail: any };

    async function onSubmit(ev: any) {
        ev.preventDefault();
        let email = ev.target.email.value,
            password = ev.target.password.value,
            username = ev.target.username.value;


        if (username.length > 30) {
            user = { error: true, detail: "auth/username-too-long" };
            return;
        }

        user = await Accounts.signUp(username, email, password);

        if (!user.error) navigate("/");
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
                <label for="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="What should everyone call you"
                    autocomplete="off"
                    required
                />
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
            <button type="submit" class="btn">Sign Up</button>
        </form>
    </main>
</div>
