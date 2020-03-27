export const MOVE_PLAYER_UP = "MOVE_PLAYER_UP";
export const MOVE_PLAYER_DOWN = "MOVE_PLAYER_DOWN";
export const MOVE_PLAYER_LEFT = "MOVE_PLAYER_LEFT";
export const MOVE_PLAYER_RIGHT = "MOVE_PLAYER_RIGHT";

export const FETCH_HTML_BEGIN = "FETCH_HTML_BEGIN";
export const FETCH_HTML_FAILURE = "FETCH_HTML_FAILURE";
export const FETCH_HTML_BLANK_RETURN_SUCCESS = "FETCH_HTML_BLANK_RETURN_SUCCESS";
export const FETCH_HTML_SUCCESS = "FETCH_HTML_SUCCESS";

export const MovePlayerUp = () => ({ type: MOVE_PLAYER_UP });
export const MovePlayerDown = () => ({ type: MOVE_PLAYER_DOWN });
export const MovePlayerLeft = () => ({ type: MOVE_PLAYER_LEFT });
export const MovePlayerRight = () => ({ type: MOVE_PLAYER_RIGHT });

export const FetchHtmlBegin = () => ({ type: FETCH_HTML_BEGIN });
export const FetchHtmlFailure = (payL) => ({ type: FETCH_HTML_FAILURE, payload: payL });
export const FetchHtmlBlankReturnSuccess = () => ({ type: FETCH_HTML_BLANK_RETURN_SUCCESS });
export const FetchHtmlSuccess = (payL) => ({ type: FETCH_HTML_SUCCESS, payload: payL });