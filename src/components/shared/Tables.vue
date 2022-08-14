<template>
    <section>
        <div class="container mt-3">
            <h1 class="text-center">{{ titulo }}</h1>
            <div class="row">
                <div class="col- mt-5">
                    <div class="table-responsive">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </section>                    
</template>

<script>
    export default {

        props: ['titulo'],
    }    

</script>

<style>
</style>