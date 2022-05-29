import { ActionContext, ActionTree, MutationTree } from 'vuex';
import { Route } from 'vue-router';
import Vue from 'vue';
import { getContent } from '@/utils';

export interface State {
  perPage: number;
  pages: Page[];
  posts: Post[];
  portfolioPieces: PortfolioPiece[];
  staffMembers: StaffMember[];
  artists: Artist[];
  route?: Route;
}

// Initial State
export const appState = {
  perPage: 25,
  pages: [],
  posts: [],
  portfolioPieces: [],
  staffMembers: [],
  artists: [],
};

export const mutations: MutationTree<State> = {
  SET_PAGES: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'pages', payload);
  },
  SET_POSTS: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'posts', payload);
  },
  SET_PORTFOLIO_PIECES: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'portfolioPieces', payload);
  },
  SET_STAFF_MEMBERS: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'staffMembers', payload);
  },
  SET_ARTISTS: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'artists', payload);
  },
};

interface Actions<S, R> extends ActionTree<S, R> {
  GET_PAGES_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_POSTS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_PORTFOLIO_PIECES_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_STAFF_MEMBERS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_ARTISTS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  nuxtServerInit(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, State> = {
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

  async GET_POSTS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/blog/', false, /\.json$/);
    const posts = await getContent({ context, prefix: 'blog' });
    commit('SET_POSTS', posts);
  },

  async GET_PAGES_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/pages/', false, /\.json$/);
    const pages = await getContent({
      context,
      prefix: 'pages',
    });
    commit('SET_PAGES', pages);
  },

  async nuxtServerInit({ dispatch }): Promise<void> {
    await Promise.all([
      dispatch('GET_PAGES_LIST'),
      dispatch('GET_POSTS_LIST'),
      dispatch('GET_PORTFOLIO_PIECES_LIST'),
      dispatch('GET_STAFF_MEMBERS_LIST'),
      dispatch('GET_ARTISTS_LIST'),
    ]);
  },
};

export const state = (): State => ({
  ...appState,
});

export const strict = false;
