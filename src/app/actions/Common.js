

function setChannelInfo (channelInfo) {
    return {
        type: "SET_CHANNEL_INFO",
        channelInfo,
    }
}

function setUserLogin (login) {
    return {
        type: "SET_USER_LOGIN",
        login,
    }
}

function setGold (gold) {
    return {
        type: "SET_GOLD",
        gold,
    }
}
export {
    setChannelInfo,
    setUserLogin,
    setGold
};