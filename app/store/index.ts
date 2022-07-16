import { ActionContext, ActionTree, MutationTree } from 'vuex';
import { Route } from 'vue-router';
import Vue from 'vue';
import getContent from '@/utils';

export interface State {
  perPage: number;
  portfolioPieces: PortfolioPiece[];
  staffMembers: StaffMember[];
  artists: Artist[];
  otms: Otm[];
  privacyPolicy: PrivacyPolicy;
  termsOfService: TermsOfService;
  houseRules: HouseRules;
  route?: Route;
}

// Initial State
export const appState = {
  perPage: 25,
  portfolioPieces: [],
  staffMembers: [],
  artists: [],
  otms: [],
  privacyPolicy: {},
  termsOfService: {},
  houseRules: {},
};

export const mutations: MutationTree<State> = {
  SET_PORTFOLIO_PIECES: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'portfolioPieces', payload);
  },
  SET_STAFF_MEMBERS: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'staffMembers', payload);
  },
  SET_ARTISTS: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'artists', payload);
  },
  SET_OTMS: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'otms', payload);
  },
  SET_PRIVACY_POLICY: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'privacyPolicy', payload);
  },
  SET_TERMS_OF_SERVICE: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'termsOfService', payload);
  },
  SET_HOUSE_RULES: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'houseRules', payload);
  },
};

interface Actions<S, R> extends ActionTree<S, R> {
  GET_PORTFOLIO_PIECES_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_STAFF_MEMBERS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_ARTISTS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_OTMS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_PRIVACY_POLICY(context: ActionContext<S, R>): Promise<void | Error>;
  GET_TERMS_OF_SERVICE(context: ActionContext<S, R>): Promise<void | Error>;
  GET_HOUSE_RULES(context: ActionContext<S, R>): Promise<void | Error>;
  nuxtServerInit(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, State> = {
  async GET_OTMS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the monthly_showcase directory matching .json files
    const context = await require.context('@/content/monthly_showcase/', false, /\.json$/);
    const otms = await getContent({ context, prefix: 'monthly_showcase' });
    commit('SET_OTMS', otms);
  },

  async GET_ARTISTS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the artists directory matching .json files
    const context = await require.context('@/content/artists/', false, /\.json$/);
    const artists = await getContent({ context, prefix: 'artists' });
    commit('SET_ARTISTS', artists);
  },

  async GET_STAFF_MEMBERS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the staff directory matching .json files
    const context = await require.context('@/content/staff/', false, /\.json$/);
    const staffMembers = await getContent({ context, prefix: 'staff' });
    commit('SET_STAFF_MEMBERS', staffMembers);
  },

  async GET_PORTFOLIO_PIECES_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the portfolio directory matching .json files
    const context = await require.context('@/content/portfolio/', false, /\.json$/);
    const portfolioPieces = await getContent({ context, prefix: 'portfolio' });
    commit('SET_PORTFOLIO_PIECES', portfolioPieces);
  },

  async GET_PRIVACY_POLICY_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the privacy_policy directory matching .json files
    const context = await require.context('@/content/privacy_policy/', false, /\.json$/);
    const privacyPolicy = await getContent({ context, prefix: 'privacy_policy' });
    commit('SET_PRIVACY_POLICY', privacyPolicy);
  },

  async GET_TERMS_OF_SERVICE_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the terms_of_service directory matching .json files
    const context = await require.context('@/content/terms_of_service/', false, /\.json$/);
    const termsOfService = await getContent({ context, prefix: 'terms_of_service' });
    commit('SET_TERMS_OF_SERVICE', termsOfService);
  },

  async GET_HOUSE_RULES_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the house_rules directory matching .json files
    const context = await require.context('@/content/house_rules/', false, /\.json$/);
    const houseRules = await getContent({ context, prefix: 'house_rules' });
    commit('SET_HOUSE_RULES', houseRules);
  },

  async nuxtServerInit({ dispatch }): Promise<void> {
    await Promise.all([
      dispatch('GET_PORTFOLIO_PIECES_LIST'),
      dispatch('GET_STAFF_MEMBERS_LIST'),
      dispatch('GET_ARTISTS_LIST'),
      dispatch('GET_OTMS_LIST'),
      dispatch('GET_PRIVACY_POLICY_LIST'),
      dispatch('GET_TERMS_OF_SERVICE_LIST'),
      dispatch('GET_HOUSE_RULES_LIST'),
    ]);
  },
};

export const state = (): State => ({
  ...appState,
});

export const strict = false;
