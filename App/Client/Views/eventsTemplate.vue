<template>
    <div>
        <a id="signIn" class="btn btn-primary" role="button" v-on:click.prevent="getEvents"> Get Events </a>
        <span> Sign in for an event </span>
        <table>
        <tr> 
            <th>Next Event</th>
            <th>Event Name</th>
            <th>Event Type</th>
        </tr>
        <tr v-for='item in result'>
            <td> {{ moment(item.date).format('MMMM Do YYYY, h:mm:ss a') }}  </td>
            <td> {{ item.eventName }}  </td>
            <td> {{ item.eventType }} </td>
        </tr>
        </table>
        <form>
            <input type="text" placeholder="enter your name" v-model="username" >
            <input type="datetime-local" placeholder="enter a date" v-model="date">
            <button role="button" v-on:click.prevent="submit">Submit</button>
        </form>
   </div>
</template>

<style>
    #signIn {
        display: block;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>