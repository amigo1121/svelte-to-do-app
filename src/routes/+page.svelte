<script>
    import path from "path"
    // @ts-ignore
    import TodoItem from "$lib/todo-item.svelte";
    const title = "Todos | New"
</script>
<svelte:head>
    <title>
        {title}
    </title>
</svelte:head>
<h1>{title}</h1>
<form action="" method="">
    <input type="text" name="text" placeholder="+ tpye to add todo" aria-label="add-todo">
</form>
<TodoItem></TodoItem>
<TodoItem></TodoItem>
<TodoItem></TodoItem>
<TodoItem></TodoItem>