<template>
    <div>
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
        font-weight: 800;
        margin-left: 50px;
        text-align: center;
        background: rgba(255, 255, 255, 0.74);
        width: 75%;

    }
    #signIn {
        display: block;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 75%;
        font-weight: 800;
        margin-left: 50px;
        text-align: center;
    }
    td, th {
        border: 1px solid rgba(165, 166, 167, 0.08);
        text-align: left;
        padding: 8px;
        font-weight: 800;
        text-align: center;
    }
    tr:nth-child(even) {
        background-color: #ffffff;
    }
    tr:nth-child(odd) {
        background-color: #d9b883;
    }
</style>