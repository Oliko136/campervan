export const pending = (state) => {
    state.isLoading = true;
    state.error = null;
    state.items = [];
}

export const rejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
    state.items = [];
}