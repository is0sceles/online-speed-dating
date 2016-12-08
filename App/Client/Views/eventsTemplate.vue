<template>
    <div>
        <span> Sign in for an event </span>
        <table>
        <tr>
            <th>Next Event</th>
            <th>Event Name</th>
            <th>Event Type</th>
        </tr>
        <tr>
            <td> 5pm  </td>
            <td> Menergy  </td>
            <td> Men </td>
        </tr>
        <tr>
            <td> 6:05pm  </td>
            <td> Hot Dates </td>
            <td> Mixed </td>
        </tr>
        <tr>
            <td> 8pm  </td>
            <td> GirlsJustWantToHaveFun  </td>
            <td> Women </td>
        </tr>
        </table>
        <form>
            <input type="text" placeholder="enter your name" v-model="username" >
            <input type="datetime-local" placeholder="enter a date" v-model="date">
            <button role="button" v-on:click.prevent="submit()">Submit</button>
        </form>
   </div>
</template>

<style>
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