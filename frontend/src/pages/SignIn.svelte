<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { SignIn } from '../utils/accounts';
    import { client } from '../structures/Store';

    const dispatch = createEventDispatcher();
    async function onSubmit(ev: any) {
        ev.preventDefault();
        let email = ev.target.email.value,
            password = ev.target.password.value;
        

        const user = await SignIn(email, password);

        if (user) {
            $client.signedIn = true;
            $client.username = user.displayName;
        }
        
        dispatch('signin', ({ username: user.displayName }));
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
                    id="username"
                    placeholder="password"
                    autocomplete="off"
                    required
                />
            </div>
            <button type="submit" class="btn">Sign In</button>
        </form>
    </main>
</div>
