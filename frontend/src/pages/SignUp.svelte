<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { SignUp, UpdateUser } from "../utils/accounts";
    import { client } from '../structures/Store';

    const dispatch = createEventDispatcher();
    async function onSubmit(ev: any) {
        ev.preventDefault();
        let email = ev.target.email.value,
            password = ev.target.password.value,
            username = ev.target.username.value;

        const user = await SignUp(username, email, password);
        if (user) ($client.signedIn = true);


        // if (_username.length > 10) return alert('username too long')
        // dispatch('signin', ({ username: _username }));
    }
</script>

<div class="join-container">
    <header class="join-header">
        <h1><i />Blitz</h1>
    </header>
    <main class="join-main">
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
                    id="username"
                    placeholder="password"
                    autocomplete="off"
                    required
                />
            </div>
            <button type="submit" class="btn">Sign Up</button>
        </form>
    </main>
</div>
