<template>
    <div>
        <a id="signIn" class="btn btn-primary" role="button" v-on:click.prevent="getEvents"> Get Events </a>
        <table>
            <tr>
                <th>Next Event</th>
                <th>Event Name</th>
                <th>Event Type</th>
            </tr>
            <tr v-for='item in result'>
                <td> {{ moment(item.date).format('MMMM Do YYYY, h:mm:ss a') }} </td>
                <td> {{ item.eventName }} </td>
                <td> {{ item.eventType }} </td>
            </tr>
        </table>
        <div id='eventLink'>
            <a>
                <router-link to='Admin/eventsCreate'>Create an Event</router-link>
            </a>
        </div>
    </div>
</template>

<style>
    #eventLink {
        margin-top: 20px;
    }
    #signIn {
        display: block;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td,
    th {
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #ddd;
    }
</style>