export const getDefaultImage = (category) => {
    const defaults = {
        bats: '/images/defaults/bat-default.png',
        balls: '/images/defaults/ball-default.png',
        kits: '/images/defaults/kit-default.png',
        default: '/images/defaults/default.png'
    };
    return defaults[category] || defaults.default;
}; 