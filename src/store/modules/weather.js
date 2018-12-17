import * as _ from 'lodash';

const state = {
	data: {}
};

// getters
const getters = {};


// actions
const actions = {
	async verify({commit}, config){
		try{
			let search = 'countries';
			let prop = 'country';
			if(config['country']){
				search = 'states';
				prop = 'state';
			}
			if(config['state']){
				search = 'cities';
				prop = 'city';
			}
			if(config['city']){
				search = 'city';
				prop = 'current';
			}
			const baseUrl = `http://api.airvisual.com/v2/${search}`;
			const url = _.map(config, (value, prop) => {
				return `${prop}=${value}`;
			});
			const result = await fetch(`${baseUrl}?key=YuhJA9iDHQ7D7E6XY&${url.join('&')}`);
			let {data} = await result.json();
			if(!(data instanceof Array)){
				data = [data];
			}
			commit('addResult', _.map(data, item => item[prop]));
		} catch(err){
			console.log('err', err);
		}
	},
};

// mutations
const mutations = {
	addResult(state, data){
		state.data = data;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
