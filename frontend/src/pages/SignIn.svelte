<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { SignIn } from '../utils/accounts';
    import { client } from '../structures/Store';
    // import { useNavigate, useLocation } from "svelte-navigator";

    const dispatch = createEventDispatcher();
    async function onSubmit(ev: any) {
        const btn: HTMLButtonElement = document.getElementById('signin-btn') as any;
        ev.preventDefault();
        let email = ev.target.email.value,
            password = ev.target.password.value;
        
        btn.disabled = true;
        const user = await SignIn(email, password);

        if (user) {
            $client.signedIn = true;
            $client.username = user.displayName;
        }
        
        dispatch('signin', ({ username: user.displayName }));
        btn.disabled = false;
    }
</script>

<div class="join-container">
    <header class="join-header">
        <h1><i />Blitz</h1>
    </header>
    <main class="join-main">
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
