<template>
    <div class="app">
        <SidebarGestor /> 
        <div class="main">
            <div class="row">
			    <h1 class="mb-2">Dashboard</h1>
		    </div>
            <hr> 
            <div class="container"> 
                <CardsGestor /> 
                <CardsDashboard />
                <TabelaDashboard />
            </div> 
        </div>
    </div>
</template>

<script setup>
import CardsDashboard from "../../components/CardsDashboard.vue";
import TabelaDashboard from "../../components/TabelaDashboard.vue";
import CardsGestor from "../../components/CardsGestor.vue";
import SidebarGestor from "../../components/sidebar/SidebarGestor.vue";
        
</script>

<style lang="scss">
    :root {
        --primary: #69be28;
        --grey: #64748b;
        --dark: #1e293b;
        --dark-alt: #334155;
        --light: #f1f5f9;
        --sidebar-width: 300px;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira sans', sans-serif;
    }
    
    body {
        background: var(--light);
    }
    
    button {
        cursor: pointer;
        appearance: none;
        border: none;
        outline: none;
        background: none;
    }
    
    .app {
        display: flex;
    
        .main {
            flex: 1 1 0;
            padding: 2rem;
    
            @media (max-width: 1024px) {
            padding-left: 6rem;
            }
        }
    }
</style>