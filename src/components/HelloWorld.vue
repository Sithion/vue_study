<template>
    <div class="page">
        Country: <input type="text" v-model="country"/>
        State: <input type="text" v-model="state"/>
        City: <input type="text" v-model="city"/>
        <button v-on:click="verify">Verify</button>
        <hr/>
        <div>
            {{data}}
        </div>

    </div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		computed: {
			...mapState({
				data: state => state.weather.data
			})
		},
		data: () => ({
			country: '',
			state: '',
			city: '',
		}),
		methods: {
			verify(){
				this.$store.dispatch('weather/verify', {
					country: this.country,
					state: this.state,
					city: this.city
				});
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
    }
</style>
