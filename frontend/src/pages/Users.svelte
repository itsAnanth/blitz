<script lang='ts'>
    export let data: { id: string; username: string; avatar: number };

</script>

<div class="user">
    <img src="https://avatars.dicebear.com/api/adventurer-neutral/{data.avatar}.svg" alt="avatar" class="avatar">
    <p class="username">{data.username}</p>
</div>