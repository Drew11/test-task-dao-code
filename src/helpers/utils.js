export function formatTemperature (temp) {
    return temp + '\xB0C.';
}

export function getStatusTemperature (temp) {
    return {
        [temp=== 100]: 'fire',
        [temp===-100]: 'ice',
        [temp<=-10 && temp > -100]: 'cold',
        [temp>=10 && temp < 30]: 'normal',
        [temp>30 && temp < 100]: 'hot'
    }[true]
}