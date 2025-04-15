export const getUrlId = (dataUrl: any) => {
    const parts = dataUrl.split('/')
    const number = parts[parts.length - 2]
    return parseInt(number)
}
export const upperCaseFirstLetter = (str: string) => {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
}

export const imageExist = (type: string) => {
    try {
        const typsString = type.charAt(0).toUpperCase() + type.slice(1);
        require(`@/assets/pokemonTypeIcon2/${typsString}.png`);
        return require(`@/assets/pokemonTypeIcon2/${typsString}.png`);
    } catch (e) {
        return `${e}`;
    }
};

export const StopOverlayScroll = (value: boolean) => {
    if (value) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }

}