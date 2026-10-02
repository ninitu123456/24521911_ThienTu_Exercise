const loadingState = document.querySelector("#loading-state");
const liveState = document.querySelector("#live-state");
const emptyState = document.querySelector("#empty-state");
const errorState = document.querySelector("#error-state");
const retryButton = document.querySelector("#retry-button");

const states = {
    loading: loadingState,
    live: liveState,
    empty: emptyState,
    error: errorState
};

function showState(stateName) {
    Object.entries(states).forEach(([name, element]) => {
        element.hidden = name !== stateName;
    });
}

retryButton.addEventListener("click", () => {
    showState("loading");
});

showState("live");