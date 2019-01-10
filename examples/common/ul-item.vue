<template>
    <ul :class="[ulclass]">
        <li class="nav-item">
            <a href="javascript:;">
                <slot></slot>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    props:["ulclass"]
}
</script>

<style>

</style>
