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
  route?: Route;
}

// Initial State
export const appState = {
  perPage: 25,
  portfolioPieces: [],
  staffMembers: [],
  artists: [],
  otms: [],
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
};

interface Actions<S, R> extends ActionTree<S, R> {
  GET_PORTFOLIO_PIECES_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_STAFF_MEMBERS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_ARTISTS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_OTMS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  nuxtServerInit(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, State> = {
  async GET_OTMS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/artist_showcase/', false, /\.json$/);
    const otms = await getContent({ context, prefix: 'artist_showcase' });
    commit('SET_OTMS', otms);
  },

  async GET_ARTISTS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/artists/', false, /\.json$/);
    const artists = await getContent({ context, prefix: 'artists' });
    commit('SET_ARTISTS', artists);
  },

  async GET_STAFF_MEMBERS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/staff/', false, /\.json$/);
    const staffMembers = await getContent({ context, prefix: 'staff' });
    commit('SET_STAFF_MEMBERS', staffMembers);
  },

  async GET_PORTFOLIO_PIECES_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/portfolio/', false, /\.json$/);
    const portfolioPieces = await getContent({ context, prefix: 'portfolio' });
    commit('SET_PORTFOLIO_PIECES', portfolioPieces);
  },

  async nuxtServerInit({ dispatch }): Promise<void> {
    await Promise.all([
      dispatch('GET_PORTFOLIO_PIECES_LIST'),
      dispatch('GET_STAFF_MEMBERS_LIST'),
      dispatch('GET_ARTISTS_LIST'),
      dispatch('GET_OTMS_LIST'),
    ]);
  },
};

export const state = (): State => ({
  ...appState,
});

export const strict = false;
