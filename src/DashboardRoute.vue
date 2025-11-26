<script setup>
import {computed, ref, watch} from "vue";
  import randomData from "@/RandomDataGenerator.js";

  const prescriptions = ref([])
  for (let i = 0; i < 10000; i++) {
    let dane = randomData()
    dane.id = i
    prescriptions.value.push(dane)
  }

  const search = ref('')
  const sortBy = ref('Imię')
  const sortOrder = ref('Rosnąco')
  const toShow = ref('Wszystkie')
  const pageRows = ref(20)
  const page = ref(1)

  watch(pageRows, (value, oldValue) => {
    page.value = 1
  })

  watch(search, (value, oldValue) => {
    page.value = 1
  })

  const filtered = computed(() => {
    const terms = search.value.toLowerCase().split(" ")

    return prescriptions.value.filter((data) => {
        if (data.status === 'nie aktywne' && toShow.value === 'Aktywne') return false
        if (data.status === 'aktywne' && toShow.value === 'Nie aktywne') return false
        const searchable = (`${data.imie} ${data.nazwisko} ${data.pesel} ${data.lek} ${data.wystawiono}`).toLowerCase()

        return terms.every(term => searchable.includes(term))
      }
    ).sort((a,b) => {
      const direction = sortOrder.value === "Rosnąco" ? 1 : -1

      if (sortBy.value === "Imię") {
        return a.imie.localeCompare(b.imie) * direction
      }
      if (sortBy.value === "Nazwisko") {
        return a.nazwisko.localeCompare(b.nazwisko) * direction
      }
      if (sortBy.value === "Data wystawienia") {
        return (a.wystawiono < b.wystawiono ? -1 : 1) * direction
      }

      return 0
    })
  })

  const maxPage = computed(() => {
    return Math.ceil(filtered.value.length / pageRows.value)
  })
</script>

<template>
  <main>
    <div id="action-bar">
      <input type="text" v-model="search">
      <select v-model="sortBy">
        <option>Imię</option>
        <option>Nazwisko</option>
        <option>Data wystawienia</option>
      </select>
      <select v-model="sortOrder">
        <option selected>Rosnąco</option>
        <option>Malejąco</option>
      </select>
      <select v-model="toShow">
        <option selected>Wszystkie</option>
        <option>Nie aktywne</option>
        <option>Aktywne</option>
      </select>
      <select v-model="pageRows">
        <option selected>20</option>
        <option>50</option>
        <option>100</option>
      </select>
      <span>Strona {{page}}/{{maxPage}}</span>
      <button @click="page--" :disabled="page <= 1">-</button>
      <button @click="page++" :disabled="page >= maxPage">+</button>
    </div>
    <div id="table-container">
      <table>
        <thead>
        <tr>
          <td>Nr</td> <th>Imię</th> <th>Nazwisko</th> <th>PESEL</th> <th>Dane Leku</th> <th>Wystawiono</th> <th>Status</th> <th>Działania</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(dane, index) in filtered.slice((pageRows * page) - pageRows, pageRows * page)">
          <td>{{index + 1 + (page - 1) * pageRows}}</td> <td>{{dane.imie}}</td> <td>{{dane.nazwisko}}</td> <td>{{dane.pesel}}</td> <td>{{dane.lek}}</td> <td>{{dane.wystawiono}}</td> <td> <div class="status" v-bind:style="{ backgroundColor: dane.status === 'aktywne' ? '#68a866' : '#a86666'}">{{dane.status}}</div></td> <td><button>Rozwiń</button> <button>Edytuj</button> <button>Usuń</button></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="no-data" v-bind:style="{display: filtered.length === 0 ? 'block' : 'none'}">Brak danych</div>
  </main>
</template>

<style scoped>
  #table-container {
    border: 1px solid #dcdcdc;
    border-radius: 10px;
  }

  table {
    width: 100%;
    border-radius: 10px;
    border-collapse: collapse;
  }

  th, td {
    padding: 15px 20px 15px 20px;
    text-align: left;
    border-collapse: collapse;
  }

  th {
    font-weight: 500;
  }

  tbody tr:nth-child(2n - 1) {
    background-color: #f1f1f1;
  }

  tbody tr:nth-child(2n - 1) td {
    border: none;
  }

  .status {
    border-radius: 7px;
    width: 110px;
    height: 40px;
    display: flex;
    align-items: center;
    color: white;

    padding: 0 15px 0 15px;
  }

  table button {
    border-radius: 7px;
    height: 40px;
    border: none;
    font-size: 15px;
    text-align: left;
    padding: 0 15px 0 15px;
    color: white;
    background-color: #464646;
    transition: background-color 0.1s;
  }

  table button:hover {
    background-color: #343434;
    cursor: pointer;
  }

  #no-data {
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }

</style>
