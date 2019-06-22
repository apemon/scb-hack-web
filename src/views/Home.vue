<template>
  <b-container>
    <b-card class="full-width">
      <b-row>
        <b-col lg="6" class="text-center">
          <h1>Order</h1>
          <h2>{{sale.order}}</h2>
        </b-col>
        <b-col lg="6" class="text-center">
          <h1>Revenue</h1>
          <h2>{{sale.revenue}} THB</h2>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { db } from '../firebase';

interface Sale {
  order?:string,
  revenue?:string
}

@Component
export default class Home extends Vue {
  sale:Sale = {};

  data() {
    return {
      sale: {
        order: '0',
        revenue: '0'
      }
    }
  }
  mounted() {
    let ref = db.collection('sales');
    ref.onSnapshot( (snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc);
        if(doc.id === 'report') {
          let data = doc.data();
          this.sale.order = this.FormatNumber(data.order);
          this.sale.revenue = this.FormatNumber(data.revenue);
        }
      })
    })
  }

  FormatNumber(num:number):string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
</script>
