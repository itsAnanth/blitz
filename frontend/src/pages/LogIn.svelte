<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    function onSubmit(ev: any) {
        ev.preventDefault();
        let _username = ev.target.username.value;
        if (_username.length > 10) return alert('username too long')
        dispatch('login', ({ username: _username }));
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
            </div>
            <button type="submit" class="btn">Join Chat</button>
        </form>
    </main>
</div>
